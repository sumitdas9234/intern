window.onload = allowMouseInputs;
let calculator, output = false;
let viewer = document.getElementById('viewer');
//initial setup function which runs once when the page is loaded
function setup() {
  //p5.js attaches a canvas at the end of the document by default.
  //to avoid canvas being loaded
  noCanvas();
  //instansiate the calculator class
  calculator = new Calculator();
}

// draw() function runs every frame default 60fps
//can use frameRate(value) to change frame rate
function draw() {
  //by default the viewer has 0 in it. maintain the 0 unless there is something in the input array
  calculator.inputs.length && render();
}


//keyPressed() function used to capture the key pressed event
function keyTyped() {
  //if key pressed is enter then evaluate the expression
  if (keyCode == ENTER) {
    calculator.evaluate();
    //set the output flag to true to render the output in the viewer
    output = true;
  } else if (key == 'c') {
    //if the key is c, clear the screen and the input array
    calculator.inputs = [];
    viewer.innerHTML = 0;
  } else {
    output = false;
    calculator.inputs.push(key);
  }
  return false;
}

function render() {
  viewer.innerHTML = output ? calculator.output : calculator.inputs.join('');
}

function allowMouseInputs() {
  let inputs = document.getElementsByClassName('num');
  let eq = document.getElementById('equals');
  let clear = document.getElementById('clear');
  for (element of inputs) {
    element.addEventListener('click', (e) => {
      let number = e.originalTarget.dataset.num;
      calculator.inputs.push(number);
    });
  }

  eq.addEventListener('click', () => {
    calculator.evaluate();
    output = true;
  });
  clear.addEventListener('click', () => {
    calculator.inputs = [];
    output = false;
    viewer.innerHTML = 0;
  });
}