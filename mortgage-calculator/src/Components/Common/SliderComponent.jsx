import Slider from "@mui/material/Slider";

const SliderComponent = ({ min, max, defaultValue, step, onChange, value }) => {
  return (
    <Slider
      defaultValue={defaultValue}
      min={min}
      max={max}
      aria-label="Default"
      valueLabelDisplay="auto"
      marks
      step={step}
      onChange={onChange}
      value={value}
    />
  );
};
export default SliderComponent;
