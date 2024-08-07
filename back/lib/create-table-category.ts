import db from "../models/sequelize/index";

async function create_table_category() {
  const cateTemp = [
    { cateImg: "예시", category: "디지털기기" },
    { cateImg: "예시", category: "유아동" },
    { cateImg: "예시", category: "여성의류" },
    { cateImg: "예시", category: "여성잡화" },
    { cateImg: "예시", category: "남성패션" },
    { cateImg: "예시", category: "생활가전" },
    { cateImg: "예시", category: "생활/주방" },
    { cateImg: "예시", category: "스포츠/레저" },
    { cateImg: "예시", category: "취미/게임/음반" },
    { cateImg: "예시", category: "뷰티/미용" },
    { cateImg: "예시", category: "식물" },
    { cateImg: "예시", category: "가공식품" },
    { cateImg: "예시", category: "반려동물용품" },
    { cateImg: "예시", category: "도서" },
    { cateImg: "예시", category: "기타 중고물품" },
  ];
  for (let i = 0; i < cateTemp.length; i++) {
    await db.Category.create(cateTemp[i]);
  }
}

export default create_table_category;
