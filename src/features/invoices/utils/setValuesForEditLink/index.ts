import { CreateInvoiceFormInputsTypes } from "features/invoices/types";
import {
  FieldValues,
  UseFieldArrayAppend,
  UseFormSetValue,
} from "lib/react-hook-form/types";

export const setValuesForEditLink = (
  setValue: UseFormSetValue<CreateInvoiceFormInputsTypes>,
  data: any,
  append: UseFieldArrayAppend<FieldValues, "fixed">
) => {
  setValue("currency", data.service.currency);
  setValue(`fixed.${0}.itemName`, data.service.fixed[0].itemName);
  setValue(`fixed.${0}.price`, data.service.fixed[0].price);
  setValue(`fixed.${0}.description`, data.service.fixed[0].description);
  let fixedArr = data.service.fixed.slice(1);
  fixedArr.forEach((obj: any) => {
    append({
      itemName: obj.itemName,
      price: obj.price,
      description: obj.description,
    });
  });
};
