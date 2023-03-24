import type { UseFormProps, Path, Control,   FieldErrors, UseFieldArrayAppend, UseFieldArrayRemove, UseFormRegister,UseFormSetValue ,UseFormGetValues ,UseFormHandleSubmit } from "react-hook-form";

export type FieldValues = Record<string, any>;

export type FieldNames<TFieldValues> =
  | Path<TFieldValues>
  | Path<TFieldValues>[]
  | readonly Path<TFieldValues>[]
  | undefined;

export type { UseFormProps,UseFormSetValue , Control, FieldErrors, UseFieldArrayAppend, UseFieldArrayRemove, UseFormRegister,UseFormGetValues,UseFormHandleSubmit };
