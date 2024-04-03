"use client";
import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cn } from "@/lib/utils";
import { Circle } from "lucide-react";
interface BoxRadioBtnProps {
  title: string;
  des: string;
  iconimage: string;
}
const BoxRadioBtn = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> &
    BoxRadioBtnProps
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "group aspect-square h-28 w-80 rounded-xl border-2 grid grid-flow-col grid-cols-8 border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 aria-checked:border-orange-500 overflow-hidden p-2",
        className
      )}
      {...props}
    >
      <div className="w-6 h-6  rounded-full border-2 col-span-1 group-data-[state=checked]:border-transparent transition-all overflow-hidden">
        <RadioGroupPrimitive.Indicator className="group w-full h-full data-[state=checked]:bg-orange-500 flex justify-center items-center border-none ">
          <Circle className="h-2.5 w-2.5 fill-current text-current group-data-[state=checked]:text-white" />
        </RadioGroupPrimitive.Indicator>
      </div>
      <div className="col-span-5 h-full flex flex-col justify-center items-start select-none">
        <h3 className="text-lg font-semibold text-foreground">{props.title}</h3>
        <p className="text-sm text-gray-500 dark:text-zinc-400">{props.des}</p>
      </div>
      <div className="col-span-3 h-full ">
        <img src={props.iconimage} alt="icon" />
      </div>
    </RadioGroupPrimitive.Item>
  );
});

BoxRadioBtn.displayName = RadioGroupPrimitive.Item.displayName;
export default BoxRadioBtn;
