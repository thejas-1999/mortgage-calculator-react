import { Stack, Typography } from "@mui/material";

const Result = ({ data }) => {
  const { homeValue, downPayment, loanAmount, loanTerm, interestRate } = data;

  const totalMonths = loanTerm * 12;
  const interestPerMonth = interestRate / 100 / 12;

  const monthlyPayment =
    (loanAmount *
      (interestPerMonth * Math.pow(1 + interestPerMonth, totalMonths))) /
    (Math.pow(1 + interestPerMonth, totalMonths) - 1);

  const totalInterestGenerated = monthlyPayment * totalMonths - loanAmount;

  return (
    <Stack>
      <Typography textAlign={"center"} variant="h5">
        Monthly Payment: {monthlyPayment.toFixed(2)}₹
      </Typography>
    </Stack>
  );
};

export default Result;
