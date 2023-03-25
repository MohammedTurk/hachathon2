 

export const API_SERVICES_URLS = {
  SIGN_UP: "/user/signup",
  SIGN_IN: "/user/login",
  FORGOT_PASSWORD: "/user/password/forgot",
  VERIFY_CODE: "/user/password/verify-code",
  RECOVER_PASSWORD: "/user/password/recover",
  VERIFICATION: {
    SEND_EMAIL_CODE: "/user/send-code-email",
    SEND_MOBILE_CODE: "/user/send-code-mobile",
    EMAIL: "/user/verify/email",
    MOBILE: "/user/verify/mobile",
    IDENTITY: "/user/verify/id",
    ADDRESS: "/user/verify/address",
  },
  CLIENT: {
    INVOICE_DETAILS: (id: string) => `/invoice/client/${id}`,
    COMPLETE_INVOICE: (id: string) => `/invoice/client/complete-invoice/${id}`,
    INVOICE_PREVIEW: (id: string) => `/invoice/client/preview/${id}`,
    PAYMENT_OPTIONS: (id: string) => `/invoice/client/payment-options/${id}`,
    EDIT_INVOICE: (id: string) => `/invoice/edit/${id}`,
    EDIT_LINK: (id: string) => `/service/edit/${id}`,
    GET_INVOICE :(id: string) => `/invoice/${id}` ,
    GET_LINK :(id: string) => `/service/details/${id}` ,
    CREATE_INVOICE:"/invoice/create",
    CREATE_LINK:"/service/create",
    INVOICE_LIST :`/transactions/invoice-service-listing`,
    INVOICE_DETAILS: (id: string) => `/invoice/${id}`,
    INVOICE_CHANGESTATUS:(id:string)=> `/invoice/change-status/${id}`,
    LINK_DETAILS:(id:string)=> `/service/details/${id}`,
    LINK_CHANGESTATUS:(id:string)=> `/service/change-status/${id}`
  },
  PAYMENT: {
    STRIPE_SESSION: "/invoice/payment/stripe/create-checkout-session",
  },
  INVOICE: {
    CREATE_INVOICE: "/invoice/create",

  },
  
  
} as const;

export const COOKIES_KEYS = {
  currentUser: "currentUser",
} as const;

export const LOCAL_STORAGE_KEYS = {} as const;
