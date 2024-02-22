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

}

// parallelogram
function calculateParallelogram(){

}

// Rhombus
function calculateRhombus(){

}

// pentagon
function calculatePentagon(){

}

// ellipse
function calculateEllipse(){

}