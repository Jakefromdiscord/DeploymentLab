function success(){
    alert("hi")
}

let logBtn = document.querySelector("#login")
logBtn.addEventListener('click', success)

function hover(){
    alert("yes")
}

let header = document.querySelector('h1')
header.addEventListener('mouseover', hover)