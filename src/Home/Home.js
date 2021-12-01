import React from "react";
import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import {
  PaletteOutlined,
  CodeOutlined,
  CloudDoneOutlined,
} from "@mui/icons-material";
import "./Home.css";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
}));

export default function Home() {
  return (
    <Container>
      <div>
        <div class="intro-image">
          <img
            class="image"
            src="./images/logo-dark.png"
            alt="Gauntlet Designs logo"
            width="300"
            height="auto"
          ></img>
        </div>
        <div class="intro-container">
          <p class="intro-paragraph">
            Welcome to Gauntlet Designs. We are a family owned business located
            in the DC Metro Area. We build beautiful, custom-made websites for
            small businesses. Our #1 goal is to help get small businesses an
            online presence without the big-tech prices. Our services are simple
            and straight-forward. We list all of our pricing up-front, so you
            know what you will be paying before going in.
          </p>
        </div>
        <Grid
          container
          spacing={6}
          sx={{
            padding: "unset",
          }}
        >
          <Grid item xs={12} md={4}>
            <Item
              sx={{
                backgroundColor: "unset",
                boxShadow: "unset",
                paddingTop: 5,
              }}
            >
              <PaletteOutlined style={{ fontSize: 80, color: "#2a7ea8" }} />
              <h2>DESIGN</h2>
              <p class="bullet-paragraphs">
                Each website is uniquely created by our designers. We do not use
                pre-built themes or templates which results in faster,
                responsive websites.
              </p>
            </Item>
          </Grid>
          <Grid item xs={12} md={4}>
            <Item
              sx={{
                backgroundColor: "unset",
                boxShadow: "unset",
                paddingTop: 5,
              }}
            >
              <CodeOutlined style={{ fontSize: 80, color: "#2a7ea8" }} />
              <h2>DEVELOPMENT</h2>
              <p class="bullet-paragraphs">
                Our developers have extensive knowledge to get your website
                running fast. We build each site with on-page SEO to help keep
                your rankings high in search engines.
              </p>
            </Item>
          </Grid>
          <Grid item xs={12} md={4}>
            <Item
              sx={{
                backgroundColor: "unset",
                boxShadow: "unset",
                paddingTop: 5,
              }}
            >
              <CloudDoneOutlined style={{ fontSize: 80, color: "#2a7ea8" }} />
              <h2>HOSTING</h2>
              <p class="bullet-paragraphs">
                Let us build your website from the ground up. We make it simple.
                If you already have a hosting company and domain name, no
                problem!
              </p>
            </Item>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
