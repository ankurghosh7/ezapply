import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { IoIosInformationCircle } from "react-icons/io";
import { useFormContext } from "react-hook-form";

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
        className={`p-2 rounded-xl w-full border-2 border-gray-300 dark:border-gray-800 bg-transparent focus:outline-none focus:border-transparent tramsition-all duration-200 ease-in-out  ${
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
