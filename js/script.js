function generateNewGridSquare(content){
    const newElement = document.createElement('article');
    newElement.innerHTML = '<span>' + content + '</span>';
    newElement.classList.add('square');
    return newElement;
}
console.log(generateNewGridSquare);

const grid = document.getElementById('grid');
console.log(grid);

for (let index = 0; index < 100; index++){
    const square = generateNewGridSquare(index + 1);
    console.log(square);
    
}



// const square = addEventListener('click') function(){