function validateSignUp() {
    var fName = document.getElementById('name');
    var email = document.getElementById('email');

    if (fName.value ==="") {
        alert("First name is required");
        return false;
    } else if(email.value ==="" && !email.value.includes("@")) {
    alert("invalid email format");
    return false;
}  else {
    return true;
}
}
