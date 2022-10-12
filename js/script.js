//===================Dark Mode=============================
var icon = document.getElementById("icon");
icon.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        icon.src = "./assets/sun.png";
    } else {
        icon.src = "./assets/moon.png";
    }
}

//===========================Circular Progress Bar===========================

let htmlProgress = document.getElementById("html-progress");
let htmlCounter = 0;
//===================================HTML===================================
setInterval(() => {
    if (htmlCounter == 80) {
        clearInterval();
    }
    else {
        htmlCounter += 1;
        htmlProgress.innerHTML = htmlCounter + "%";
    }

}, 20);


let cssProgress = document.getElementById("css-progress");
let cssCounter = 0;
//===================================CSS===================================
setInterval(() => {
    if (cssCounter == 75) {
        clearInterval();
    }
    else {
        cssCounter += 1;
        cssProgress.innerHTML = cssCounter + "%";
    }

}, 20);


let jsProgress = document.getElementById("js-progress");
let jsCounter = 0;
//===================================JS===================================
setInterval(() => {
    if (jsCounter == 70) {
        clearInterval();
    }
    else {
        jsCounter += 1;
        jsProgress.innerHTML = jsCounter + "%";
    }

}, 20);


let angularProgress = document.getElementById("angular-progress");
let angularCounter = 0;
//===================================Angular===================================
setInterval(() => {
    if (angularCounter == 45) {
        clearInterval();
    }
    else {
        angularCounter += 1;
        angularProgress.innerHTML = angularCounter + "%";
    }

}, 20);


let javaProgress = document.getElementById("java-progress");
let javaCounter = 0;
//===================================HTML===================================
setInterval(() => {
    if (javaCounter == 60) {
        clearInterval();
    }
    else {
        javaCounter += 1;
        javaProgress.innerHTML = javaCounter + "%";
    }

}, 20);


let pythonProgress = document.getElementById("python-progress");
let pythonCounter = 0;
//===================================CSS===================================
setInterval(() => {
    if (pythonCounter == 65) {
        clearInterval();
    }
    else {
        pythonCounter += 1;
        pythonProgress.innerHTML = pythonCounter + "%";
    }

}, 20);


let nodejsProgress = document.getElementById("nodejs-progress");
let nodejsCounter = 0;
//===================================JS===================================
setInterval(() => {
    if (nodejsCounter == 40) {
        clearInterval();
    }
    else {
        nodejsCounter += 1;
        nodejsProgress.innerHTML = nodejsCounter + "%";
    }

}, 20);


let sqlProgress = document.getElementById("sql-progress");
let sqlCounter = 0;
//===================================Angular===================================
setInterval(() => {
    if (sqlCounter == 85) {
        clearInterval();
    }
    else {
        sqlCounter += 1;
        sqlProgress.innerHTML = sqlCounter + "%";
    }

}, 20);


//==================================Form Validation============================

function formValidate() {
    let email = document.getElementById('email').value;
    let tel = document.getElementById('tel').value;

    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let telephoneformat = /^\+94\d{9}$/;

    if (email != "" || tel != ""){
        if(!(email.match(mailformat))){
            alert("Invalid Email Address");
        }
        
        if(!(tel.match(telephoneformat))){
            alert("Invalid Phone Number");
        }
    }
    
    
}

function submitMessage(){
    swal({
        title: "Message Sent",
        text: "Your Message Delivered Successfully",
        icon: "success"
    });
}



function clearTextField() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    document.getElementById("tel").value = "";
}
