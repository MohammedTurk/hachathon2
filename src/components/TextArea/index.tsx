import { TextAreaProps } from "components/types";
import { forwardRef } from "react";
 
export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      label,
      placeholder,
      id,
      rows = 4,
      labelClassName,
      error = false,
      withoutHelperText = false,
      helperText,
      ...rest
    },
    ref
  ) => {
    const classNames = {
      label: `block mb-1 ${labelClassName ?? ""}`,
      textArea: `block p-2.5 w-full text-sm text-gray-dark border border-gray-300 focus:ring-blue-500   border-gray focus:ring-0 focus:border-blue rounded-md`,
      helperText: "inline-flex min-h-[20px] text-xs mt-1",
      error:"!border-red focus:!border-red"
    };
 

    return (
      <div className="my-3">
        {label ? (
          <label htmlFor={`area-${id}`} className={classNames.label}>
            {label}
          </label>
        ) : null}

        <textarea
          id={`area-${id}`}
          rows={rows}
          className={`${classNames.textArea} ${error ? classNames.error:''}`}
          placeholder={placeholder}
          ref={ref}
          {...rest}
        />
        {!withoutHelperText && (
          <p className={classNames.helperText}>{helperText}</p>
        )}
      </div>
    );
  }
);

TextArea.displayName = "TextArea";
export default TextArea;
