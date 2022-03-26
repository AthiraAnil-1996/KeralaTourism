let email = document.getElementById("email");
let error = document.getElementById("error");
let psw = document.getElementById("psw");
let pswerror = document.getElementById("pswerror");
let pno = document.getElementById("pno");
let pnoerror = document.getElementById("pnoerror");
function validate() {
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    if (regexp.test(email.value)) {
        error.innerHTML = "valid";
        error.style.color = "green";
        // var minNumberofChars = 6;
        // var maxNumberofChars = 12;
        var regularExpression = /^.{10,16}$/;
        if (regularExpression.test(psw.value)) {
            pswerror.innerHTML = "valid";
            pswerror.style.color = "green";
            // return true;
            
        else {
            pswerror.innerHTML = "Invalid";
            pswerror.style.color = "red";
            return false;
        }

    }
    else {
        error.innerHTML = "invalid";
        error.style.color = "red";
        return false;
    }
}