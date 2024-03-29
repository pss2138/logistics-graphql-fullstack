import DB from "../../config/db.js";
import { GraphQLError } from "graphql";
import { generateId } from "../utils/auth.js";

export const createOrder = async (req, res) => {
  if (!req.body || !req.body.productName) {
    return res.status(400).json({ message: "product name is empty" });
  }
  const body = req.body;
  const id = generateId();

  const orderRepository = (await DB.getDbDataSource()).getRepository(DB.Order);
  const result = orderRepository.create({ id, ...body });

  try {
    const createdOrder = await orderRepository.save(result);

    return res.status(200).json({
      message: "ok",
      data: createdOrder,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json(e);
  }
};

export const getOrders = async (parent, args) => {
  try {
    const orderRepository = (await DB.getDbDataSource()).getRepository(
      DB.Order
    );
    const orders = await orderRepository.find({
      where: { isDeleted: false },
    });

    return orders;
  } catch (e) {
    console.log(e);
    return new GraphQLError(e);
  }
};

export const updateOrders = async (parent, args) => {
  try {
    const orderRepository = (await DB.getDbDataSource()).getRepository(
      DB.Order
    );
    const orders = await args.orderInputs.map(async (order) => {
      return await orderRepository.update(order.id, order);
    });

    return orders;
  } catch (e) {
    console.log(e);
    return new GraphQLError(e);
  }
};

export const deleteOrders = async (parent, args) => {
  try {
    if (!args || !args.orderIds) {
      return new GraphQLError("ERROR : Empty orderId", {
        extensions: { code: "BAD_REQUEST" },
      });
    }

    const orderIds = args.orderIds;
    const orderRepository = (await DB.getDbDataSource()).getRepository(
      DB.Order
    );
    for (let i = 0; i < orderIds.length; i++) {
      await orderRepository.update(orderIds[i], {
        isDeleted: true,
        deletedAt: new Date(),
      });
    }
    return { message: "ok" };
  } catch (e) {
    console.log(e);
    return new GraphQLError(e);
  }
};
