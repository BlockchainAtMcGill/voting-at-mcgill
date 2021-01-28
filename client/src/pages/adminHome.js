import React from 'react';
import Link from 'next/link'
import { Header } from '../components/header';
import * as m from '@material-ui/core';

const AdminHome = () => {
    return (
        <>
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
    )

}

export default AdminHome;