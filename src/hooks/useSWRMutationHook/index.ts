import { useSWRMutation, type MutationFetcher } from "lib/swr";
import axios from "lib/axios";
import { getAuthorizationHeader } from "utils";

const myFetcher = async (url, method, options) => {
  try {
    const response = await axios({
      url,
      method,
      ...options,
      headers: { ...getAuthorizationHeader() },
    });   
    return response.data;
  } catch (error) {
   console.log(error);
    
  }
};

export const useSWRMutationHook = (
  url,
  method = "get",
  options = {}
) => {
  const {trigger, data, error, isMutating } = useSWRMutation(
    [url, method, options],
    () => myFetcher(url, method, options)
  );
  return { trigger , data , error, isMutating };
};

export default useSWRMutationHook;
// usage :
//         
//         function when i need to make request  ,    data,    isLoading
// const {trigger ,data ,isMutating } = useSWRMutationHook(
// API_SERVICES_URLS.WITHDRAW.WITHDRAW_DETAILS(idTransaction), { method: "GET", headers: {} })
// <======== path =========================================>   <---- object ---------------->
//                                                             don't put the token it's by default exist


// returned data ==>  Data request 
// {message:'...' ,status:'...' , data:'...'}
