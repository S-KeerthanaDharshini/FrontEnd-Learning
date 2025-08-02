const janeBtn = document.getElementById("jane-btn");

let data = [
    {
        player: "Jane",
        score: 52
    }, 
    {
        player: "Mark",
        score: 41
    }
]


janeBtn.addEventListener("click",function(){
    alert(data[0].score)
})

// Fetch the button from the DOM, store it in a variable
// Use addEventListener() to listen for button clicks
// Log Jane's score when the button is clicked (via data)
