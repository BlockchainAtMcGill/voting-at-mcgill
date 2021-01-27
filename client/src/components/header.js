import React from 'react';
import { 
    AppBar, 
    Toolbar, 
    Typography, 
    makeStyles,
    Button
} from "@material-ui/core";
import { BrowserRouter as Router, Link as RouterLink, Switch, Route } from "react-router-dom";
import { Home } from './home';
const headersData = [
    {
      label: "Home",
      href: "/home",
      key:1
    },
    {
      label: "Create Vote",
      href: "/createVote",
      key:2
    },
    {
      label: "About Us",
      href: "/aboutUs",
      key:3
    },
    {
      label: "Log Out",
      href: "/logout",
      key:4
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

            <Switch>
            <Route path="/home">
              <Home />
            </Route>

            </Switch>
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

