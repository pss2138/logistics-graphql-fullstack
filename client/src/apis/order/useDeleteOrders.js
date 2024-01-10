import { useMutation } from "react-query";
import queryClient from "..";
import apiRequest from "../apiRequest";

export default function useDeleteOrders(orderIds, options) {
  return useMutation({
    mutationKey: `order`,
    // TODO : not sure if same queryKey with different method still request at the right timing (instead of not requesting)
    mutationFn: async () => {
      return await apiRequest.db.delete("/order", orderIds);
    },
    onSuccess: (data) => {
      // request GET '/orders' again to update. but it seems not useful for spread sheet.
      queryClient.invalidateQueries("order");
      // if (data.length > 0) queryClient.removeQueries("orders"); // not sure if we need to remove as well
    },
    onError: () => {
      // TODO: add defaultErrorHandler()
    },
    options,
  });
}
