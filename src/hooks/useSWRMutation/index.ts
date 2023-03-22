import { COOKIES_KEYS } from "data";
import { getCookie } from "lib/js-cookie";
import useSWRMutation from "swr/mutation";

export const useSWRMutationHook = (subUrl, options) => {
  const url = process.env.NEXT_PUBLIC_API_ENDPOINT + "" + subUrl;
  const currentUser = getCookie(COOKIES_KEYS.currentUser);
  options.headers.Authorization = `Bearer ${currentUser.accessToken}`;

  async function fetcher(url, { arg }: { arg: { username: string } }) {
    return fetch(url, {
      ...options,
      body: options.method.toLowerCase() != "delete" ? JSON.stringify(arg) : {},
    }).then((res) => res.json());
  }

  const { trigger,data,error, isMutating } = useSWRMutation(url, fetcher);
  return { trigger,data,error, isMutating };
};

export default useSWRMutationHook;

// usage : 
// const {trigger ,data ,isMutating } = useSWRMutationHook(API_SERVICES_URLS.WITHDRAW.WITHDRAW_DETAILS(idTransaction) , {method: "GET",headers:{}})