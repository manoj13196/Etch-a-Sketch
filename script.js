
let containerSize = 500;
let currentColor="default";
let selectedColor="#000000";

function getGridSize(){
    let gridSize=prompt("Enter grid size (1-100)");

    if((gridSize>=1 && gridSize<=100) &&(gridSize%1==0) )
    {
        createGrid(gridSize); 
    }
    else{
        alert("Enter size between 1 to 100 and avoid decimal values.");
        getGridSize();
    }
}
getGridSize();

let newGrid=document.getElementById("newGrid");
newGrid.addEventListener("click",getGridSize);

function setBackgroundColor() {

    let currentOpacity=parseFloat(this.dataset.opacity)||0;

    if(currentOpacity<1)
    {
        currentOpacity+=0.1;
        this.dataset.opacity=currentOpacity;
    }
    if(currentColor==="default")
    {
        this.style.backgroundColor = `rgba(0, 0, 0, ${currentOpacity})`;
    }
    else if(currentColor==='color')
    {
        let rgbColor = hexToRgb(selectedColor);
        this.style.backgroundColor=`rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, ${currentOpacity})`;
    }
    else if(currentColor==='rgb')
    {
        let randomColor = getRandomColor();
        this.style.backgroundColor =`rgba(${randomColor.r}, ${randomColor.g}, ${randomColor.b}, ${currentOpacity})`;
    }
    
    this.style.border="1px solid black";
}

function hexToRgb(hex) {
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);
    return { r, g, b };
}

function getRandomColor(){
    let r=Math.floor(Math.random()*256);
    let g=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);
    return {r,g,b};
}

let colorBtn=document.getElementById("color");
let rgb=document.getElementById("rgb");
let defaultColor=document.getElementById("defaultColor");
let colorPicker=document.getElementById("colorPicker");

colorBtn.addEventListener("click",function(){
    currentColor="color";
    colorPicker.click();
});
colorPicker.addEventListener("input",function(){
    selectedColor=this.value;
});

rgb.addEventListener("click",function(){
    currentColor="rgb";
});
defaultColor.addEventListener("click",function(){
    currentColor='default';
})


function createGrid(size) {
    let container = document.getElementById("container");
    container.innerHTML = '';
    container.style.width = `${containerSize}px`;
    container.style.height = `${containerSize}px`;

    let squareSize = containerSize / size;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.style.backgroundColor = "rgba(0,0,0,0)";
        container.appendChild(square);
        square.addEventListener("mouseover", setBackgroundColor);
    }
}

let reset=document.getElementById("reset");

reset.addEventListener("click", function()
{
    let squares=document.querySelectorAll(".square");
    squares.forEach(square=>{
        square.style.backgroundColor="rgba(0,0,0,0)";
        currentColor='default';
        square.dataset.opacity="0";
    })
})






