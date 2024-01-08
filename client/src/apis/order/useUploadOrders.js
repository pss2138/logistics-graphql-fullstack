import { useMutation } from "react-query";
import queryClient from "..";
import apiRequest from "../apiRequest";

export default function useUploadOrders(orders) {
  return useMutation({
    mutationKey: `orders`,
    // TODO : not sure if same queryKey with different method still request at the right timing (instead of not requesting)
    mutationFn: async () => {
      return await apiRequest.post("/orders", orders);
    },
    onSuccess: (data) => {
      // request GET '/orders' again to update. but it seems not useful for spread sheet.
      queryClient.invalidateQueries("orders");
      // if (data.length > 0) queryClient.removeQueries("orders"); // not sure if we need to remove as well
    },
    onError: () => {
      // TODO: add defaultErrorHandler()
    },
  });
}
