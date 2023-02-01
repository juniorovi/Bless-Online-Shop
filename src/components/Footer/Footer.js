import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='q1'>
                <h1>How Does React Actually Work?</h1>
                <p>ReactJS is one of the most popular JavaScript libraries for mobile and web application development. Created by Facebook, React contains a collection of reusable JavaScript code snippets used for user interface (UI) building called components.</p>
            </div>
            <div className='q2'>
                <h1>Props vs State</h1>
                <p><b>Props: </b>
                    Props (short for properties) are a Component's configuration. They are received from above and immutable as far as the Component receiving them is concerned. A Component cannot change its props, but it is responsible for putting together the props of its child Components. Props do not have to just be data -- callback functions may be passed in as props.</p>

                <p><b>State: </b>
                    The state is a data structure that starts with a default value when a Component mounts. It may be mutated across time, mostly as a result of user events.</p>
            </div>
        </div>
    );
};

export default Footer;