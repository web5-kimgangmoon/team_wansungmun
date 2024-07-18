import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
// import cookieParser from "cookie-parser";
import multer from "multer";
import useSocket from "./socket/useSocket";
import router from "./controllers/index";
import db, { sequelize } from "./models/sequelize/index";
import create_table_category from "./lib/create-table-category";
import session from "express-session";
import fileStore from "session-file-store";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const { server, io } = useSocket(app);

app.set("port", process.env.PORT || 3080);
app.use((req, res, next) => {
  if (process.env.NODE_ENV == "deploy") morgan("combined")(req, res, next);
  else morgan("dev")(req, res, next);
});

app.use(
  cors({
    origin: [/http:\/\/localhost:*/, /https:\/\/127.0.0.1:*/],
    credentials: true, // 쿠키가 있다면
  })
);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// app.use(cookieParser(process.env.COOKIESECRET || "dksajdalsjd")); // 쿠키가 필요하다면

const upload = (imgs: string) =>
  multer({
    storage: multer.diskStorage({
      destination: (req, file, callback) => {
        callback(null, "./uploads");
      },
      filename: (req, file, callback) => {
        callback(null, `${Date.now}_${file.originalname}`);
      },
    }),
  }).array(imgs);

// app.post("/upload", upload("imgs"), (req,res) =>{
//   res.send("ok");
// } )

// (async () => {
//   await sequelize.sync({ force: true });
//   const newOne = await db.User.create({
//     email: "djkas",
//     phoneNum: "dkljasl",
//   });
//   await db.User.create({
//     email: "djkarqws",
//     phoneNum: "dkljascxzl",
//   });
//   const newTwo = await db.Category.create({
//     category: "dsad",
//     cateImg: "dasd",
//   });
//   await newTwo.addProduct(
//     await db.Product.create({
//       productName: "dsad",
//       tradeLocation: "dsad",
//       titleImg: "dsad",
//       price: 34,
//     })
//   );
//   const newThree = await db.Product.findOne();
//   await sequelize.transaction(async (t) => {
//     await newOne.createReviewer(
//       { score: 3, imgs: "dsad", sellerId: 2, productId: 1 },
//       { transaction: t }
//     );
//     // await newOne.createSeller({}, {transaction:t})
//     // await newOne.createLocation({ location: "dsacxzcd" }, { transaction: t });
//     newThree?.createReview({
//       score: 4,
//       imgs: "dasdxz",
//       sellerId: 2,
//       reviewerId: 1,
//     });
//   });
//   console.log(await newOne.createReport({ content: "dsad" }));
//   console.log(await newOne.createTradeReceipt({}));
//   console.log(await newThree?.createReport({ content: "dsad" }));
//   console.log(await newThree?.createTradeReceipt({}));
//   // db.User.findOne({ where: { id: 1 } }).then((data) => {
//   //   console.log(data);
//   //   console.log(data?.location);
//   //   console.log(data?.locationList);
//   // });
//   // db.Category.findOne({ where: { id: 1 } }).then((data) => {
//   //   console.log(data?.addProduct);
//   // });
//   // db.Location.findOne({ where: { userId: 1 } }).then((data) => {
//   //   console.log(data);
//   //   console.log(data?.user);
//   // });
// })();

const FileStore = fileStore(session);

declare module "express-session" {
  interface SessionData {
    cookie: Cookie;
    user: string;
    isLogined: boolean;
    nickName: string;
  }
}

app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: "project",
    name: "user",
    store: new FileStore({
      reapInterval: 1000,
      path: "./user_session",
    }),
    cookie: {
      maxAge: 20 * 60 * 1000,
    },
  })
);

(async () => {
  await sequelize.sync({ force: true });
  // create_table_category();
})();

app.use("/api", router);

server.listen(app.get("port"), () => {
  console.log("server opens ", app.get("port"));
});
