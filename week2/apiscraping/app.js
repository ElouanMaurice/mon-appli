const fetch = require('node-fetch');
const db = require('./database/setup');
// Do not edit/remove code above this line

// Insert your code here


function encore (){
     fetch(`https://fruityvice.com/api/fruit/all`)
    .then(response => response.json())
    .then(data => {
for(let i=0; i<length; i++){

        }

        console.log(data)        
    });
}
    
    


encore()

