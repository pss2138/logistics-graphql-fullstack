import DB from "../../config/db.js";

export const createOrder = async (req, res) => {
  // const test = await DB.getRepository();
  // console.log("DB test", (await DB.getDbConnection()).getRepository(DB.User));

  if (!req.body || !req.body.productName) {
    return res.status(400).json({ message: "product name is empty" });
  }
  const body = req.body;

  const orderRepository = (await DB.getDbDataSource()).getRepository(DB.Order);
  const result = orderRepository.create({ ...body });

  try {
    const createdOrder = await orderRepository.save(result);

    return res.status(200).json({
      message: "ok",
      data: createdOrder,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: "something went wrong" });
  }
};
