import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";

import "./Pricing.css";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Pricing = () => {
  return (
    <div style={{ backgroundColor: "#a1c3ce", padding: 20, marginTop: 25 }}>
      <Container>
        <h2 class="pricing-title">Pricing</h2>
        <p class="pricing-text">
          {" View our plans below. Contact us if you have special requests."}
        </p>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Item>Test 1 </Item>
            </Grid>
            <Grid item xs={12} md={4}>
              <Item>Test 2</Item>
            </Grid>
            <Grid item xs={12} md={4}>
              <Item>Test 3</Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Pricing;
