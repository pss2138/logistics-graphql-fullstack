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
  PRODUCT_DELETE_FAILED: {
    message: "Failed item deleting.\nAfter refresh, please try again.",
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
    message: "Successfully saved data.",
  },
};

// Orders
const orderStatuses = [
  { id: 1, en: "initOrdered" },
  { id: 2, en: "purchasedFGRN" },
  { id: 3, en: "deliveryOrdered" },
  { id: 4, en: "trackingNumFGRNEntered" },
  { id: 5, en: "trackingNumKorEntered" },
  { id: 6, en: "deliveryCompleted" },
  { id: 7, en: "purchaseConfirmed" },
  { id: 9, en: "purchaseCanceled" },
];
export const statuses = {
  orderStatus: orderStatuses,
};
export const itemTypes = {
  order: { en: "order" },
};
export const fileTypes = {
  product: "csv",
  order: "xslx,xls",
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
  trackingNumKor: {
    accessor: "trackingNumKor",
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
  inputCells.trackingNumKor,
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
