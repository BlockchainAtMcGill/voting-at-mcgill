import React from 'react';
import Link from 'next/link'
import { Header } from '../components/header';
<<<<<<< HEAD
import * as m from '@material-ui/core';
=======
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
>>>>>>> origin/working_main

const AdminHome = () => {

    return (
        <>
<<<<<<< HEAD
            <Header/>
            <br></br>
            <br></br>
            <br></br>
            <h1>Welcome Admin!</h1>
            <div>
                <Link href="/newElection" key="/newElection">
                    <m.Button >Add a new election</m.Button>
                </Link>

                <Link href="/newPetition" key="/newPetition">
                    <m.Button>Add a new petition</m.Button>
                </Link>
            </div>
            <div>
                <m.Button>Manage current elections or petitions</m.Button>
                <m.Button>View current elections or petitions</m.Button>
            </div>
        </>
=======
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
>>>>>>> origin/working_main
    )

};

export default AdminHome;
