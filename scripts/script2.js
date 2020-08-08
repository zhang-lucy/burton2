var PASSWORD = "2cans";
var PASSWORDalt = "2CANS";


function password() {
    var frm = document.getElementById("pword");
    var pw = frm.elements[0].value;
    if (pw == PASSWORD || pw == PASSWORDalt){
        window.location.href = "index2.html ";
    }
    else {
        console.log("wrong password");
        console.log(pw);
    }
}

function init() {
    var a = window.innerWidth;
    console.log("screen width:");
    console.log(a);
    var title = document.getElementById("title");
    title.innerHTML = "Welcome to Burton 2! "+a;

}