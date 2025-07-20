// Use .innerHTML to render a Buy! button inside the div container


const divpart = document.getElementById("container")

divpart.innerHTML = "<button onclick='buy()'>Buy!</button>"

function buy(){
    divpart.innerHTML += "<p>Thank you for buying!</p>"
}
