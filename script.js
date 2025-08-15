let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");
let main = document.querySelector("#main");


form.addEventListener('submit', function(dets) {
    dets.preventDefault();  

    let card = document.createElement("div");
    card.classList.add("card");

    let profile = document.createElement("div");
    profile.classList.add("profile");

    let image = document.createElement("img");
    image.setAttribute("src", inputs[0].value); // Use the first input value for the image source

    let h3 = document.createElement("h3");
    h3.textContent = inputs[1].value; // Use the second input value for the name
    let h5 = document.createElement("h5");
    h5.textContent = inputs[2].value; // Use the third input value for the title
    let p = document.createElement("p");
    p.textContent = inputs[3].value; // Use the fourth input value for the description

   profile.appendChild(image);
   card.appendChild(profile);

   card.appendChild(h3);
   card.appendChild(h5);
   card.appendChild(p);

   main.appendChild(card);
});