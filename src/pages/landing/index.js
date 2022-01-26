import React from 'react'
import Fandom from '../../components/Fandom';
import Hanging from '../../components/Hanging';
import Header from '../../components/Header';
import Invite from '../../components/Invite';
import Navbar from '../../components/Navbar/Navbar'
import Tech from '../../components/Tech';
import "./landing.css"

const LandingPage =()=> {
    return (
        <div>
            <Navbar/>
            <Header/>
            <Invite/>
            <Hanging/>
            <Fandom/>
            <Tech/>
        </div>
    )
};

export default LandingPage;