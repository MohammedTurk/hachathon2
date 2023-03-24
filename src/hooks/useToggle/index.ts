import { useState } from "react";

export const useToggle = (value=false) => {
  let [isOpen, setIsOpen] = useState(value);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  function toggleModal() {
    setIsOpen((prev)=>!prev)
  }

  return { isOpen, closeModal, openModal,toggleModal };
};
export default useToggle;
