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

    }, [draw])

    return <canvas id="canvas" ref={canvasRef} {...props} />
}

export default Canvas