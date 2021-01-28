import React from 'react';
import * as m from '@material-ui/core';
import { Header } from '../components/header';

const NewElection = () => {
    return (
        <>
            <Header/>
            <br></br>
            <br></br>
            <br></br>
            <h1>New Election</h1>
            <div>
                <p>Election Title:</p>
                <p>Choose Dates:</p>
                <p>Choose groups (optional):</p>
                <p>Add description:</p>
                <div>
                    <m.Button>Cancel</m.Button>
                    <m.Button>Publish Election</m.Button>
                </div>
            </div>
        </>
    )
}
export default NewElection;