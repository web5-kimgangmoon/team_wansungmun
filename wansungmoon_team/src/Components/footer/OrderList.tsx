const OrderList = () => {
  return (
    <div className="relative w-6 text-gray-700">
      <div className="w-6 min-w-6">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            d="M336 64h32a48 48 0 0148 48v320a48 48 0 01-48 48H144a48 48 0 01-48-48V112a48 48 0 0148-48h32"
            fill="none"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="32"
          />
          <rect
            x="176"
            y="32"
            width="160"
            height="64"
            rx="26.13"
            ry="26.13"
            fill="none"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="32"
          />
        </svg>
      </div>
      <div className="w-3 min-w-3 absolute top-1.5 left-1.5">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
            d="M416 128L192 384l-96-96"
          />
        </svg>
      </div>
    </div>
  );
};

export default OrderList;
