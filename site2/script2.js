let abcd = document.querySelector("#abcd");
abcd.addEventListener("mouseover", function(){
    abcd.style.backgroundColor = "yellow"; // Change background color to red on mouseover
}); 
abcd.addEventListener("mouseout", function(){
    abcd.style.backgroundColor = "red"; // Reset background color on mouseout
});