import React from 'react';
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
            <p>
                <div>Cancel</div>
                <div>Publish Petition</div>
            </p>
        </div>
    </>
)
}
export default NewPetition;