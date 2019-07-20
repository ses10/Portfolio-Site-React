import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { spacing } from '@material-ui/system';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import '../style/Splash.css';

function Splash(){
    return(
        <div id="splashContainer">
            <Grid 
                id="splash"
                container 
                direction="column"
                
                alignItems="center"
                >
                <Box marginTop={28}>
                    <Typography variant="h3" >Dennis Sesma</Typography> 
                </Box>
                <Box marginTop={2}>
                    <Typography variant="h5">Software Engineer</Typography>
                </Box>
                <Box marginTop={7}>
                    <Button className="button"><Typography variant="button" id="buttonText">Resume</Typography></Button>
                </Box>
            </Grid>
        </div>
    );
}

export default Splash;