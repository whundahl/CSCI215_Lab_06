
function checkName() {
    var nameExp = new RegExp('\<');

    if(nameExp.test(document.getElementById('name').value)){
        document.getElementById('name').style.backgroundColor = "rgb(255, 0, 0)";
        return false
    }
    else {
        document.getElementById('name').style.backgroundColor = "";
        return true
    }

}

function checkEmail() {
    var email = document.getElementById('email').value;
    var regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regEx.test(email);
}

function checkAge() {
    var regEx = new RegExp('^(([0-9][1-9])|([1-9][0-9])|[1-9])$');
    var givinAge = document.getElementById('age').value;

    if(regEx.test(givinAge)) {
        document.getElementById('age').style.backgroundColor = "";
        return true

    } else {
        document.getElementById('age').style.backgroundColor = "rgb(255, 0, 0)";
        return false
    }
}


function validate() {
    val = checkEmail(document.getElementById("email").value);
    val2=checkName();
    val3= checkAge();
    console.log(val,val2,val3);

    if(val == false){
        alert("Invalid Email, Please Try Again");
        document.getElementById('email').style.backgroundColor = "rgb(255, 0, 0)";
    }

    else if( val2 == false || val3 == false){
        alert("Either your Name or Age is Invalid")
    }

    else{
        myAjaxFunction()
    }
}

function myAjaxFunction(){
    alert("The AJAX has been created, clearing all fields")

}