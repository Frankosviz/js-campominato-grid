// Creo la mia funzione senza contenuto

function generateNewGridSquare(content){
    
// Aggiungo un elemento con classe square che ho creato in css

    const newElement = document.createElement('article');
    newElement.innerHTML = '<span>' + content + '</span>';
    newElement.classList.add('square');
    return newElement;
}

// console.log(generateNewGridSquare);

// Seleziono la griglia assegnandogli le classi css che ho creato

const grid = document.getElementById('grid');
grid.classList.add('grid');
console.log(grid);

// Con il ciclo for vado ad aggiungere tante volte fino a 100 i miei quadrati con i numeri all'interno

for (let index = 0; index < 100; index++){
    const square = generateNewGridSquare(index + 1);
    // console.log(square);

    square.addEventListener('click', function(){
    square.classList.add('square', 'bg-aqua');
    console.log(index + 1);
    });



// Con appendChild vado ad 'appendere' sulla mia pagina il contenuto di square

    grid.appendChild(square);
}





        // Ora creo la funzione che al click su play resetta i quadrati

        // let play = document.getElementById('resetButton');
        // play = addEventListener('click', function(){
        //     square.classList.add('square', 'bg-white');
        
        // })

