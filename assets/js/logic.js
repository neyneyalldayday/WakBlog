const themeToggleButton = document.querySelector("#theme-toggle");

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

