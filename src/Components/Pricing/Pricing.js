import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Divider from "@mui/material/Divider";

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
        <div class="pricing-title">Pricing</div>
        <div class="pricing-text">{" View our plans below "}</div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Item>
                <h3 class="card-title">Start Up</h3>
                <p class="card-list">1 Design Concept</p>
                <Divider />
                <p class="card-list">2 Revisions</p>
                <Divider />
                <p class="card-list">5 Pages Included</p>
                <Divider />
                <p class="card-list">Web Hosting Included</p>
              </Item>
            </Grid>
            <Grid item xs={12} md={4}>
              <Item>
                <h3 class="card-title">Business</h3>
                <p class="card-list">2 Design Concept</p>
                <Divider />
                <p class="card-list">3 Revisions</p>
                <Divider />
                <p class="card-list">5 Pages Included</p>
                <Divider />
                <p class="card-list">Web Hosting Included</p>
              </Item>
            </Grid>
            <Grid item xs={12} md={4}>
              <Item>
                <h3 class="card-title">Business Plus</h3>
                <p class="card-list">Everything from Business</p>
                <Divider />
                <p class="card-list">Checkout/Shopping Cart Features</p>
                <Divider />
                <p class="card-list">Account/Login Features</p>
                <Divider />
                <p class="card-list">Additional 5 pages</p>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Pricing;
