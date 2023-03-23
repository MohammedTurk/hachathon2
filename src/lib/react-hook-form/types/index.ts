import type { UseFormProps, Path, Control, FieldErrors, UseFieldArrayAppend, UseFieldArrayRemove, UseFormRegister ,UseFormGetValues } from "react-hook-form";

export type FieldValues = Record<string, any>;

export type FieldNames<TFieldValues> =
  | Path<TFieldValues>
  | Path<TFieldValues>[]
  | readonly Path<TFieldValues>[]
  | undefined;

export type { UseFormProps , Control, FieldErrors, UseFieldArrayAppend, UseFieldArrayRemove, UseFormRegister,UseFormGetValues };
