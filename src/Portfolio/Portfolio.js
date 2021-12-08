import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Divider from "@mui/material/Divider";

import "./Portfolio.css";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Portfolio = () => {
  return (
    <div style={{ backgroundColor: "#f4f6f7", padding: 20 }}>
      <Container>
        <div class="portfolio-title">Portfolio</div>
        <div class="portfolio-text">{" See our work in action! "}</div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
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
            <Grid item xs={12} md={6}>
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
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Portfolio;
