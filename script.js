let flag = 0;
let myfunc = () => {
    if (((document.getElementById("e1").innerHTML == "x") || (document.getElementById("e1").innerHTML == "X")) && (((document.getElementById("e2").innerHTML == "x") || (document.getElementById("e2").innerHTML == "X"))) && ((document.getElementById("e3").innerHTML == "x") || (document.getElementById("e3").innerHTML == "X"))) {
        alert("player x won");
        document.getElementById("e1").style.backgroundColor = "green";
        document.getElementById("e2").style.backgroundColor = "green";
        document.getElementById("e3").style.backgroundColor = "green";
    }
    else if (((document.getElementById("e4").innerHTML == "x") || (document.getElementById("e4").innerHTML == "X")) && (((document.getElementById("e5").innerHTML == "x") || (document.getElementById("e5").innerHTML == "X"))) && ((document.getElementById("e6").innerHTML == "x") || (document.getElementById("e6").innerHTML == "X"))) {


        document.getElementById("e4").style.backgroundColor = "green";
        document.getElementById("e5").style.backgroundColor = "green";
        document.getElementById("e6").style.backgroundColor = "green";
        alert("player x won");
    }
    else if (((document.getElementById("e7").innerHTML == "x") || (document.getElementById("e7").innerHTML == "X")) && (((document.getElementById("e8").innerHTML == "x") || (document.getElementById("e8").innerHTML == "X"))) && ((document.getElementById("e9").innerHTML == "x") || (document.getElementById("e9").innerHTML == "X"))) {




        document.getElementById("e7").style.backgroundColor = "green";
        document.getElementById("e8").style.backgroundColor = "green";
        document.getElementById("e9").style.backgroundColor = "green";
        alert("player x won");
    }
    else if (((document.getElementById("e1").innerHTML == "x") || (document.getElementById("e1").innerHTML == "X")) && (((document.getElementById("e4").innerHTML == "x") || (document.getElementById("e4").innerHTML == "X"))) && ((document.getElementById("e7").innerHTML == "x") || (document.getElementById("e7").innerHTML == "X"))) {
        alert("player x won");
        document.getElementById("e1").style.backgroundColor = "green";
        document.getElementById("e4").style.backgroundColor = "green";
        document.getElementById("e7").style.backgroundColor = "green";
    }
    else if (((document.getElementById("e2").innerHTML == "x") || (document.getElementById("e2").innerHTML == "X")) && (((document.getElementById("e5").innerHTML == "x") || (document.getElementById("e5").innerHTML == "X"))) && ((document.getElementById("e8").innerHTML == "x") || (document.getElementById("e8").innerHTML == "X"))) {
        alert("player x won");
        document.getElementById("e2").style.backgroundColor = "green";
        document.getElementById("e5").style.backgroundColor = "green";
        document.getElementById("e8").style.backgroundColor = "green";
    }
    else if (((document.getElementById("e3").innerHTML == "x") || (document.getElementById("e3").innerHTML == "X")) && (((document.getElementById("e6").innerHTML == "x") || (document.getElementById("e6").innerHTML == "X"))) && ((document.getElementById("e9").innerHTML == "x") || (document.getElementById("e9").innerHTML == "X"))) {
        alert("player x won");
        document.getElementById("e3").style.backgroundColor = "green";
        document.getElementById("e6").style.backgroundColor = "green";
        document.getElementById("e9").style.backgroundColor = "green";
    }
    else if (((document.getElementById("e1").innerHTML == "x") || (document.getElementById("e1").innerHTML == "X")) && (((document.getElementById("e5").innerHTML == "x") || (document.getElementById("e5").innerHTML == "X"))) && ((document.getElementById("e9").innerHTML == "x") || (document.getElementById("e9").innerHTML == "X"))) {
        alert("player x won");
        document.getElementById("e1").style.backgroundColor = "green";
        document.getElementById("e5").style.backgroundColor = "green";
        document.getElementById("e9").style.backgroundColor = "green";
    }
    else if (((document.getElementById("e3").innerHTML == "x") || (document.getElementById("e3").innerHTML == "X")) && (((document.getElementById("e5").innerHTML == "x") || (document.getElementById("e5").innerHTML == "X"))) && ((document.getElementById("e7").innerHTML == "x") || (document.getElementById("e7").innerHTML == "X"))) {
        alert("player x won");
        document.getElementById("e3").style.backgroundColor = "green";
        document.getElementById("e5").style.backgroundColor = "green";
        document.getElementById("e7").style.backgroundColor = "green";
    }
    //
    if (((document.getElementById("e1").innerHTML == "o") || (document.getElementById("e1").innerHTML == "O")) && (((document.getElementById("e2").innerHTML == "o") || (document.getElementById("e2").innerHTML == "O"))) && ((document.getElementById("e3").innerHTML == "o") || (document.getElementById("e3").innerHTML == "O"))) {
        alert("player o won");
        document.getElementById("e1").style.backgroundColor = "green";
        document.getElementById("e2").style.backgroundColor = "green";
        document.getElementById("e3").style.backgroundColor = "green";
    }
    else if (((document.getElementById("e4").innerHTML == "o") || (document.getElementById("e4").innerHTML == "O")) && (((document.getElementById("e5").innerHTML == "o") || (document.getElementById("e5").innerHTML == "O"))) && ((document.getElementById("e6").innerHTML == "o") || (document.getElementById("e6").innerHTML == "O"))) {


        document.getElementById("e4").style.backgroundColor = "green";
        document.getElementById("e5").style.backgroundColor = "green";
        document.getElementById("e6").style.backgroundColor = "green";
        alert("player o won");
    }
    else if (((document.getElementById("e7").innerHTML == "o") || (document.getElementById("e7").innerHTML == "O")) && (((document.getElementById("e8").innerHTML == "o") || (document.getElementById("e8").innerHTML == "O"))) && ((document.getElementById("e9").innerHTML == "o") || (document.getElementById("e9").innerHTML == "O"))) {




        document.getElementById("e7").style.backgroundColor = "green";
        document.getElementById("e8").style.backgroundColor = "green";
        document.getElementById("e9").style.backgroundColor = "green";
        alert("player o won");
    }
    else if (((document.getElementById("e1").innerHTML == "o") || (document.getElementById("e1").innerHTML == "O")) && (((document.getElementById("e4").innerHTML == "o") || (document.getElementById("e4").innerHTML == "O"))) && ((document.getElementById("e7").innerHTML == "o") || (document.getElementById("e7").innerHTML == "O"))) {
        alert("player o won");
        document.getElementById("e1").style.backgroundColor = "green";
        document.getElementById("e4").style.backgroundColor = "green";
        document.getElementById("e7").style.backgroundColor = "green";
    }
    else if (((document.getElementById("e2").innerHTML == "o") || (document.getElementById("e2").innerHTML == "O")) && (((document.getElementById("e5").innerHTML == "o") || (document.getElementById("e5").innerHTML == "O"))) && ((document.getElementById("e8").innerHTML == "o") || (document.getElementById("e8").innerHTML == "O"))) {
        alert("player o won");
        document.getElementById("e2").style.backgroundColor = "green";
        document.getElementById("e5").style.backgroundColor = "green";
        document.getElementById("e8").style.backgroundColor = "green";
    }
    else if (((document.getElementById("e3").innerHTML == "o") || (document.getElementById("e3").innerHTML == "O")) && (((document.getElementById("e6").innerHTML == "o") || (document.getElementById("e6").innerHTML == "O"))) && ((document.getElementById("e9").innerHTML == "o") || (document.getElementById("e9").innerHTML == "O"))) {
        alert("player o won");
        document.getElementById("e2").style.backgroundColor = "green";
        document.getElementById("e5").style.backgroundColor = "green";
        document.getElementById("e8").style.backgroundColor = "green";
    }
    else if (((document.getElementById("e1").innerHTML == "o") || (document.getElementById("e1").innerHTML == "O")) && (((document.getElementById("e5").innerHTML == "o") || (document.getElementById("e5").innerHTML == "O"))) && ((document.getElementById("e9").innerHTML == "o") || (document.getElementById("e9").innerHTML == "O"))) {
        alert("player o won");
        document.getElementById("e1").style.backgroundColor = "green";
        document.getElementById("e5").style.backgroundColor = "green";
        document.getElementById("e9").style.backgroundColor = "green";
    }
    else if (((document.getElementById("e3").innerHTML == "o") || (document.getElementById("e3").innerHTML == "O")) && (((document.getElementById("e5").innerHTML == "o") || (document.getElementById("e5").innerHTML == "O"))) && ((document.getElementById("e7").innerHTML == "o") || (document.getElementById("e7").innerHTML == "O"))) {
        alert("player o won");
        document.getElementById("e3").style.backgroundColor = "green";
        document.getElementById("e5").style.backgroundColor = "green";
        document.getElementById("e7").style.backgroundColor = "green";
    }




}

document.getElementById("e1").addEventListener("click", tic = () => {
    console.log("yey");
    if (flag == 0) {
        document.getElementById("e1").innerHTML = "o";
        flag = 1;
    }
    else {
        document.getElementById("e1").innerHTML = "x";
        flag = 0;
    }

    myfunc();
})


document.getElementById("e2").addEventListener("click", tic = () => {
    console.log("yey");
    if (flag == 0) {
        document.getElementById("e2").innerHTML = "o";
        flag = 1;
    }
    else {
        document.getElementById("e2").innerHTML = "x";
        flag = 0;
    }
    myfunc();
})


document.getElementById("e3").addEventListener("click", tic = () => {
    console.log("yey");
    if (flag == 0) {
        document.getElementById("e3").innerHTML = "o";
        flag = 1;
    }
    else {
        document.getElementById("e3").innerHTML = "x";
        flag = 0;
    }
    myfunc();
})


document.getElementById("e4").addEventListener("click", tic = () => {
    console.log("yey");
    if (flag == 0) {
        document.getElementById("e4").innerHTML = "o";
        flag = 1;
    }
    else {
        document.getElementById("e4").innerHTML = "x";
        flag = 0;
    }
    myfunc();
})


document.getElementById("e5").addEventListener("click", tic = () => {
    console.log("yey");
    if (flag == 0) {
        document.getElementById("e5").innerHTML = "o";
        flag = 1;
    }
    else {
        document.getElementById("e5").innerHTML = "x";
        flag = 0;
    }
    myfunc();
})




document.getElementById("e6").addEventListener("click", tic = () => {
    console.log("yey");
    if (flag == 0) {
        document.getElementById("e6").innerHTML = "o";
        flag = 1;
    }
    else {
        document.getElementById("e6").innerHTML = "x";
        flag = 0;
    }
    myfunc();
})


document.getElementById("e7").addEventListener("click", tic = () => {
    console.log("yey");
    if (flag == 0) {
        document.getElementById("e7").innerHTML = "o";
        flag = 1;
    }
    else {
        document.getElementById("e7").innerHTML = "x";
        flag = 0;
    }
    myfunc();
})


document.getElementById("e8").addEventListener("click", tic = () => {
    console.log("yey");
    if (flag == 0) {
        document.getElementById("e8").innerHTML = "o";
        flag = 1;
    }
    else {
        document.getElementById("e8").innerHTML = "x";
        flag = 0;
    }
    myfunc();
})


document.getElementById("e9").addEventListener("click", tic = () => {
    console.log("yey");
    if (flag == 0) {
        document.getElementById("e9").innerHTML = "o";
        flag = 1;
    }
    else {
        document.getElementById("e9").innerHTML = "x";
        flag = 0;
    }
    myfunc()
})
document.getElementById("res").addEventListener("click", () => {
    location.reload()
})

