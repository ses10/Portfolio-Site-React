import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import '../style/About.css';

function About(){
    return(
        <div id="about">
            <Box paddingLeft={7} paddingRight={7} paddingTop={5} paddingBottom={5}>
                <Box marginBottom={1}><Typography variant="h5">About Me</Typography></Box>
                <Typography variant="p" lineHeight={5} >Experienced backend developer specializing in the Java/Spring tech stack. I've integrated systems using RESTful web services and implemented 
a microservices based architecture for ETL processing. Light front end experience with Javascript/React. I am interested in distributed systems and 
building scalable web applications impacting millions of users. My career goal to be become a software architect.</Typography> 
            </Box>
        </div>
    );
}

export default About;