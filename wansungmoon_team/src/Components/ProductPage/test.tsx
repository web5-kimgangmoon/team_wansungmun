import ProductPageTitleLine from "./ProductPageTitleLine";

const container = () => {
  const title = ["QWER앨범팜!!"];
  const writer = ["박성민"];
  const location = ["천호동"];
  const price = 150000;
  //   const ss = [
  //     { title: "sa", writer: "sas", location: "Sas" },
  //     { title: "sa", writer: "sas", location: "Sas" },
  //     { title: "s313a", writer: "asdas", location: "zxzxs" },
  //   ];
  return (
    // <div>
    //   {ss.map((item, index) => (
    //     <ProductPageTitleLine key={index} title={item.title} writer={item.writer} location={item.location} />
    //   ))}
    // </div>
    <ProductPageTitleLine
      title={title ? title : ["못받아옴"]}
      writer={writer ? writer : ["작성자느 누구?"]}
      location={location ? location : ["천호동"]}
      price={price ? price : 12321}
    />
  );
};

export default container;
