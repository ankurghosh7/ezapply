import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { IoIosInformationCircle } from "react-icons/io";
import { useFormContext } from "react-hook-form";
import { Input } from "../ui/input";

interface FormInputProps {
  label: string;
  id: string;
  name: string;
  placeholder: string;
  error: string | undefined;
  className?: string;
  showInfo: boolean;
  infoString?: string;
  type: string;
}

function FormInput({
  error,
  label,
  name,
  placeholder,
  showInfo,
  id,
  className,
  infoString,
  type,
  ...rest
}: FormInputProps) {
  const { register } = useFormContext();
  return (
    <>
      <label htmlFor={id} className="flex items-center space-x-2">
        <span className="text-black dark:text-white text-sm font-medium">
          {label}
        </span>
        {showInfo && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <IoIosInformationCircle className="text-gray-500/70" />
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-sm">{infoString}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </label>
      <Input
        className={`rounded-lg ring-offset-[#e9ebf6] dark:ring-offset-background text-base h-11 border focus:border-transparent ${
          error ? "border-red-500 outline-red-500 " : ""
        } ${className}`}
        placeholder={placeholder}
        id={id}
        type={type}
        {...register(name)}
        {...rest}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </>
  );
}

export default FormInput;
