import { useMutation } from "react-query";
import queryClient from "..";
import apiRequest from "../apiRequest";

export default function useUpdateOrders(orders) {
  return useMutation({
    mutationKey: `order`,
    // TODO : not sure if same queryKey with different method still request at the right timing (instead of not requesting)
    mutationFn: async () => {
      return await apiRequest.db.patch("/order", orders);
    },
    onSuccess: (data) => {
      // request GET '/order' again to update. but it seems not useful for spread sheet.
      queryClient.invalidateQueries("order");
      // if (data.length > 0) queryClient.removeQueries("order"); // not sure if we need to remove as well
    },
    onError: () => {
      // TODO: add defaultErrorHandler()
    },
  });
}
