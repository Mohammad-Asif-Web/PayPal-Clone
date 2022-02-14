// navBar section effect
const dropDownItems = document.querySelectorAll('.dropdown-hover');
const navBar = document.querySelector('.navbar-wrapper');
// hover in Effect
dropDownItems.forEach(item =>{
    item.addEventListener('mouseover', ()=>{
        item.lastElementChild.style = 'opacity: 1; visibility: visible'
        navBar.style.background = 'linear-gradient(to right, #066399, #2f8fdf, #066399)'
    })
})
// hover out effect
dropDownItems.forEach(item =>{
    item.addEventListener('mouseout', ()=>{
        item.lastElementChild.style = 'opacity: 0, visibility: hidden'
        navBar.style.background = 'none'
    })
}) 


// Entering page section effect
const logos = document.querySelectorAll('.logo');
const login = document.querySelectorAll('.login')
const signup = document.querySelectorAll('.signup')
const frontPage = document.querySelector('.front-page')
const loginPage = document.querySelector('.login-page')
const signupPage = document.querySelector('.signup-page')

logos.forEach(logo =>{
    logo.addEventListener('click', ()=>{
        frontPage.style.display = 'block'
        loginPage.style.display = 'none'
        signupPage.style.display = 'none'
    })
})
login.forEach(loginBtn =>{
    loginBtn.addEventListener('click', ()=>{
        frontPage.style.display = 'none'
        loginPage.style.display = 'block'
        signupPage.style.display = 'none'
    })
})
signup.forEach(signupBtn =>{
    signupBtn.addEventListener('click', ()=>{
        frontPage.style.display = 'none'
        loginPage.style.display = 'none'
        signupPage.style.display = 'flex'
    })
})
