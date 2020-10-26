import React from 'react';

const About = (props) => {
    return (
        <div>
            <p>About</p>
    <p>{props.children}</p>

            <p style={ {fontStyle: 'italic'} }>Do you like Star Wars? because Yoda only one!</p>
        </div>
    );
}

export default About;