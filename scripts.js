console.log("hello")
// triangle
function calculateTriangle(){
    let triangleBaseInput = document.getElementById('triangleBase')
    triangleBaseText = parseFloat(triangleBaseInput.value) 
    let triangleHeightInput = document.getElementById('triangleHeight')
    triangleHeightText = parseFloat(triangleHeightInput.value)
    // calculate
    let res = .5 * triangleBaseText * triangleHeightText
    console.log(res)
    // display
    let displayArea = document.getElementById('display-area')
    displayArea.innerText = res
}

// rectangle
function calculateRectangle(){
    // width
    let widthInput = document.getElementById('rectangle-width')
    let widthText = widthInput.value
    let width = parseFloat(widthText)
    // length
    let lengthInput = document.getElementById('rectangle-length')
    let lengthText = lengthInput.value
    let length = parseFloat(lengthText)
    // calculate
    let area = width * length
    // display
    let rectangleArea = document.getElementById('rectangle-area')
    rectangleArea.innerText = area;
}

// parallelogram
function calculateParallelogram(){
    // base
    let baseInput = document.getElementById('parallelogram-base')
    let baseText = baseInput.value
    let base = parseFloat(baseText)
    // height
    let heightInput = document.getElementById('parallelogram-height')
    let heightText = heightInput.value
    let height= parseFloat(heightText)
    // calculate
    let area = base * height
    //display
    let display = document.getElementById('parallelogram-area')
    display.innerText = area;
}

// Rhombus
function calculateRhombus(){
    //Diagonal 1
    let diagonal_1_Input = document.getElementById('diagonal-1')
    let d1 = parseFloat(diagonal_1_Input.value)
    //Diagonal 2
    let diagonal_2_Input = document.getElementById('diagonal-2')
    let d2 = parseFloat(diagonal_2_Input.value)
    // area
    let area = .5 * (d1 * d2)
    // display
    let displayArea = document.getElementById('rhombus-area')
    displayArea.innerText = area
}

// pentagon
function calculatePentagon(){
    // perimeter
    let perimeterInput = document.getElementById('pentagon-p')
    let perimeter = parseFloat(perimeterInput.value)
    // apothem
    let apothemInput = document.getElementById('pentagon-a')
    let apothem = parseFloat(apothemInput.value)
    // calculate
    let area = .5 * perimeter * apothem
    // display
    let displayArea = document.getElementById('pentagon-area')
    displayArea.innerText = area;
}

// ellipse
function calculateEllipse(){
    // axia a
    let axisAInput = document.getElementById('ellipse-a-axis')
    let axisA = parseFloat(axisAInput.value)
    // axis b
    let axisBInput = document.getElementById('ellipse-b-axis')
    let axisB = parseFloat(axisBInput.value)
    // calculate
    let area = 3.1416 * axisA * axisB;
    // display 
    let displayArea = document.getElementById('ellipse-area')
    displayArea.innerText = area;
}