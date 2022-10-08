import './style.css';
import './app/components/main/cardImages.js';
import { initPLaces } from './app/components/main/cardImages.js';
import { setupPLaces } from './app/components/main/place.js';
initPLaces();
setupPLaces();
// import { setupCounter } from './counter.js'

container.appenchild(printPLaces)


// setupCounter(document.querySelector('#counter'))

// const left = document.querySelector('.left')
// const right = document.querySelector('.right')
// const container = document.querySelector('.container')

// left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
// left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))

// right.addEventListener('mouseenter', () => container.classList.add('hover-right'))
// right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))