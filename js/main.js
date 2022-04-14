//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

document.querySelector('button').addEventListener('click', getDrink) 

function getDrink() {
    
    let userDrink = document.querySelector('input').value;
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${userDrink}`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        
        document.querySelector('h2').innerText = data.drinks[0].strDrink;
        document.querySelector('img').src = data.drinks[0].strDrinkThumb;
        document.querySelector('h3').innerText = data.drinks[0].strInstructions;

        // let ingredArray = Object.keys(data.drinks[0]);
        // let ingredients = [];

        // ingredArray.forEach(elem => {
        //     if (elem.includes('Ingr') && elem.valu) {
        //         ingredients.push(elem);
        //         console.log(ingredients);
        //     }
            
        // })

        

    })
    .catch(err =>{
        console.log(`error: ${err}`)
    })
};


// let node = document.createElement('li');
        // ingredients.forEach(element => {
        //     document.createTextNode(element)
        // })

        // node.appendChild(textnode);
        // document.getElementById('ingredients').appendChild(node);