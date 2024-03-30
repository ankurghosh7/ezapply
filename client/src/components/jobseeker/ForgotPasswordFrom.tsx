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
  return (
    <form className={cn("grid items-start space-y-8", className)}>
      <div className="flex flex-col space-y-2">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter register email"
          className="p-2 rounded-xl bg-transparent border-2 border-gray-300 w-full focus:outline-none focus:ring-1 ring-orange-500 focus:ring-offset-2 ring-offset-slate-50  dark:ring-offset-background focus:border-transparent"
        />
      </div>
      <Button type="submit">Save changes</Button>
    </form>
  );
}
