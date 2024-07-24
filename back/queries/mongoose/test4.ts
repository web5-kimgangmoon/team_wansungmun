import db from "../../models/mongoose/db";

const mongoDbTest = async () => {
  const s = await db.Chat_log.findOne({ sender_ID: 1 });
  console.log(s);
  console.log("asas");
};

export default mongoDbTest;
