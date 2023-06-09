import React, { useRef, useEffect } from 'react'
import draw from '../modules/Drawing'

const BOX_SIZE = 100;


const Canvas = props => {
    const canvasRef = useRef(null)

    useEffect(() => {

        const canvas = canvasRef.current
        const context = canvas.getContext('2d')

        canvas.height = BOX_SIZE * 5;
        canvas.width = BOX_SIZE * 5;

        draw(context, 0)

    }, [draw])

    return <canvas ref={canvasRef} {...props} />
}

export default Canvas