function onSignup() {
    // get input values
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var Address = document.getElementById("Address").value;
    var number = document.getElementById("number").value;
    var password = document.getElementById("password").value;
    var message = document.getElementById("message");



    if( firstname != "" && lastname != "" && email != "" && Address != "" && password != "") { 
    var user = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        Address: Address,
        number: number,
        password: password,
    }


    var users = JSON.parse(localStorage.getItem("users")) || [];
    // get indx
    var userIdx = users.findIndex(function (val) {
        return val.email.toLowerCase() === user.email.toLowerCase();
    });

    if (userIdx === -1) {
        // this user is not exist
        users.push(user);
        // store in storage
        localStorage.setItem("users", JSON.stringify(users));
        // redirect to login page
        location.href = "login.html";
    } else {
        var warning = document.createElement('div')
        var warnText = document.createTextNode("Already used in another account!")
        warning.appendChild(warnText)
        warning.setAttribute("class", "alert alert-danger d-flex align-items-center")

        message.appendChild(warning)

    }
    // clear state
    setTimeout(() => {
        message.innerHTML = "";
    }, 2000);
    localStorage.setItem("users", JSON.stringify(users));
}else {
    var warning = document.createElement('div')
    var warnText = document.createTextNode("Please fill all the fields")
    warning.appendChild(warnText)
    warning.setAttribute("class", "alert alert-danger d-flex align-items-center")

    message.appendChild(warning)
}
setTimeout(() => {
    message.innerHTML = "";
}, 3000);


    // console.log(user);


}

function onLogin() {
    // get input values
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var message = document.getElementById("message");

    var user = {
        email: email.value,
        password: password.value,
    }

    var users = JSON.parse(localStorage.getItem("users")) || [];
    // get indx
    var currentUser = users.find(function (val) {
        return val.email.toLowerCase() === user.email.toLowerCase() && val.password === user.password;
    });

    if (currentUser) {
        localStorage.setItem("user", JSON.stringify(currentUser));
        // user login
        location.href = "index.html";
    } else {
        var warning = document.createElement('div')
        var warnText = document.createTextNode("Invalid credentials!")
        warning.appendChild(warnText)
        warning.setAttribute("class", "alert alert-danger d-flex align-items-center")

        message.appendChild(warning)

    }
    // clear state
    setTimeout(() => {
        message.innerHTML = "";
    }, 2000);
}

function onLogout() {
    var message = document.getElementById("message");
    localStorage.removeItem("user");
    var warning = document.createElement('div')
    var warnText = document.createTextNode("Logging Out!")
    warning.appendChild(warnText)
    warning.setAttribute("class", "alert alert-danger d-flex align-items-center")

    message.appendChild(warning)
    // clear state
    setTimeout(() => {
        location.href = "login.html";
    }, 2000);
}

function getCurrentUser() {
    var detial = document.getElementById("detial");
    var navName = document.getElementById("navName");
    var navPhone = document.getElementById("navPhone");
    var navName = document.getElementById("navName");
    var navAddress = document.getElementById("navAddress");
    var user = JSON.parse(localStorage.getItem("user"));
    detial.innerHTML = "Loggedin as " + user.email.split("@")[0];
    navName.innerHTML = "Name: " + user.firstname +user.lastname;
    navPhone.innerHTML = "Phone: " + user.number;
    navAddress.innerHTML = "Address: " + user.Address;
}

function insertButton() {
    var title = document.getElementById("title");
    var description = document.getElementById("description");

    
    // cardTitle.innerHTML = user.title;
    // cardText.innerHTML = user.description;

    var postCard = document.getElementById("postCard"); 
    postCard.innerHTML += `<div class="post"><li><img src="https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_960_720.png" alt="Avatar"
    style="width:100%">
<div class="container">
<br>
    <h5 class="card-title" id="cardTitle">${title.value}</h5>
    <p class="card-text" id="cardText">${description.value}</p>
</div></li></div>`
}