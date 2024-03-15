import React from "react";
import { Stack, Typography } from "@mui/material";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const Result = ({ data }) => {
  const { homeValue, downPayment, loanAmount, loanTerm, interestRate } = data;

  const totalMonths = loanTerm * 12;
  const interestPerMonth = interestRate / 100 / 12;

  const monthlyPayment =
    (loanAmount *
      (interestPerMonth * Math.pow(1 + interestPerMonth, totalMonths))) /
    (Math.pow(1 + interestPerMonth, totalMonths) - 1);

  const totalInterestGenerated = monthlyPayment * totalMonths - loanAmount;

  const chartData = {
    labels: ["Priciple", "Interest"],
    datasets: [
      {
        label: "Total",
        data: [homeValue, totalInterestGenerated],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Stack>
      <Typography textAlign={"center"} variant="h5">
        Monthly Payment: {monthlyPayment.toFixed(2)}₹
      </Typography>
      <Stack direction="row" justifyContent="center">
        <div>
          <Pie data={chartData} />
        </div>
      </Stack>
    </Stack>
  );
};

export default Result;
