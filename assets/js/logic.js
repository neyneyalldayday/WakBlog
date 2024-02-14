const blogForm = document.querySelector("#blog-form");
const submitButton = document.querySelector("#submit-button")


blogForm.addEventListener("submit", (event) =>{
  event.preventDefault()
  const blogTitle = document.querySelector("#blog-title").value.trim()
  const blogContent = document.querySelector("#blog-content").value.trim()
  const userName = document.querySelector("#username").value.trim();
  
  const blogObject = JSON.parse(localStorage.getItem("blogObject")) || [];

  const blogPayload = {
    blogTitle: blogTitle,
    blogContent : blogContent,
    userName : userName
  }

  blogObject.push(blogPayload)

  localStorage.setItem("blogObject", JSON.stringify(blogObject))
  console.log("click")

  window.location.href = "blog.html";
})

