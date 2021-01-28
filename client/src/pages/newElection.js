import React from 'react';
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
                <p>
                    <div>Cancel</div>
                    <div>Publish Election</div>
                </p>
            </div>
        </>
    )
}
export default NewElection;