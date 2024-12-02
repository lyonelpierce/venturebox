"use client";

import { z } from "zod";
import {
  Credenza,
  CredenzaBody,
  CredenzaClose,
  CredenzaContent,
  CredenzaHeader,
  CredenzaTitle,
  CredenzaTrigger,
} from "@/components/ui/credenza";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Textarea } from "./ui/textarea";
import { useState } from "react";

const formSchema = z.object({
  question: z
    .string()
    .min(10, {
      message: "Question must be at least 10 characters.",
    })
    .max(500, {
      message: "Question must not be longer than 500 characters.",
    }),
});

const CreateBetModal = ({
  children,
  startupId,
}: {
  children: React.ReactNode;
  startupId: string;
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      question: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsLoading(true);
      console.log(values);
      const response = await fetch(
        `https://www.stadium.science/api/venture_vox/${startupId}/create_bet`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            company_id: "47779a70-e31f-4ef6-9929-79af58c790b7",
            protocol_title: values.question,
            protocol_falsifiable_hypothesis:
              "Company XYZ will achieve 25% revenue growth in Q4 2024",
            protocol_daily_question:
              "Is the company on track to meet the Q4 revenue target?",
            protocol_steps: "helloworld",
            protocol_start_date: "2024-01-01T00:00:00Z",
            protocol_end_date: "2024-12-31T23:59:59Z",
            bet_type: "yes_no",
            possible_answers: ["Yes", "No"],
            answer_rules: {
              frequency: "daily",
              validation_criteria: "Must be supported by revenue data",
            },
          }),
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Credenza>
      <CredenzaTrigger asChild>{children}</CredenzaTrigger>
      <CredenzaContent className="pb-4">
        <CredenzaHeader>
          <CredenzaTitle>Create a Bet</CredenzaTitle>
        </CredenzaHeader>
        <CredenzaBody>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="question"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Question</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Your question"
                        className="resize-none"
                        {...field}
                        disabled={isLoading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex gap-3 mt-2">
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-2/3 bg-green-400 font-bold text-black"
                >
                  Create Bet
                </Button>
                <CredenzaClose asChild>
                  <Button
                    type="button"
                    disabled={isLoading}
                    className="w-1/3 bg-muted text-black font-medium"
                  >
                    Cancel
                  </Button>
                </CredenzaClose>
              </div>
            </form>
          </Form>
        </CredenzaBody>
      </CredenzaContent>
    </Credenza>
  );
};

export default CreateBetModal;
