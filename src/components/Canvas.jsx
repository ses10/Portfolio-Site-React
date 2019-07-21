import React from 'react';

import '../style/Canvas.css';

class Canvas extends React.Component {
    constructor(props){
        super(props);
        this.canvasRef = React.createRef();
        this.state = {
            width: this.props.width,
            height: this.props.height,
            pixels: [],
        }
        this.updateCanvas = this.updateCanvas.bind(this);
        this.draw = this.draw.bind(this);
        this.setUpPixels = this.setUpPixels.bind(this);
    }

    componentDidMount() {
        this.setUpPixels();
        this.timer = setInterval(this.updateCanvas, 25);
    }

    setUpPixels(){
        const numPixels = 250;
        let xMin = 0;
        let xMax = this.state.width;
        let yMin = 0;
        let yMax = this.state.height;
        let speedMin = 1;
        let speedMax = 1.5;
        let sizeMin = 1;
        let sizeMax = 2.5;
        let pixels = [];

        for(let i = 0; i < numPixels; i++){
            let randomX =Math.floor(Math.random() * (+xMax - +xMin)) + +xMin;
            let randomY =Math.floor(Math.random() * (+yMax - +yMin)) + +yMin;
            let randomSpeed = Math.random() * (+speedMax - +speedMin) + +speedMin;
            let randomSize =Math.floor(Math.random() * (+sizeMax - +sizeMin)) + +sizeMin;
            pixels.push(new Pixel(randomX, randomY, randomSpeed, randomSize));
        }

        this.setState({pixels: pixels});
    }

    updateCanvas(){
        let updatedPixels = this.state.pixels;

        updatedPixels.forEach(pixel => {
            if(pixel.y > this.state.height)
                pixel.y = 0;
            pixel.y += pixel.speed;
        });

        this.draw();
    }

    draw(){
        const pixelWidth = 5;
        const pixelHeight = 5;
        const canvas = this.canvasRef.current;
        const ctx = canvas.getContext("2d");

        ctx.clearRect(0,0,this.state.width, this.state.height);

        ctx.fillStyle = 'rgb(0, 0, 0)';
        ctx.fillRect(0, 0, this.state.width, this.state.height);

        this.state.pixels.forEach(pixel =>{
            ctx.fillStyle = '#3ADB76';
            ctx.fillRect(pixel.x, pixel.y, pixel.size, pixel.size);
        });

    }

    render(){
        return(
            <div id="CanvasContainer">
                <canvas ref={this.canvasRef} width={this.props.width} height={this.props.height}></canvas>
            </div>
        )
    }

}

class Pixel{
    constructor(x, y, speed, size){
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.size = size;
    }
}

export default Canvas;