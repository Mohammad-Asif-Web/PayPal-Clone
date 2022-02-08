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