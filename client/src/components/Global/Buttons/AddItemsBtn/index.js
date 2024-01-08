import React from "react";
import { errorMsgs } from "../../../../utils/variables";
import * as Styles from "./styles";
import { toastError } from "../../../../style/styleUtils";

const AddItemsBtn = ({ itemType, setItems, uploadItemsMutation }) => {
  const createRandomItem = (newItems, isError) => {
    try {
      if (itemType.en === "order") {
        const newOrder = {
          _id: "ioij213512joi2135",
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
        newItems.push(newOrder);
      }
    } catch (error) {
      toastError(errorMsgs);
      isError = true;
    }
  };
  const handleClickButton = async (event) => {
    event.preventDefault();
    let isError = false;
    let newItems = [];
    createRandomItem(newItems, isError);
    if (newItems.length > 0 && !isError) {
      // await uploadItemsMutation.mutate(newItems);
      setItems((oldData) => [...oldData, ...newItems]);
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
