const $btnSignIn = document.querySelector(".sign-in-btn"),
      $btnSignUp = document.querySelector(".sign-up-btn"),
      $signUp = document.querySelector(".sign-up"),
      $signIn= document.querySelector(".sign-in");
const username= document.getElementById("username");
const password= document.getElementById("password");
const button = document.getElementById("button");

button.addEventListener("click", (e)=>{
    e.preventDefault()
    const data ={
        username: username.value,
        password: password.value
    }
    console.log(data)
})
document.addEventListener("click", e =>{
    if (e.target === $btnSignIn || e.target === $btnSignUp){
        $signIn.classList.toggle("active");
        $signUp.classList.toggle("active")
    }

})
