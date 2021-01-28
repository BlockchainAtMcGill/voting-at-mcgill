import React from 'react';
import * as m from '@material-ui/core';
import { Header } from '../components/header';

const NewPetition = () => {
    return (
        <>
        <Header/>
        <br></br>
        <br></br>
        <br></br>
        <h1>New Petition</h1>
        <div>
            <p>Petition Title:</p>
            <p>Choose Dates:</p>
            <p>Choose groups (optional):</p>
            <p>Add description:</p>
            <div>
                <m.Button>Cancel</m.Button>
                <m.Button>Publish Petition</m.Button>
            </div>
        </div>
    </>
)
}
export default NewPetition;