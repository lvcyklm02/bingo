
const BOX_SIZE = 100;

// categorical colors from
// https://github.com/d3/d3-scale-chromatic/tree/v2.0.0#schemeCategory10
const BASE_COLORS = [
    '#1f77b4',
    '#ff7f0e',
    '#2ca02c',
    '#d62728',
    '#9467bd',
    '#8c564b',
    '#e377c2',
    '#7f7f7f',
    '#bcbd22',
    '#17becf',
];

// semitransparent versions of those colors
const COLORS = BASE_COLORS.map((color) => color + '60');
const COLORS_LIGHT = COLORS.map((color) => color + '60');

/**
 * Draw a black square filled with a given color.
 * 
 * @param cts context of the canvas to draw on
 * @param x x position of center of box
 * @param y y position of center of box
 * @param text fill text
 * @param color color index
 */
function drawColorBox(ctx, x, y, text, completed_mask, color) {
    const context = ctx;

    // save original context settings before we translate and change colors
    context.save();

    // translate the coordinate system of the drawing context:
    //   the origin of `context` will now be (x,y)
    context.translate(x, y);

    // draw the outer outline box centered on the origin (which is now (x,y))
    context.strokeStyle = 'black';
    context.lineWidth = 2;
    context.strokeRect(-BOX_SIZE / 2, -BOX_SIZE / 2, BOX_SIZE, BOX_SIZE);

    // fill with a random semitransparent color
    color = ((completed_mask) ? COLORS_LIGHT[color] : COLORS[color]);
    context.fillStyle = color ?? assert.fail();
    context.fillRect(-BOX_SIZE / 2, -BOX_SIZE / 2, BOX_SIZE, BOX_SIZE);

    context.fillStyle = "black";
    context.font = "bold 18px Arial";
    context.fillText(text, 0, 0);

    // reset the origin and styles back to defaults
    context.restore();
}

/**
 * Draws five by five bingo board of user's color
 * @param {canvas context} ctx 
 * @param {number} color 
 * @returns 
 */
const draw = (ctx, bingo, color) => {
    let counter = 0;

    for (let row = 1; row < 6; row++) {
        for (let col = 1; col < 6; col++) {
            let text = bingo.tasks[counter];
            let completed_mask = bingo.completed_mask[col - 1][row - 1]
            drawColorBox(ctx, (row - 1 / 2) * BOX_SIZE, (col - 1 / 2) * BOX_SIZE, text, completed_mask, color);
            counter++;
        }
    }

    return;
}

export default draw