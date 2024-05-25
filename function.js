import { getDatabase, ref, set } from 'https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js';

const db = getDatabase();

var btn1 = document.querySelector('#btn1');
var img1 = document.querySelector('#call');
var btn2 = document.querySelector('#btn2');

btn1.addEventListener('click', () => {
    img1.src='/assets/img/callOn.gif';
    set(ref(db, 'Device1'), {Phone: true})
})
btn2.addEventListener('click', () => {
    img1.src='assets/img/call1.png';
    set(ref(db, 'Device1'), {Phone: false})
})


var btn3 = document.querySelector('#btn3');
var img2 = document.querySelector('#den');
var btn4 = document.querySelector('#btn4');

btn3.addEventListener('click', () => {
    img2.src='/assets/img/denOn.gif';
    set(ref(db, 'Device2'), {Light: true})
})
btn4.addEventListener('click', () => {
    img2.src='assets/img/den1.png';
    set(ref(db, 'Device2'), {Light: false})
})


var btn5 = document.querySelector('#btn5');
var img3 = document.querySelector('#dieuhoa');
var btn6 = document.querySelector('#btn6');

btn5.addEventListener('click', () => {
    img3.src='/assets/img/air-flow.gif';
    set(ref(db, 'Device3'), {AirCondition: true})
})
btn6.addEventListener('click', () => {
    img3.src='assets/img/air1.png';
    set(ref(db, 'Device3'), {AirCondition: false})
})


var btn7 = document.querySelector('#btn7');
var img4 = document.querySelector('#loa');
var btn8 = document.querySelector('#btn8');

btn7.addEventListener('click', () => {
    img4.src='/assets/img/loaOn.gif';
    set(ref(db, 'Device4'), {Speaker: true})
})
btn8.addEventListener('click', () => {
    img4.src='assets/img/loa1.png';
    set(ref(db, 'Device4'), {Speaker: false})
})