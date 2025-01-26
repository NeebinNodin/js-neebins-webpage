/* const mainContentSection = document.querySelector('h2')
mainContentSection.style.color = 'red' 
const link = document.querySelector('#fork')
link.style.textDecoration = 'underline'*/
/* const section = document.querySelector('section')

const active = section.querySelector('section .active')
active.style.color = 'blue'

const p = section.querySelector('p')

const span = section.querySelector('span') */
//const activeElements = document.querySelectorAll('.active')

// add bordor
//activeElements.forEach(el => el.style.border = '1px solid red')

//for (let i = 0; i < activeElements.length; i++){
//    activeElements[i].style.border = '1px solid red'
//}

document.body.style.background  = 'lightgrey'
document.title = "Neebin's Website"

const contact = document.querySelector('#contact')
contact.addEventListener('mouseover', () => {
    contact.closest('nav').style.backgroundColor = 'lightblue'
})