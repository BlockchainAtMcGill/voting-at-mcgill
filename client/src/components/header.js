import React from 'react';
import { 
    AppBar, 
    Toolbar, 
    Typography, 
    makeStyles,
} from "@material-ui/core";
import { BrowserRouter as Router, Link } from "react-router-dom";

const headersData = [
    {
      label: "Listings",
      href: "/listings",
    },
    {
      label: "Mentors",
      href: "/mentors",
    },
    {
      label: "My Account",
      href: "/account",
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
            <Router>
              <button>
                <Link to="/General">hello</Link>
              </button>
            </Router>
          </Toolbar>
        );
    };
    const logo = (
        <Typography variant="h6" component="h1" className={logoStyle}>
          McGill Votes
        </Typography>
      );
    return (
        <header>
            <AppBar className={header}>{displayDesktop()}</AppBar>
        </header>

    )
}

