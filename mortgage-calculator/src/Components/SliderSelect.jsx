import SliderComponent from "./Common/SliderComponent";

const SliderSelect = ({ data, setData }) => {
  const bank_limit = 1000000;
  return (
    <>
      <SliderComponent
        label="Home Value"
        min={100000}
        max={bank_limit}
        defaultValue={data.homeValue}
        value={data.homeValue}
        step={10000}
        onChange={(e, value) =>
          setData({
            ...data,
            downPayment: value * 0.2,
            loanAmount: value * 0.8,
            homeValue: value,
          })
        }
        unit="₹"
      />
      <SliderComponent
        label="Down Payment"
        min={0}
        max={1000000}
        defaultValue={data.downPayment}
        value={data.downPayment}
        step={1000}
        onChange={(e, value) =>
          setData({
            ...data,
            loanAmount: data.homeValue - value,
            downPayment: value,
          })
        }
        unit="₹"
      />
      <SliderComponent
        label="Loan Amount"
        min={0}
        max={1000000}
        defaultValue={data.loanAmount}
        value={data.loanAmount}
        step={1000}
        onChange={(e, value) =>
          setData({
            ...data,
            downPayment: data.homeValue - value,
            loanAmount: value,
          })
        }
        unit="₹"
      />
      <SliderComponent
        label="Interest Rate"
        min={2}
        max={18}
        defaultValue={data.interestRate}
        value={data.interestRate}
        step={1}
        onChange={(e, value) => setData({ ...data, interestRate: value })}
        unit="%"
      />
    </>
  );
};
export default SliderSelect;
