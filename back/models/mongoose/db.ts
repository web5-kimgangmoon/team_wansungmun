import { connect } from "mongoose";
import Chat_log from "./chat_log";
import Dib from "./dib";
import Point_charge_receipt from "./point_charge_receipt";

const db = { Chat_log, Dib, Point_charge_receipt };

(async () => {
  await connect("mongodb://127.0.0.1:27017/test");
})();

export default db;
// 필요없는 파일, 그냥 컬렉션을 모아두는 편이 편하지 않을까해서 만들어봤다.
