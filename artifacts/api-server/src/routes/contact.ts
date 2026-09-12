import { Router } from "express";
import { db, contactMessagesTable } from "@workspace/db";
import { SubmitContactBody } from "@workspace/api-zod";
import { sendContactEmails } from "../lib/email.js";
import { logger } from "../lib/logger.js";

const contactRouter = Router();

contactRouter.post("/contact", async (req, res) => {
  const parsed = SubmitContactBody.safeParse(req.body);

  if (!parsed.success) {
    res.status(400).json({
      error: "Invalid request body",
    });
    return;
  }

  const {
    name,
    email,
    subject,
    message,
  } = parsed.data;

  try {
    // 1. Save to database
    const [inserted] = await db
      .insert(contactMessagesTable)
      .values({
        name,
        email,
        subject: subject ?? null,
        message,
      })
      .returning();

    // 2. Send emails
    try {
      await sendContactEmails({
        name: inserted.name,
        email: inserted.email,
        subject: inserted.subject,
        message: inserted.message,
      });

      logger.info(
        {
          contactId: inserted.id,
          email: inserted.email,
        },
        "Contact emails sent successfully",
      );
    } catch (emailError) {
      // Important:
      // The contact was already saved successfully.
      // Don't tell the visitor their message failed just
      // because an email service temporarily failed.

      logger.error(
        {
          err: emailError,
          contactId: inserted.id,
        },
        "Contact saved but email notification failed",
      );
    }

    // 3. Return success
    res.status(201).json({
      id: inserted.id,
      name: inserted.name,
      email: inserted.email,
      subject: inserted.subject ?? null,
      message: inserted.message,
      createdAt: inserted.createdAt.toISOString(),
    });
  } catch (err) {
    logger.error(
      { err },
      "Failed to save contact message",
    );

    res.status(500).json({
      error: "Failed to save message",
    });
  }
});

export default contactRouter;