import SliderComponent from "./Common/SliderComponent";

const SliderSelect = () => {
  return (
    <>
      <SliderComponent
        label="Home Value"
        min={10000}
        max={1000000}
        defaultValue={300000}
        step={10000}
        onChange={(e, value) => console.log(value)}
      />
      <SliderComponent
        label="Down Payment"
        min={5000}
        max={30000}
        defaultValue={10000}
        step={1000}
        onChange={(e, value) => console.log(value)}
      />
      <SliderComponent
        label="Loan Amount"
        min={0}
        max={50}
        defaultValue={20}
        step={5}
        onChange={(e, value) => console.log(value)}
      />
    </>
  );
};
export default SliderSelect;
