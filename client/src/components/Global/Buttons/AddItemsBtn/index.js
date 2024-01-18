import React from "react";
import { errorMsgs } from "../../../../utils/variables";
import * as Styles from "./styles";
import { toastError } from "../../../../style/styleUtils";

const AddItemsBtn = ({ itemType, setItems, uploadItemsMutation }) => {
  const createRandomItem = (isError) => {
    try {
      if (itemType.en === "order") {
        const newOrder = {
          orderStatus: { order: 1, en: "initOrdered" },
          orderedAt: "2023-10-01",
          orderNumFrgn: (Math.random() * 10000000000).toFixed(0).toString(),
          trackingNumUsa: (Math.random() * 100000000).toFixed(0).toString(),
          buyerName: "Maria",
          receiverName: "John",
          personalCustomsIdNum: "TR86542381",
          buyerPhone: "123-456-7890",
          deliveryAddress: "20 W 34th St., New York, NY 10001",
          deliveryMsg: "Empire State Building Floor 1",
          productName: "Water Bottle",
          amount: "3",
          option: "",
          memo: "Please handle carefully.",
        };
        return newOrder;
      }
    } catch (error) {
      toastError(errorMsgs);
      isError = true;
    }
  };
  const handleClickButton = async (event) => {
    event.preventDefault();
    let isError = false;
    const newItem = createRandomItem(isError);
    if (newItem?.productName && !isError) {
      await uploadItemsMutation.mutate(newItem);
      setItems((oldData) => [...oldData, newItem]);
    }
  };

  return (
    <>
      <Styles.AddItemsBtn
        disabled={uploadItemsMutation.isLoading}
        onClick={handleClickButton}
      >
        Add demo {itemType.en} data
      </Styles.AddItemsBtn>
    </>
  );
};

export default AddItemsBtn;
