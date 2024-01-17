import DB from "../../config/db.js";
import { GraphQLError } from "graphql";
import { generateId } from "../utils/auth.js";

export const createOrder = async (parent, args) => {
  if (!args || !args.productName) {
    return new GraphQLError("product name is empty", {
      extensions: { code: "BAD_REQUEST" },
    });
  }
  const body = args;
  const id = generateId();

  const orderRepository = (await DB.getDbDataSource()).getRepository(DB.Order);
  const result = orderRepository.create({ id, ...body });

  try {
    const createdOrder = await orderRepository.save(result);

    return {
      message: "ok",
      data: createdOrder,
    };
  } catch (e) {
    console.log(e);
    return new GraphQLError(e);
  }
};

export const getOrders = async (req, res) => {
  const orderRepository = (await DB.getDbDataSource()).getRepository(DB.Order);
  let result = await orderRepository.find();

  return res.status(200).json({
    message: "ok",
    data: result,
  });
};
