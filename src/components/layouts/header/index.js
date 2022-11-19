import Head from 'next/head'
import Link from 'next/link';
import Navbar from './NavBar';
import { useState, useEffect} from 'react';

const Header = () => {
    
    return(
        <div>
            <Head>
                <title>Aidez-moi</title>
                <link href='favicon.ico' />
            </Head>
            <Navbar />
        </div>
    )
}

export default Header;