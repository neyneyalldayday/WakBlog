const blogContainer = document.querySelector(".blog-container")
let blogCard = ""
const blogData = JSON.parse(localStorage.getItem("blogObject")) || []
 
blogData.forEach((blog) => {
    blogCard += `
    <div class="blog-card">
        <h2 class="render-title">${blog.blogTitle}</h2>
        <p class="render-content">${blog.blogContent}</p>
        <h2 class="render-user">${blog.userName}</h2>
    </div>
    `;

    blogContainer.innerHTML = blogCard;
})


document.querySelector(".back-home").addEventListener("click", (event) => {
    event.preventDefault();
    window.location.href = "index.html";
})