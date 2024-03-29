import React from "react";
interface FormInputProps {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  error: string | undefined;
  autoComplete: string;
  className?: string;
  showInfo: boolean;
  infoString?: string;
  props?: any;
  register: ReturnType<typeof useFormContext>["register"];
}
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { IoIosInformationCircle } from "react-icons/io";
import { useFormContext } from "react-hook-form";
function FormInput({
  autoComplete,
  error,
  label,
  name,
  placeholder,
  showInfo,
  type,
  register,
  className,
  infoString,
  props,
}: FormInputProps) {
  return (
    <>
      <label htmlFor={name} className="block">
        <span>{label}</span>
        {showInfo && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <IoIosInformationCircle className="text-gray-500" />
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-sm">{infoString}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </label>
      <input
        type={type}
        id={name}
        className={`p-2 rounded-lg w-full border-2 border-gray-300  ${
          error ? "border-red-500 outline-red-500 text-red-500" : ""
        } ${className}`}
        autoComplete={autoComplete}
        placeholder={placeholder}
        {...props}
        {...register}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </>
  );
}

export default FormInput;
