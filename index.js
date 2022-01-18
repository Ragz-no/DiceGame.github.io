//RNG for dice img
    var randomNumber1 = Math.ceil(Math.random() * 6);
    var randomNumber2 = Math.ceil(Math.random() * 6);
    
    document.querySelector(".dice .img1").setAttribute("src", `./images/dice${randomNumber1}.png`);
    document.querySelector(".dice .img2").setAttribute("src", `./images/dice${randomNumber2}.png`);

// hvis den ene terningen er høyere enn den andre
    if (randomNumber1 == randomNumber2) {
    document.getElementById("result-text").innerHTML = "Draw!";
    
    } else if (randomNumber2 > randomNumber1) {
    document.getElementById("result-text").innerHTML = "Player 2 Wins!";
    } 
    
    else if (randomNumber2 < randomNumber1) {
    document.getElementById("result-text").innerHTML = " Player 1 Wins!"
    }
    
    else {
        alert("Error")
    }

    function btnFucntion() {
        location.reload();
    }


    
