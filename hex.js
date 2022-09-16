const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn")
const color = document.querySelector(".color")

btn.addEventListener("click", function(){
    let nbr = "#"
    for(let i = 0; i < 6; i++){
        let ran = randomNbr()
        nbr += hex[ran]
    }
    color.textContent = nbr
    document.body.style.backgroundColor = nbr 
})

function randomNbr(){
    return Math.floor(Math.random() * hex.length)
}