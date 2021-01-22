import React from 'react';
import { 
    AppBar, 
    Toolbar, 
    Typography, 
    makeStyles,
    Button
} from "@material-ui/core";
import { BrowserRouter as Router, Link as RouterLink } from "react-router-dom";

const headersData = [
    {
      label: "Home",
      href: "/home",
    },
    {
      label: "Create Vote",
      href: "/createVote",
    },
    {
      label: "About Us",
      href: "/aboutUs",
    },
    {
      label: "Log Out",
      href: "/logout",
    },
  ];

const useStyles = makeStyles(() => ({
    header: {
       backgroundColor: "#ED1B2F",
    },
    logo: {
        fontFamily: "Work Sans, sans-serif",
        fontWeight: 600,
        color: "#FFFEFE",
        textAlign: "left",
      },
 }));

export const Header = () => {
    const { header, logoStyle } = useStyles();

    const displayDesktop = () => {
        return (
          <Toolbar>
            {logo}
            {getMenuButtons()}
          </Toolbar>
        );
    };
    const logo = (
        <Typography variant="h6" component="h1" className={logoStyle}>
          McGill Votes
        </Typography>
      );

    const getMenuButtons = () => {
      return headersData.map(({ label, href }) => {
        return (
          <Router>
            <Button
              {...{
                key: label,
                color: "inherit",
                to: href,
                component: RouterLink,
              }}
            >
              {label}
            </Button>
          </Router>
        );
      });
    };
    return (
        <header>
            <AppBar className={header}>{displayDesktop()}</AppBar>
        </header>

    )
}

