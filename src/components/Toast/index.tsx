import React from 'react'

export const Toast = ({positionClass="top-[82%] right-[50%]",ToastDescription="",isOpen="false"}) => {
  return (
    <div
    id="toast-success"
    className={`flex fixed transition-transform  duration-500 items-center whitespace-nowrap  w-full max-w-sm p-4 mb-4 text-black bg-[#F2FFF3] rounded-lg shadow border border-[#D4D4D4]  ${positionClass ?? ""} ${isOpen ? "-translate-x-0" : "-translate-x-[3000px]"} `}
    role="alert"
  >
    <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg  ">
      <svg
        aria-hidden="true"
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clip-rule="evenodd"
        ></path>
      </svg>
      <span className="sr-only">Check icon</span>
    </div>
    <div className="ml-3 text-sm font-medium">
      {ToastDescription}
    </div>
    
  </div>
  )
}
export default Toast