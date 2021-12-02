import React, { useState } from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Divider from "@material-ui/core/Divider";
import { ChevronRight, Menu } from "@mui/icons-material";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const navigationLinks = [
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const useStyles = makeStyles((theme) => ({
  link: {
    padding: 15,
    marginRight: 25,
    fontFamily: "Montserrat",
    fontSize: 20,
    letterSpacing: 2,
    "&:hover, &:active": {
      color: "#a1c3ce",
      borderTop: "2px solid #a1c3ce",
    },
  },
  image: {
    marginRight: "auto",
  },
  hamburger: {
    marginLeft: "auto",
  },
}));

export default function Header() {
  const styles = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky" type="dark" className={styles.navbar}>
      <ToolBar disableGutters>
        <a className={styles.image} href="/">
          <img
            src="./images/light.png"
            alt="Gauntlet Designs logo"
            width="150"
            height="auto"
          ></img>
        </a>

        <Hidden smDown>
          {navigationLinks.map((item) => (
            <Link
              className={styles.link}
              color="textPrimary"
              variant="button"
              underline="none"
              href={item.href}
              key={item.name}
            >
              {item.name}
            </Link>
          ))}
        </Hidden>
        <Hidden mdUp>
          <IconButton
            className={styles.hamburger}
            onClick={() => setOpen(true)}
          >
            <Menu sx={{ fontSize: 40 }} />
          </IconButton>
        </Hidden>
      </ToolBar>

      <SwipeableDrawer
        anchor="right"
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
      >
        <div
          onClick={() => setOpen(false)}
          onKeyPress={() => setOpen(false)}
          role="button"
          tabIndex={0}
        >
          <IconButton>
            <ChevronRight sx={{ fontSize: 30 }} />
          </IconButton>
        </div>
        <Divider />
        <List>
          {navigationLinks.map((item) => (
            <ListItem className={styles.drawer} key={item.name}>
              <Link
                className={styles.link}
                color="textPrimary"
                variant="button"
                underline="none"
                href={item.href}
              >
                {item.name}
              </Link>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
    </AppBar>
  );
}
