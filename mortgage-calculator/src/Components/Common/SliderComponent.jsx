import Slider from "@mui/material/Slider";
import { Stack, Typography } from "@mui/material";

const SliderComponent = ({
  min,
  max,
  defaultValue,
  step,
  onChange,
  value,
  label,
  unit,
}) => {
  return (
    <Stack my={2}>
      <Stack gap={1}>
        <Typography variant="subtitle2">{label}</Typography>
        <Typography variant="h4">
          {defaultValue}
          {unit}
        </Typography>
      </Stack>
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
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="caption" color="text.secondary">
          {min}
          {unit}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {max}
          {unit}
        </Typography>
      </Stack>
    </Stack>
  );
};
export default SliderComponent;
