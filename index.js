

function changed() {
    if(document.getElementById("login-el").innerHTML === "Login"){
        document.getElementById("login-el").innerHTML = "LogOut"
    }else {
        document.getElementById("login-el").innerHTML = "Login"
    }
    // document.getElementsByClassName("container").innerHTML = ""
}

var topLikesCounter = 0
var bottomLikesCounter = 0


function updateTopLikes() {
    topLikesCounter++
    document.getElementById("top-likes").innerHTML = topLikesCounter + " likes"
    // document.getElementById("pop-up").style.display = "flex"
    alert("ninja was liked")
}

function updateBottomLikes() {
    bottomLikesCounter++
    document.getElementById("bottom-likes").innerHTML = bottomLikesCounter + " likes"
    document.getElementById("pop-up2").style.display = "flex"
}

function removePopUps() {
    document.getElementById("pop-up").style.display = "none"
    document.getElementById("pop-up2").style.display = "none"
}

function remDef() {
    document.getElementById("def-btn").style.display = "none"
}

