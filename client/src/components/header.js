import React from 'react';
import { 
    AppBar, 
    Toolbar, 
    Typography, 
    makeStyles,
    Button
} from "@material-ui/core";
import Link from 'next/link'
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
        <Link href="/">
        <Button style={{color:"#FFFEFE"}}>
            <Typography variant="h6" component="h1" className={logoStyle} >
              McGill Votes
            </Typography>
        </Button>
        </Link>
      );

    const getMenuButtons = () => {
      return headersData.map(({ label, href }) => {
        return (
          <Link href = {href} key ={href}>
            <Button
              {...{
                key: label,
                color: "inherit",
              }}
            >
              {label}
            </Button>
          </Link>
        );
      });
    };
    return (
        <header>
            <AppBar style={{backgroundColor: "#ED1B2F", position: "absolute"}}>{displayDesktop()}</AppBar>
        </header>

    )
}

