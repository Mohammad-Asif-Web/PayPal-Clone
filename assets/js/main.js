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


// navBar section effect
const dropDownItems = document.querySelectorAll('.dropdown-hover');
const navWrapper = document.querySelector('.navbar-wrapper');

if(window.innerWidth < 1000){
    const menuIcon = document.querySelector('.menu')
    const navBar = document.querySelector('.navbar')

    menuIcon.addEventListener('click',()=>{
        navBar.classList.toggle('change')

        if(!navBar.classList.contains('change')){
            document.querySelectorAll('.nav-dropdown').forEach(dropDown =>{
                dropDown.style.left = '-20rem'
            })
        }
    })

    document.querySelectorAll('.show-dropdown').forEach(link =>{
        link.addEventListener('click', ()=>{
            link.nextElementSibling.style.left = '0'
        })
    })

    document.querySelectorAll('.dropdown-heading-link').forEach(headingLink =>{
        headingLink.addEventListener('click', ()=>{
            headingLink.parentElement.parentElement.style.left = '-20rem'
        })
    })
} else{
    // hover in Effect
    dropDownItems.forEach(item =>{
    item.addEventListener('mouseover', ()=>{
        item.lastElementChild.style = 'opacity: 1; visibility: visible'
        navWrapper.style.background = 'linear-gradient(to right, #066399, #2f8fdf, #066399)'
        item.firstElementChild.firstElementChild.style.transform = 'rotate(180deg)'
    })
})
// hover out effect
    dropDownItems.forEach(item =>{
    item.addEventListener('mouseout', ()=>{
        item.lastElementChild.style = 'opacity: 0, visibility: hidden'
        navWrapper.style.background = 'none'
        item.firstElementChild.firstElementChild.style.transform = 'rotate(0)'
    })
}) 
}

// window resize effect
window.addEventListener('resize', ()=>{
    window.location.reload()
})



