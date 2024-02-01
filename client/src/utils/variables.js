import InputCell from "../components/Global/Cells/InputCell";
import NonEditableCell from "../components/Global/Cells/NonEditableCell";
import SelectCell from "../components/Global/Cells/SelectCell";

// Regular Expression
export const regexAnyAlphabetNumber = /^[a-zA-Z0-9_.-]*$/;
export const regexAnyNumber = /^[0-9]*$/;

// Errors
export const errorMsgs = {
  ALPHABET_NUM_ONLY: {
    message: "Alphabets, Number, _ . - only.",
  },
  NUM_ONLY: {
    message: "Number only.",
  },
  TOO_MANY_LETTERS: {
    message: "Too long text.",
  },
  ITEM_SAVE_FAILED: {
    message: "Failed item uploading.\nAfter refresh, please try again.",
  },
  ON_PROCESS: {
    message: "Loading... Please try again later.",
  },
  ITEM_UPLOAD_FAILED: {
    message: "Failed item uploading.\nAfter refresh, please try again.",
  },
  ITEM_DELETE_FAILED: {
    message: "Failed item deleting.\nAfter refresh, please try again.",
  },
  PAYMENT_FAILED: {
    message: "Subscription failed.\nPlease try again.",
  },
};
export const warnMsgs = {
  CONSTANT_ERROR: {
    message: "Continuous error.\nPlease contact admin.",
  },
};
export const infoMsgs = {
  ITEM_NOT_UPDATED: {
    message: "No item updated.",
  },
  ORDER_NOT_SELECTED: {
    message: "Please select at least one deleting order.",
  },
};
export const successMsgs = {
  ITEM_SAVE_SUCCESSED: {
    message: "Successfully saved the data.",
  },
  ITEM_DELETE_SUCCESSED: {
    message: "Successfully deleted the data.",
  },
  PAYMENT_SUCCESS: {
    message: "Successfully subscription started!",
  },
};

// Stripe
export const handleStripeError = (error) => {
  let errorMsg;
  switch (error.code) {
    case "incorrect_number":
      errorMsg =
        "Card number is incorrect. Please check the card number or use a different card.";
      return errorMsg;
    case "incorrect_cvc":
      errorMsg =
        "Incorrect cvc number. Please check the cvc number or use a different card.";
      return errorMsg;
    case "incorrect_zip":
      errorMsg =
        "Invalid zip number. Please check the postal code or use a different card.";
      return errorMsg;
    case "postal_code_invalid":
      errorMsg =
        "Invalid postal code. Please check the postal code or use a different card.";
      return errorMsg;
    case "incomplete_cvc":
      errorMsg =
        "Incomplete cvc number. Please check the cvc number or use a different card.";
      return errorMsg;
    case "incomplete_number":
      errorMsg =
        "Incomplete card number. Please check the card number or use a different card.";
      return errorMsg;
    case "invalid_cvc":
      errorMsg =
        "Invalid cvc number. Please check the cvc number or use a different card.";
      return errorMsg;
    case "invalid_expiry_month":
      errorMsg =
        "Invalid expiration month. Please check the expiration month or use a different card.";
      return errorMsg;
    case "invalid_expiry_year":
      errorMsg =
        "Invalid expiration year. Please check the expiration year or use a different card.";
      return errorMsg;
    case "card_declined":
      if (error.decline_code === "insufficient_funds") {
        errorMsg = "Card has insufficient funds. Please try another card.";
      } else if (error.decline_code === "lost_card") {
        errorMsg = "Card has been reported as lost. Please try another card.";
      } else if (error.decline_code === "stolen_card") {
        errorMsg = "Card has been reported as stolen. Please try another card.";
      } else if (error.decline_code === "generic_decline") {
        errorMsg =
          "Card needs a contact with the card issuer. Please try another card.";
      } else {
        return error.message;
        // errorMsg = "Card declined. Please try another card.";
      }
      return errorMsg;
    case "expired_card":
      errorMsg = "Card is expired. Please try another card.";
      return errorMsg;
    case "card_decline_rate_limit_exceeded":
      errorMsg =
        "This card has been declined too many times. Please try again after 24 hours or with a different card.";
      return errorMsg;
    case "country_unsupported":
      errorMsg = "Country not yet supported. Please Contact Moverse.";
      return errorMsg;
    case "processing_error":
      errorMsg =
        "Payment processing error. Please try again or with a different card.";
      return errorMsg;
    default:
      // Handle any other unexpected error codes
      // errorMsg = "Error occurred. Please contact Moverse.";
      // return errorMsg;
      return error.message;
  }
};

// Orders
const orderStatuses = [
  { id: 1, en: "initOrdered", label: { en: "Initial Order" } },
  { id: 2, en: "purchasedFGRN", label: { en: "Purchased In China" } },
  { id: 3, en: "deliveryOrdered", label: { en: "Deliverying In China" } },
  {
    id: 4,
    en: "trackingNumFGRNEntered",
    label: { en: "Foreign Delivery Number Entered" },
  },
  {
    id: 5,
    en: "trackingNumUsaEntered",
    label: { en: "Regional Delivery Number Entered" },
  },
  { id: 6, en: "deliveryCompleted", label: { en: "Delivery Completed" } },
  { id: 7, en: "purchaseConfirmed", label: { en: "Purchased Confirmed" } },
  { id: 9, en: "purchaseCanceled", label: { en: "Purchase Canceled" } },
];
export const statuses = {
  orderStatus: orderStatuses,
};
export const itemTypes = {
  order: { en: "order" },
};
export const nonTableUpdatePathnames = [];

const getInputCell = ({
  props,
  affectedOtherCells,
  isNumberOnly,
  isAlphabetNumberOnly,
}) => {
  return (
    <InputCell
      initialValue={props.cell.value}
      row={props.row}
      columnId={props.column.id}
      handleUpdateItems={props.handleUpdateItems}
      affectedOtherCells={affectedOtherCells}
      isNumberOnly={isNumberOnly}
      isAlphabetNumberOnly={isAlphabetNumberOnly}
      isNonEditable={props.isNonEditable}
    />
  );
};
const inputCells = {
  orderNumFrgn: {
    accessor: "orderNumFrgn",
    Header: "Order Number",
    Cell: (props) => getInputCell({ props, isAlphabetNumberOnly: true }),
  },
  trackingNumUsa: {
    accessor: "trackingNumUsa",
    Header: "Tracking Number",
    Cell: (props) => getInputCell({ props, isAlphabetNumberOnly: true }),
  },
  buyerName: {
    accessor: "buyerName",
    Header: "Buyer Name",
    Cell: (props) => getInputCell({ props }),
  },
  receiverName: {
    accessor: "receiverName",
    Header: "Receiver Name",
    Cell: (props) => getInputCell({ props }),
  },
  personalCustomsIdNum: {
    accessor: "personalCustomsIdNum",
    Header: "Custom ID",
    Cell: (props) => getInputCell({ props, isNumberOnly: true }),
  },
  buyerPhone: {
    accessor: "buyerPhone",
    Header: "Buyer Phone",
    Cell: (props) => getInputCell({ props, isNumberOnly: true }),
  },
  receiverPhone: {
    accessor: "receiverPhone",
    Header: "Receiver Phone",
    Cell: (props) => getInputCell({ props, isNumberOnly: true }),
  },
  deliveryAddress: {
    accessor: "deliveryAddress",
    Header: "Address",
    Cell: (props) => getInputCell({ props }),
  },
  deliveryMsg: {
    accessor: "deliveryMsg",
    Header: "Delivery Message",
    Cell: (props) => getInputCell({ props }),
  },
  productName: {
    accessor: "productName",
    Header: "Product Name",
    Cell: (props) =>
      getInputCell({
        props,
      }),
  },
  amount: {
    accessor: "amount",
    Header: "Amount",
    Cell: (props) => getInputCell({ props, isNumberOnly: true }),
  },
  option: {
    accessor: "option",
    Header: "Option",
    Cell: (props) => getInputCell({ props }),
  },
  memo: {
    accessor: "memo",
    Header: "Memo",
    Cell: (props) => getInputCell({ props }),
  },
};

const getSelectCell = ({ props, type }) => {
  return (
    <SelectCell
      initialValue={props.cell.value}
      row={props.row}
      columnId={props.column.id}
      type={type}
      handleUpdateItems={props.handleUpdateItems}
      exchangeRateYear={props.exchangeRateYear}
    />
  );
};
const selectCells = {
  orderStatus: {
    accessor: "orderStatus",
    Header: "Status",
    Cell: (props) => getSelectCell({ props, type: "orderStatus" }),
  },
};

const getNonEditableCell = ({ props }) => {
  return <NonEditableCell initialValue={props.cell.value} row={props.row} />;
};
const nonEditableCells = {
  orderedAt: {
    accessor: "orderedAt",
    Header: "Order Date",
    Cell: (props) => getNonEditableCell({ props }),
  },
};

export const orderColumn = [
  selectCells.orderStatus,
  nonEditableCells.orderedAt,
  inputCells.orderNumFrgn,
  inputCells.trackingNumUsa,
  inputCells.buyerName,
  inputCells.receiverName,
  inputCells.personalCustomsIdNum,
  inputCells.buyerPhone,
  inputCells.receiverPhone,
  inputCells.deliveryAddress,
  inputCells.deliveryMsg,
  inputCells.productName,
  inputCells.amount,
  inputCells.option,
  inputCells.memo,
];
