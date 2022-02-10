function success(){
    alert("hi")
}

let logBtn = document.querySelector("button#Login")
logBtn.addEventListener('click', success)

function hover(){
    alert("yes")
    console.log('yes')
}

let header = document.querySelector('button#Sign')
header.addEventListener('click', hover)