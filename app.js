const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn")
const color = document.querySelector(".color")

btn.addEventListener("click", function(){
    const nbr = randomNbr()
    document.body.style.backgroundColor = colors[nbr]
    color.textContent = colors[nbr]
})

function randomNbr(){
    return Math.floor(Math.random() * 4)
}