interface IProps {
  children: string;
}

const DeliveryTab = ({ children }: IProps): JSX.Element => {
  return (
    <div>
      <div className="text-xl font-bold mb-2 flex justify-center">
        {children}
      </div>
      <div className="border-b w-[90%] mx-[5%]"></div>
    </div>
  );
};

export default DeliveryTab;
