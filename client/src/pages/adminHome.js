import React from 'react';
import Link from 'next/link'
import { Header } from '../components/header';
import 'semantic-ui-css/semantic.min.css';
import { Button, Grid } from "semantic-ui-react";

const adminTitle = {
    color: "red",
    marginBottom: "5%",
    fontSize: "3em",
    textAlign: "center"
};

const adminButton = {
    boxSizing: "border-box",
    fontSize: "1.5em",
    margin: "auto 15% auto 15%",
    borderWidth: "5%",
    color: "red",
    backgroundColor: "white",
    borderColor: "gray",
    textAlign: "center"
};

const AdminHome = () => {

    return (
        <>
        <Header/>
        <br></br>
        <br></br>
        <br></br>
        <h1 className="ui title" style={adminTitle}>
            Menu
        </h1>
        <Grid columns={2} divided>
            <Grid.Row>
                <Grid.Column>
                    <Link href="/newElection" key="/newElection">
                        <Button className="ui container"
                            style={adminButton}
                        >
                            Add a new election
                        </Button>
                    </Link>
                </Grid.Column>
                <Grid.Column>
                    <Link href="/newPetition" key="/newPetition">
                        <Button className="ui container"
                            style={adminButton}>Add a new petition
                        </Button>
                    </Link>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <Button className="ui container" style={adminButton}>
                        Manage current elections or petitions
                    </Button>
                </Grid.Column>
                <Grid.Column>
                    <Button className="ui container" style={adminButton}>
                        View current elections or petitions
                    </Button>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                    <Grid.Column>
                        <Link href="/newGroup" key="/newGroup">
                            <Button className="ui container" style={adminButton}>
                                Create a group for your club
                            </Button>
                        </Link>
                    </Grid.Column>
                    <Grid.Column>
                        <Link href="/joinGroup" key="/joinGroup">
                            <Button className="ui container" style={adminButton}>
                                Join a group
                            </Button>
                        </Link>
                    </Grid.Column>
                </Grid.Row>
        </Grid>
    </>
    )

};

export default AdminHome;
