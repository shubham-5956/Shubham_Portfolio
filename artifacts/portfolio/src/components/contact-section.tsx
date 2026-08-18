import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

import {
  Github,
  Linkedin,
  Mail,
  Send,
} from "lucide-react";

type ContactFormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactSection() {
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },

    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const onSubmit = async (values: ContactFormValues) => {
    try {
      const response = await fetch(
        "http://localhost:3001/api/contact",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            name: values.name.trim(),
            email: values.email.trim(),
            subject: values.subject.trim() || undefined,
            message: values.message.trim(),
          }),
        }
      );

      if (!response.ok) {
        let errorMessage =
          "Unable to send your message. Please try again.";

        try {
          const errorData = await response.json();

          if (
            errorData &&
            typeof errorData.error === "string"
          ) {
            errorMessage = errorData.error;
          }
        } catch {
          // Ignore invalid JSON response.
        }

        throw new Error(errorMessage);
      }

      toast({
        title: "Message sent successfully",
        description:
          "Thanks for reaching out. I'll get back to you soon.",
      });

      form.reset();
    } catch (error) {
      console.error(
        "Contact form submission failed:",
        error
      );

      toast({
        title: "Unable to send message",
        description:
          error instanceof Error
            ? error.message
            : "Please try again or email me directly.",
        variant: "destructive",
      });
    }
  };

  return (
    <section
      id="contact"
      className="py-24 relative"
    >
      <div className="container mx-auto px-6 md:px-12 max-w-5xl relative z-10">

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
          }}
        >

          {/* HEADER */}
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              05. Contact
            </h2>

            <div className="h-px bg-border flex-1 ml-4" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">

            {/* LEFT SIDE */}
            <div className="space-y-8">

              <div className="space-y-3">
                <h3 className="text-xl font-bold">
                  Let's build something together.
                </h3>

                <p className="text-muted-foreground">
                  Whether it's a project, opportunity, or
                  conversation — I'm open to connecting.
                </p>
              </div>

              <div className="space-y-4 font-mono text-sm">

                <a
                  href="mailto:shubhamkumaragarwal2@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary"
                >
                  <Mail className="w-4 h-4" />
                  Email
                </a>

                <a
                  href="https://github.com/shubham-5956"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>

                <a
                  href="https://linkedin.com/in/shubhamkumaragarwal2"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>

              </div>
            </div>

            {/* CONTACT FORM */}
            <div className="p-6 rounded-xl bg-card border border-border">

              <Form {...form}>

                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-5"
                >

                  {/* NAME */}
                  <FormField
                    control={form.control}
                    name="name"
                    rules={{
                      required: "Name is required",
                      validate: (value) =>
                        value.trim().length > 0 ||
                        "Name is required",
                    }}
                    render={({ field }) => (
                      <FormItem>

                        <FormLabel>
                          Name
                        </FormLabel>

                        <FormControl>
                          <Input
                            placeholder="Your name"
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />

                      </FormItem>
                    )}
                  />

                  {/* EMAIL */}
                  <FormField
                    control={form.control}
                    name="email"
                    rules={{
                      required: "Email is required",

                      pattern: {
                        value:
                          /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message:
                          "Please enter a valid email address",
                      },
                    }}
                    render={({ field }) => (
                      <FormItem>

                        <FormLabel>
                          Email
                        </FormLabel>

                        <FormControl>
                          <Input
                            type="email"
                            placeholder="you@email.com"
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />

                      </FormItem>
                    )}
                  />

                  {/* SUBJECT */}
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>

                        <FormLabel>
                          Subject
                        </FormLabel>

                        <FormControl>
                          <Input
                            placeholder="Optional subject"
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />

                      </FormItem>
                    )}
                  />

                  {/* MESSAGE */}
                  <FormField
                    control={form.control}
                    name="message"
                    rules={{
                      required: "Message is required",

                      validate: (value) => {
                        if (value.trim().length === 0) {
                          return "Message is required";
                        }

                        if (value.trim().length < 10) {
                          return "Message must be at least 10 characters";
                        }

                        return true;
                      },
                    }}
                    render={({ field }) => (
                      <FormItem>

                        <FormLabel>
                          Message
                        </FormLabel>

                        <FormControl>
                          <Textarea
                            placeholder="Write your message..."
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />

                      </FormItem>
                    )}
                  />

                  {/* SUBMIT BUTTON */}
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={
                      form.formState.isSubmitting
                    }
                  >
                    <Send className="w-4 h-4 mr-2" />

                    {form.formState.isSubmitting
                      ? "Sending..."
                      : "Send Message"}
                  </Button>

                </form>

              </Form>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}