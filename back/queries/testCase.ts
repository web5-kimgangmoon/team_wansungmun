import db from "../models/sequelize";

const mkCase = async () => {
  const titleArr = [
    "인기매물",
    "디지털기기",
    "가구/인테리어",
    "유아동",
    "여성의류",
    "여성잡화",
    "남성패션/잡화",
    "생활가전",
    "생활/주방",
    "스포츠/레저",
    "취미/게임/음반",
    "뷰티/미용",
    "식물",
    "가공식품",
    "건강기능식품",
    "반려동물용품",
    "티켓/교환권",
    "도서",
    "유아도서",
    "기타 중고물품",
    "삽니다",
  ];
  // const cate1 = await db.Category.create({
  //   cateImg: "아아아",
  //   category: "히히히",
  // });
  // const cate2 = await db.Category.create({
  //   cateImg: "나는2야",
  //   category: "나는2야",
  // });
  // const cate3 = await db.Category.create({
  //   cateImg: "아미아",
  //   category: "히히히",
  // });
  for (let i = 1; i < 22; i++) {
    await db.Category.create({
      cateImg: "http://localhost:3080/api/upload/getImg?imgName=" + `${i}` + ".png",
      category: titleArr[i - 1] ? titleArr[i - 1] : `${i}`,
    });
  }
  const user1 = await db.User.create({
    email: "test1@naver.com",
    nickname: "test_user_1",
    phoneNum: "01012345678",
    password: "1234qwer",
  });

  const loca1 = await user1.createLocation({
    location: "서울시 어쩌구 어딘가로",
    locationDetail: "천마아파트 307동 42호",
  });

  const loca2 = await user1.createLocation({
    location: "대전광역시 어쩌구 어딘가로",
    locationDetail: "성심당 귤시루케이크",
  });

  const loca3 = await user1.createLocation({
    location: "부산광역시 어쩌구 어딘가로",
    locationDetail: "이재모피자 오븐스파게티",
  });

  const user2 = await db.User.create({
    email: "test2@naver.com",
    nickname: "test_user_2",
    phoneNum: "01098765432",
    password: "1234qwer",
  });
  // const product = await cate1.createProduct({
  //   content: "ss",
  //   price: 0,
  //   titleImg: "http://localhost:3080/api/upload/getImg?imgName=1721212550783_Slice 7 (5).png",
  //   productName: "네네",
  //   tradeLocation: "ss",
  //   deliveryUserId: 1,
  //   sellerId: 2,
  // });
  // const pro2 = await cate1.createProduct({
  //   content: "ss",
  //   price: 30,
  //   titleImg: "아아s",
  //   productName: "네s네",
  //   tradeLocation: "ss",
  //   deliveryUserId: 2,
  //   sellerId: 2,
  // });

  // const pro3 = await cate2.createProduct({
  //   content: "seqs",
  //   price: 305,
  //   titleImg: "아아ds",
  //   productName: "네sa네",
  //   tradeLocation: "ssz",
  //   deliveryUserId: 1,
  //   sellerId: 1,
  // });

  // const product2 = await cate2.addProducts([
  //   await db.Product.create({
  //     content:
  //       "상품 설명 예시 데이터입니다. 상품 설명 예시 데이터입니다. 상품 설명 예시 데이터입니다. 상품 설명 예시 데이터입니다. 상품 설명 예시 데이터입니다. 상품 설명 예시 데이터입니다. ",
  //     price: 3000,
  //     titleImg: "아아ds",
  //     productName: "유아동 시험 데이터",
  //     tradeLocation: "ssz",
  //   }),
  //   await db.Product.create({
  //     content:
  //       "상품 설명 예시 데이터입니다. 상품 설명 예시 데이터입니다. 상품 설명 예시 데이터입니다. 상품 설명 예시 데이터입니다. 상품 설명 예시 데이터입니다. 상품 설명 예시 데이터입니다. ",
  //     price: 3000,
  //     titleImg: "아아ds",
  //     productName: "유아동 시험 데이터",
  //     tradeLocation: "ssz",
  //   }),
  //   await db.Product.create({
  //     content:
  //       "상품 설명 예시 데이터입니다. 상품 설명 예시 데이터입니다. 상품 설명 예시 데이터입니다. 상품 설명 예시 데이터입니다. 상품 설명 예시 데이터입니다. 상품 설명 예시 데이터입니다. ",
  //     price: 3000,
  //     titleImg: "아아ds",
  //     productName: "유아동 시험 데이터",
  //     tradeLocation: "ssz",
  //   }),
  //   await db.Product.create({
  //     content:
  //       "상품 설명 예시 데이터입니다. 상품 설명 예시 데이터입니다. 상품 설명 예시 데이터입니다. 상품 설명 예시 데이터입니다. 상품 설명 예시 데이터입니다. 상품 설명 예시 데이터입니다. ",
  //     price: 3000,
  //     titleImg: "아아ds",
  //     productName: "유아동 시험 데이터",
  //     tradeLocation: "ssz",
  //   }),
  // ]);

  // await pro2.createTradeReceipt({ customerId: 1 });
  // await pro3.createTradeReceipt({ customerId: 2 });
  // await product.createTradeReceipt({ customerId: 1 });
};

export default mkCase;
