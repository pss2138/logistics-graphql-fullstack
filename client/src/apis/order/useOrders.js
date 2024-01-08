import { useQuery } from "react-query";
import apiRequest from "../apiRequest";

export default function useOrders(options) {
  return useQuery({
    queryKey: `orders`,
    queryFn: async () => {
      return await apiRequest.get("/orders");
    },
    onSuccess: () => {},
    onError: () => {},
    options,
  });
}
