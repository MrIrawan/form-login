const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");
const submitButton = document.querySelector("button");

submitButton.addEventListener("click", (e) => {
    if ( inputEmail.value === "admin@dicoding.com" && inputPassword.value === "superpassword" ) {
        alert("Login Berhasil");
    } else {
        alert("Login Gagal");
    }
});