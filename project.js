/*
@title: modern art
@author: Vanessa Tan
@snapshot: 1.png, 2.png, 3.png
*/

const width = 125;
const height = 125;

setDocDimensions(width, height);

// store final lines here
const finalLines = [];

// create a polyline
const polyline = [
  [30, 90],
  [100, 90],
  [100, 30],
  [30, 30],
  [30, 90]
];

// add the polyline to the final lines
finalLines.push(polyline);

// transform lines using the toolkit


// draw it
drawLines(finalLines);

for (let i = 0; i< bt.randInRange(1,12); i++) {
  let ran1 = bt.randInRange(30,90);
  let d1 = bt.randIntInRange(0,1);
  let x1 = 0;
  let ran2 = bt.randInRange(30,90);
  let d2 = bt.randIntInRange(0,1);
  let x2 = 0;
  if(d1 == 0 && d2 == 0){ //y=30,90 
    drawLines([
      [[ran1,30], [ran2,90]]
      ])
  }
}
