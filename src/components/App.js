import React from 'react';
import style from './App.module.scss'
import Header from './p1-header/Header';
import Banner from './p2-banner/Banner';
import AboutMe from './p3-about/AboutMe';
import Projects from './p4-projects/Projects';
import Contacts from './p5-contacts/Contacts';
import Footer from './p6-footer/Footer';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleUp} from '@fortawesome/free-solid-svg-icons';


function App() {
    return (
        <>
            <div>
                <Header/>
                <Banner/>
                <AboutMe/>
                <Projects/>
                <Contacts/>
                <Footer/>
                <div className={style.backToTop}>
                    <div className={style.btn}>
                        <FontAwesomeIcon icon={faAngleUp} size='3x' color='#F9004d'/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
