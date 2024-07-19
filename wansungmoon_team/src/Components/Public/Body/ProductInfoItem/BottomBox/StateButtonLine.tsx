import Button from "../../Button";

interface IProps {
  isDirectTrade?: boolean;
  state?: "trading" | "traded" | "selling";
}

const StateButtonLine = ({
  isDirectTrade = false,
  state = "trading",
}: IProps) => {
  const directTradeBtn = isDirectTrade ? (
    <Button bgColor="blue" textColor="black" isSmall={true} isRounded={true}>
      직거래가능
    </Button>
  ) : (
    <Button bgColor="red" textColor="black" isSmall={true} isRounded={true}>
      직거래불가능
    </Button>
  );
  const stateBtnStorage = {
    trading: (
      <Button bgColor="gray" textColor="black" isSmall={true} isRounded={true}>
        거래중
      </Button>
    ),
    traded: (
      <Button bgColor="green" textColor="black" isSmall={true} isRounded={true}>
        거래완료
      </Button>
    ),
    selling: (
      <Button
        bgColor="orange"
        textColor="black"
        isSmall={true}
        isRounded={true}
      >
        판매중
      </Button>
    ),
  };
  return (
    <div className="flex gap-1">
      {directTradeBtn}
      {stateBtnStorage[state]}
    </div>
  );
};

export default StateButtonLine;
