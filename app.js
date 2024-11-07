let choice = document.querySelectorAll(".choice");

choice.forEach(choice => {
    choice.addEventListener("click",()=>{
        let choosen = choice.innerText; 
        RandChoose(choosen);
    });
});

function RandChoose(choosen){
    let arr = ["Rock","Paper","Scissor"];
    var randomItem = Math.floor(Math.random() * arr.length);
    let compChoose = arr[randomItem];
    checkWin(compChoose,choosen);
};

function checkWin(compChoose,choosen){
    
    if (choosen == compChoose){
        document.getElementById("msg").innerText="TIED";
        document.getElementById("msg").style.backgroundColor = "orange"; 

    }
    else if((choosen === "Rock" && compChoose === "Scissor") ||
    (choosen === "Paper" && compChoose === "Rock") ||
    (choosen === "Scissor" && compChoose === "Paper")){
        document.getElementById("msg").innerText=`You Win Computer choose ${compChoose}`;
        document.getElementById("user-score").innerText = parseInt(document.getElementById("user-score").innerText)+1;
        document.getElementById("msg").style.backgroundColor = "green"; 
    }
    else{
        document.getElementById("msg").innerText=`You Lose Computer Choose ${compChoose}`;

        document.getElementById("comp-score").innerText = parseInt(document.getElementById("comp-score").innerText)+1;
        document.getElementById("msg").style.backgroundColor = "red"; 

    }
};
