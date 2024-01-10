import dotenv from "dotenv";
import expressConfig from "./config/express.js";

dotenv.config();
process.env.NODE_ENV = process.env.NODE_ENV || "development";

const app = expressConfig();

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

export default app;
