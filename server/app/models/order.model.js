import { EntitySchema } from "typeorm";
import baseColumns from "./base.model.js";

const Order = new EntitySchema({
  name: "ORDER",
  columns: {
    ...baseColumns,
    orderStatus: {
      type: "enum",
      enum: [
        "initOrdered",
        "purchasedFGRN",
        "deliveryOrdered",
        "trackingNumFGRNEntered",
        "trackingNumUsaEntered",
        "deliveryCompleted",
        "purchaseConfirmed",
        "purchaseCanceled",
      ],
      default: "initOrdered",
    },
    orderedAt: {
      type: "timestamp with time zone",
      default: new Date("2023-10-30T12:00:00.000Z"),
    },
    orderNumFrgn: {
      type: "varchar",
      length: 30,
    },
    trackingNumUsa: {
      type: "varchar",
      length: 30,
    },
    buyerName: {
      type: "varchar",
      length: 30,
    },
    receiverName: {
      type: "varchar",
      length: 30,
    },
    personalCustomsIdNum: {
      type: "varchar",
      length: 30,
    },
    buyerPhone: {
      type: "varchar",
      length: 11,
    },
    deliveryAddress: {
      type: "varchar",
      length: 200,
    },
    deliveryMsg: {
      type: "varchar",
      length: 500,
    },
    productName: {
      type: "varchar",
      length: 100,
    },
    amount: {
      type: "int",
      default: 0,
    },
    option: {
      type: "varchar",
      length: 100,
    },
    memo: {
      type: "varchar",
      length: 1000,
    },
  },
});

export default Order;
