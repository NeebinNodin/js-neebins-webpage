//ex01
//const mainContentSection = document.querySelector('h2')
//mainContentSection.style.color = 'red' 

//ex02
//const link = document.querySelector('#fork')
//link.style.textDecoration = 'underline'
///////////////////////////////////////////////////////////
//onst aboutA = document.querySelector('#about')
//aboutA.style.color = 'green'
/////////////////////////////////////////////////////////////
/* 
const section = document.querySelector('section')

const active = section.querySelector('.active')
active.style.color = 'blue'

const p = section.querySelector('p')

const span = section.querySelector('span')
*/
//////////////////////////////////////////////////////////////////
//const activeElements = document.querySelectorAll('.active')

// add bordor
//activeElements.forEach(el => el.style.border = '1px solid red')

//for (let i = 0; i < activeElements.length; i++){
//    activeElements[i].style.border = '1px solid red'
//}
//////////////////////////////////////////////////////////////////
document.body.style.background  = 'lightgrey'
document.title = "Neebin's Website"

const contact = document.querySelector('#contact')

contact.addEventListener('mouseover', () => {
    contact.parentElement.style.backgroundColor = 'lightblue'
    //contact.closest('nav').style.backgroundColor = 'lightblue'
})
contact.addEventListener('mouseleave', () => {
    contact.parentElement.style.backgroundColor = ''
    //contact.closest('nav').style.backgroundColor = ''
})