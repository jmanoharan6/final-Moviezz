import React from 'react';
import Header from './Header';
import Footer from './Footer';


const Description = (props) => {
    return (

        <div>
            <Header/>
            <h1>{props.data}</h1>
            <Footer/>
        </div>
    )
}

export default Description
