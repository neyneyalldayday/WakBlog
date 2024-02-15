const blogContainer = document.querySelector(".blog-container")
const themeToggleButton = document.querySelector("#theme-toggle");
let blogCard = ""
const blogData = JSON.parse(localStorage.getItem("blogObject")) || []
 
blogData.forEach((blog) => {
    blogCard += `
    <div class="blog-card">
        <h2 class="render-title">Title: ${blog.blogTitle}</h2>
        <p class="render-content">${blog.blogContent}</p>
        <h2 class="render-user">User: ${blog.userName}</h2>
    </div>
    `;

    blogContainer.innerHTML = blogCard;
})


document.querySelector(".back-home").addEventListener("click", (event) => {
    event.preventDefault();
    window.location.href = "index.html";
})


themeToggleButton.addEventListener('click', function(event) {
    event.preventDefault()
   
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme); // Save the new theme to localStorage
  })
  
  const setTheme = (theme) =>{
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }
  
  const getTheme = () =>{
    return localStorage.getItem('theme') || 'light';
  }
  
  window.onload = () => {
    const savedTheme = getTheme()
    setTheme(savedTheme)
  }