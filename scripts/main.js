const myImage = document.querySelector("img");
var counter = 1;

myImage.onclick = function(){
switch(counter){
    case 1:
        myImage.setAttribute("src","images/aaa.pn");
        myImage.setAttribute("alt","a banana taped onto the wall");
        break;
    case 2:
        myImage.setAttribute("src","images/bbb.jp");
        myImage.setAttribute("alt", "Can't help myself - a robot art that conveys emotion");
        break;
    case 3:
        myImage.setAttribute("src","images/ccc.jpe");
        myImage.setAttribute("alt","Van Gogh's painting - Wheat Field with Cypresses");
        break;
}
counter++;
if (counter>3) 
    counter = 0;
}

/*
myImage.onclick = function() {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/aaa.png"){
        myImage.setAttribute("src","images/bbb.jpg")
    }else{
    myImage.setAttribute("src","images/aaa.png");
    }
};
*/

let myButton=document.querySelector("button");
let myHeader=document.querySelector("h1");

if (localStorage.getItem("name")){
    const storedName = localStorage.getItem("name");
    myHeader.textContent=`Hello, ${storedName}!`;
}

function setUserName(){
    const myName = prompt("Please enter your name.");
    if (myName){
    localStorage.setItem("name",myName);
    myHeader.textContent = `Hello, ${myName}!`;
    }
    else{
        setUserName();
    }
}

myButton.onclick = function(){
    setUserName();
}
