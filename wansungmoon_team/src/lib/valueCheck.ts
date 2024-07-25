const valueCheck = (value: number | string | undefined, defaultValue = -1) => {
  let valueNum = value ? +value : defaultValue;
  if (Number.isNaN(valueNum)) valueNum = defaultValue;
  return valueNum;
};

export default valueCheck;
