const newMessage = ` 
  <div class="row new-row">
    <img class="avatar" src="images/avatar-1.jpg" />
    <div class="text-container">
      <h6>John Doe</h6>
      <p>New message</p>
    </div>
    <span class="delete">✖</span>
  </div>
`;

document.querySelector('#msg-container').innerHTML += newMessage;

const messagesCount = document.querySelectorAll('p').length;
document.querySelector('#count').textContent = messagesCount;

let year = new Date().getUTCFullYear();
let month;
let day;

if (new Date().getMonth() < 9) {
  month = "0" + (new Date().getMonth() + 1);
} else {
  month = new Date().getMonth() + 1;
}

if (new Date().getDate() < 9) {
  day = "0" + new Date().getDate();
} else {
  day = new Date().getDate();
}

const date = year + "-" + month + "-" + day;
document.querySelector('#footer').innerHTML += `<span id="date">${date}</span>`;


function update() { const stockage = document.querySelectorAll('p').length;
document.querySelector("#count").textContent = stockage;
}


function supprime() { 
  for (let i = 0; i < document.querySelectorAll(".delete").length; i++ )
document.querySelectorAll(".delete")[i].addEventListener('click', 
function() {
  this.parentNode.remove()
  update() 
}
)
}
supprime()
 

document.querySelector("#btn-add").addEventListener("click", 
function () {
  const message = document.querySelector("#add-message").value;
  console.log(message)
  document.querySelector('#msg-container').innerHTML += 
  ` <div class="row new-row">
      <img class="avatar" src="images/avatar-1.jpg" />
      <div class="text-container">
        <h6>John Doe</h6>
        <p>${message}</p>
      </div>
      <span class="delete">✖</span>
    </div>
  `;
  document.querySelector("#add-message").value = null
  update()
  supprime()
  
}
)
  
document.querySelector("#btn-search").addEventListener("click", 
function () {
  let textToCompare = document.querySelector("#search-message").value
  console.log(textToCompare)

  for( i = 0; i <document.querySelectorAll("h6").length; i++){
    const name = document.querySelectorAll("h6")[i].textContent.toLowerCase()
    const textSearch = textToCompare.toLowerCase()
    if (name.includes(textSearch) === true){
      document.querySelectorAll("h6")[i].parentNode.parentNode.style.display = "flex";
      console.log("true", document.querySelectorAll("h6")[i].textContent )
    } else { 
      document.querySelectorAll("h6")[i].parentNode.parentNode.style.display = "none";

      console.log("false", document.querySelectorAll("h6")[i].textContent) 
    }
    
  }
  document.querySelector("#search-message").value = null
  
}

)


