import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import Canvas from './Canvas';

import '../style/Splash.css';

class Splash extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {  height:0, 
                        width:0,
                        renderCanvas:false
        };
    }
    
    componentDidMount(){
        const height = document.getElementById('splashContainer').clientHeight;
        const width = document.getElementById('splashContainer').clientWidth;
        
        this.setState({height: height, width: width, renderCanvas: true});
    }

    render() {
        return(
            <div id="splashContainer">
                {this.state.renderCanvas &&
                    <Canvas id="canvas" height={this.state.height} width={this.state.width}></Canvas>
                }
                <Grid 
                    id="splash"
                    container 
                    direction="column"
                    
                    alignItems="center"
                    >
                    <Box marginTop={30}>
                        <Typography variant="h3" >Dennis Sesma</Typography> 
                    </Box>
                    <Box marginTop={2}>
                        <Typography variant="h5">Software Engineer</Typography>
                    </Box>
                    <Box marginTop={7}>
                        <Button className="button" href="../assets/resume.pdf" ><Typography variant="button" id="buttonText">Resume</Typography></Button>
                    </Box>
                </Grid>
            </div>
        )
    }
}

export default Splash;