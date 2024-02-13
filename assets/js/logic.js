const blogForm = document.querySelector("#blog-form");
const submitButton = document.querySelector("#submit-button")


blogForm.addEventListener("submit", (event) =>{
  event.preventDefault()
  console.log("click")
})

