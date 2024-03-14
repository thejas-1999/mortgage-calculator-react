import SliderComponent from "./Common/SliderComponent";

const SliderSelect = () => {
  return (
    <>
      <SliderComponent
        min={0}
        max={50}
        defaultValue={20}
        step={5}
        onChange={(e) => console.log(e.target.value)}
      />
    </>
  );
};
export default SliderSelect;
