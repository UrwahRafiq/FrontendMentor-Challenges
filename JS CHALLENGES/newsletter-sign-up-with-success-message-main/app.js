let form = document.querySelector("#form");
let email = document.querySelector("#email");
let formPage = document.querySelector("#page1");
let successPage = document.querySelector("#success-page");
let dismissBtn = document.querySelector("#dismiss-btn");
let errorMsg = document.querySelector(".error-msg");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("clicked!");
    formValidation();
});

let formValidation = () => {
    if (email.checkValidity()) {
        console.log("correct email: " + email.value);
        formPage.classList.toggle("show");
        successPage.classList.toggle("show");
        email.value = "";
    }
    else {
        console.log("incorrect email");
        email.classList.add("error");
        errorMsg.textContent = "Valid email required";
        errorMsg.classList.add("error");
    }
}

email.addEventListener("click", () => {
    email.classList.remove("error");
    errorMsg.classList.remove("error");
    errorMsg.textContent = "";
} );

dismissBtn.addEventListener("click", () => {
    successPage.classList.toggle("show");
    formPage.classList.toggle("show");
});