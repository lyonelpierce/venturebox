"use client";

import { z } from "zod";
import {
  Credenza,
  CredenzaBody,
  CredenzaClose,
  CredenzaContent,
  CredenzaHeader,
  CredenzaTitle,
} from "@/components/ui/credenza";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

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

const CreateBetModal = ({ startupId }: { startupId: string }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  const { isAuthenticated } = useAuth();

  const router = useRouter();

  const handleOpen = () => {
    setOpen(true);
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      question: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsLoading(true);
      const response = await fetch("/api/bets/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          values,
          startupId,
        }),
      });

      if (response.ok) {
        setOpen(false);
        router.refresh();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <Button
        onClick={handleOpen}
        className="px-6 text-xs tracking-wide font-bold uppercase bg-green-400 rounded-xl text-[#225d40]"
        size="sm"
      >
        Create a Bet
      </Button>
      <Credenza open={open} onOpenChange={setOpen}>
        <CredenzaContent className="pb-8">
          <CredenzaHeader>
            <CredenzaTitle>Create a Bet</CredenzaTitle>
          </CredenzaHeader>
          <CredenzaBody>
            {isAuthenticated ? (
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
                      className="w-2/3 bg-green-400 text-[#1e583b] font-bold"
                    >
                      {isLoading ? (
                        <Loader2 className="animate-spin" />
                      ) : (
                        "Create Bet"
                      )}
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
            ) : (
              <div className="flex flex-col items-center justify-center gap-4">
                <p>Please login to create a bet</p>
                <Button>Login</Button>
              </div>
            )}
          </CredenzaBody>
        </CredenzaContent>
      </Credenza>
    </>
  );
};

export default CreateBetModal;
