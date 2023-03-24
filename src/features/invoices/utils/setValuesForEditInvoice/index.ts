import { CreateInvoiceFormInputsTypes } from "features/invoices/types";
import {
  FieldValues,
  UseFieldArrayAppend,
  UseFormSetValue,
} from "lib/react-hook-form/types";

export const setValuesForEditInvoice = (
  setValue: UseFormSetValue<CreateInvoiceFormInputsTypes>,
  data: any,
  append: UseFieldArrayAppend<FieldValues, "fixed">
) => {
  setValue("client.fullName", data.invoice.client.fullName);
  setValue("client.email", data.invoice.client.email);
  setValue("client.address.country", data.invoice.client.address.country);
  setValue("currency", data.invoice.currency);
  setValue("client.fullName", data.invoice.client.fullName);
  setValue(`fixed.${0}.itemName`, data.invoice.fixed[0].itemName);
  setValue(`fixed.${0}.price`, data.invoice.fixed[0].price);
  setValue(`fixed.${0}.description`, data.invoice.fixed[0].description);
  let fixedArr = data.invoice.fixed.slice(1);
  fixedArr.forEach((obj: any) => {
    append({
      itemName: obj.itemName,
      price: obj.price,
      description: obj.description,
    });
  });
};
