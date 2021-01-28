import React from 'react';
import Link from 'next/link'
import { Header } from '../components/header';

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
                    <button >Add a new election</button>
                </Link>

                <Link href="/newPetition" key="/newPetition">
                    <button >Add a new petition</button>
                </Link>
            </div>
            <div>
                <button>Manage current elections or petitions</button>
                <button>View current elections or petitions</button>
            </div>
        </>
    )

}

export default AdminHome;