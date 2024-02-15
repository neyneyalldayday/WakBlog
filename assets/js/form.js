const blogForm = document.querySelector("#blog-form");
const submitButton = document.querySelector("#submit-button");

document.addEventListener('DOMContentLoaded', function(event) {
    event.preventDefault()
    const errorModal = document.querySelector('.error-modal');
    errorModal.innerHTML = '';
    errorModal.style.display = 'none';
  });

  blogForm.addEventListener("submit", (event) =>{
    event.preventDefault()
    const blogTitle = document.querySelector("#blog-title").value.trim()
    const blogContent = document.querySelector("#blog-content").value.trim()
    const userName = document.querySelector("#username").value.trim();
  
    if(blogTitle === '' && blogContent === '' && userName === ''){
  
       const errorModal = document.querySelector(".error-modal")
       let modalCard = `
         <div class='alert-card'>
            <h3>Alert !</h3>
            <p>hey man fill out the form fool!!!!</p>
            <button id="error-reload">Go Back</button>
         </div>     
       `;
       errorModal.innerHTML = modalCard;
       errorModal.style.display = 'block'; 
       const errBtn = document.querySelector("#error-reload")
       errBtn.addEventListener("click", (event) => {
        event.preventDefault()
        document.location.reload()     
       });
  
    } else {
      const blogObject = JSON.parse(localStorage.getItem("blogObject")) || [];
  
      const blogPayload = {
        blogTitle: blogTitle,
        blogContent : blogContent,
        userName : userName
      }
    
      blogObject.push(blogPayload)
    
      localStorage.setItem("blogObject", JSON.stringify(blogObject))
      window.location.href = "blog.html";
    }
  
  });

  document.addEventListener('click', function(event) {
    if (event.target.id === 'error-reload') {
        const errorModal = document.querySelector('.error-modal');
        errorModal.innerHTML = '';
        errorModal.style.display = 'none'; // Hide the modal container
    }
  }, false);