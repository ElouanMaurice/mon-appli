// Insert your code here

let depart = 1;
let arrive = 15;

function encore (){
for(let i=depart; i<=arrive; i++){
fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
 .then(response => response.json())
 .then(data => { 
    document.querySelector('#pokemonContainer').innerHTML +=`
    <div class="pokemon ${data.types[0].type.name}">
    <div class="imgContainer">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png" alt="${data.name}" />
    </div>
    <div class="info">
        <h3 class="name">${data.name}</h3>
        <span class="type">Type: <span>${data.types[0].type.name}</span></span>
    </div>
</div>`;
    
 });
}
}

encore()
document.querySelector("#next").addEventListener('click',
    function(){
        depart += 15;
        arrive += 15;
        encore()
    })

//for(let q=depart; q<=arrive; q++){
  //  fetch(`https://pokeapi.co/api/v2/pokemon/${q}`)
 //.then(response => response.json())
 //.then(data => {


   // document.querySelector("#next").addEventListener('click',
    //function(){
      //  console.log('click detected')
        //document.querySelector('#pokemonContainer').innerHTML +=`
        //<div class="pokemon ${data.types[0].type.name}">
       // <div class="imgContainer">
         //   <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${q}.png" alt="${data.name}" />
        //</div>
        //<div class="info">
          //  <h3 class="name">${data.name}</h3>
            //<span class="type">Type: <span>${data.types[0].type.name}</span></span>
        //</div>
    //</div>`;
    //}
    //)
    

 //})
//}