"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "usehooks-ts";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { useRouter } from "next/navigation";
import { Input } from "../ui/input";
import { jobSeekerForgotPasswordFormSchema } from "@/schemas/zodFormSchema";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
export default function ForgotPasswordFrom() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const router = useRouter();
  if (isDesktop) {
    return (
      <Dialog
        open={true}
        onOpenChange={(open) => {
          if (!open) {
            router.back();
          }
        }}
      >
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Reset password</DialogTitle>
            <DialogDescription>
              click reset password to reset your password
            </DialogDescription>
          </DialogHeader>
          <ProfileForm />
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer
      open={true}
      onClose={() => router.back()}
      onOpenChange={(open) => {
        if (!open) {
          router.back();
        }
      }}
    >
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Reset password</DrawerTitle>
          <DrawerDescription>
            click reset password to reset your password
          </DrawerDescription>
        </DrawerHeader>
        <ProfileForm className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function ProfileForm({ className }: React.ComponentProps<"form">) {
  type jobseekerForgotPasswordForm = z.infer<
    typeof jobSeekerForgotPasswordFormSchema
  >;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<jobseekerForgotPasswordForm>({
    resolver: zodResolver(jobSeekerForgotPasswordFormSchema),
  });
  const onSubmit: SubmitHandler<jobseekerForgotPasswordForm> = (
    data,
    event
  ) => {
    event?.preventDefault();
    console.log("clicked");
    console.log(data);
  };
  return (
    <form
      className={cn("grid items-start space-y-8", className)}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col space-y-2">
        <label htmlFor="email">Email</label>
        <Input
          type="email"
          id="email"
          placeholder="Enter register email"
          className="focus:border-transparent text-base"
          autoFocus
          {...register("email")}
        />
        {errors.email?.message && (
          <p className="text-red-500 text-sm">{errors.email?.message}</p>
        )}
      </div>
      <Button type="submit" className="h-11">
        Reset Password
      </Button>
    </form>
  );
}
