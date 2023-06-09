import React, { useRef, useEffect } from 'react'
import draw from '../modules/Drawing'

import "./Canvas.css";

const BOX_SIZE = 100;


const Canvas = props => {
    const canvasRef = useRef(null)
    const client = props.client;
    const bingo = client.getCurrentBingo();

    useEffect(() => {

        const canvas = canvasRef.current
        const context = canvas.getContext('2d')

        canvas.height = BOX_SIZE * 5;
        canvas.width = BOX_SIZE * 5;

        draw(context, bingo, 0)

        // when the user clicks on the drawing canvas...
        canvas.addEventListener('click', (event) => {
            const col = Math.ceil(event.offsetX / BOX_SIZE);
            const row = Math.ceil(event.offsetY / BOX_SIZE);
            // send x and y to client
            client.click(row, col); // this function will check if a star can be placed there
            // clear canvas, then draw the board again

            context?.clearRect(0, 0, canvas.width, canvas.height);
            draw(context, client.getCurrentBingo(), 0);

            console.log(client.getCurrentBingo().toString());
        });



    }, [draw])

    return <canvas id="canvas" ref={canvasRef} {...props} />
}

export default Canvas