import { useState } from "react";
import { Container } from "@mui/material";
import Navbar from "./Components/Navbar";
import Result from "./Components/Result";
import SliderSelect from "./Components/SliderSelect";
import TenureSelect from "./Components/TenureSelect";
import Grid from "@mui/material/Grid";

function App() {
  const [data, setData] = useState({
    homeValue: 300000,
    downPayment: 300000 * 0.2,
    loanAmount: 300000 * 0.8,
    loanTerm: 5,
    interestRate: 5,
  });

  return (
    <>
      <Navbar />
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Grid container spacing={5} alignItems={"center"}>
          <Grid item xs={12} md={6}>
            <SliderSelect data={data} setData={setData} />
            <TenureSelect data={data} setData={setData} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Result data={data} setData={setData} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
