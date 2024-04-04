// Insert your code here
console.log("bonjour");
document.querySelector('#msg-container').innerHTML += `
<div class="row new-row">
    <img class="avatar" src="images/avatar-1.jpg" />
    <div class="text-container">
        <h6>Elouan maurice</h6>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            unde vel magni possimus libero, alias suscipit nobis officia
            accusantium. Laborum ipsam accusamus iusto deserunt mollitia.
            Repudiandae alias sequi nobis ipsum.
        </p>
    </div>
    <span class="delete">✖</span>
</div>
`;
document.querySelector("#count").textContent = document.querySelectorAll(".row").length;


const date = new Date();
date.toDateString ("Hu");
document.querySelector('#footer').innerHTML =`<span id="date"> ${date.toLocaleDateString("Hugit ad ")}</span>`;


