import { forwardRef } from "react";
import type { CheckboxProps } from "components/types";

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      id,
      className,
      inputClassName,
      type = "checkbox",
      labelClassName,
      ...rest
    },
    ref
  ) => {
    return (
      <div className="mb-3">
        <input
          id={id}
          type='checkbox'
          ref={ref}
          {...rest}
        />
        {label && (
          <label
            htmlFor={id}
            className='mx-3'
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
