let login = prompt("Input your Login");
let logIn = false;
let minLength = 4;
let user = "User";
let admin = "Admin";
let pass;
let passIn = false;
let whatTime = new Date();
let hours = whatTime.getHours();

if (login === user || login === admin && login.length > minLength) {
    pass = prompt("Input your password");
    logIn = true;
} else if (login === null) {
    alert("Canceled");
} else if (login.length < minLength) {
    alert("I don't know any users having name length less than 4 symbols");
} else {
    alert("I don`t know you");
}
if (logIn) {
    switch (pass) {
        case null:
            alert("Canceled");
            break;
        case 'UserPass':
            if (login === user) {
                alert('Login succseful');
                passIn = true;
            } else {
                alert("Wrong password");
            }
            break;
        case 'RootPass':
            if (login === admin) {
                alert('Login succseful');
                passIn = true;
            } else {
                alert("Wrong password");
            }
            break;
        default:
            alert("Wrong password");
            break;
    }
}
if (passIn) {
    if (login === user || login === admin && hours < 20) {
        alert("Good day, dear " + login + "!");
    } else (login === user || login === admin && hours > 20) {
        alert("Good evening, dear " + login + "!");
    }
}
