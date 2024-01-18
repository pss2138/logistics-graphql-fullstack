import { useMutation } from "react-query";
import queryClient from "..";
import apiRequest from "../apiRequest";

export default function useUploadOrder() {
  return useMutation({
    mutationKey: `order`,
    // TODO : not sure if same queryKey with different method still request at the right timing (instead of not requesting)
    mutationFn: async (order) => {
      return await apiRequest.post(
        "/order",
        Object.assign(order, { orderStatus: order.orderStatus.en })
      );
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
