import React from 'react';
import { 
    AppBar, 
    Toolbar, 
    Typography, 
    makeStyles,
    Button
} from "@material-ui/core";
import Link from 'next/link'
const headersData = [
    {
      label: "Home",
      href: "/home",
      key:1
    },
    {
      label: "Create Vote",
      href: "/adminHome",
      key:2
    },
    {
      label: "About Us",
      href: "/aboutUs",
      key:3
    },
    {
      label: "Log In",
      href: "/loginUser",
      key:4
    },
    {
      label: "Log Out",
      href: "/logout",
      key:5
    }, 
    {
      label: "Register",
      href: "/registerUser",
      key:6
    }
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
    web3: {
      fontFamily: "Work Sans, sans-serif",
      color: "#FFC0CB",
      textAlign: "right",
      right: 0
    },
 }));

export const Header = () => {
    const { header, logoStyle, web3 } = useStyles();

    const displayDesktop = () => {
        return (
          <Toolbar>
            {logo}
            {getMenuButtons()}
            {connection}
          </Toolbar>
        );
    };
    const logo = (
        <Link href="/">
        <Button style={{color:"#FFFEFE"}} >
            <Typography variant="h6" component="h1" className={logoStyle} >
              McGill Votes
            </Typography>
        </Button>
        </Link>
      );
    function clicked() {
      ethereum.request({ method: 'eth_requestAccounts' });
    }
    const connection = (
      <Button onClick={clicked}>
          <Typography className={web3} >
            Connect to Web3
          </Typography>
      </Button>
    )

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

