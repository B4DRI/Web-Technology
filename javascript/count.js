var number1 = 10;
var number2 = 20;

var myNumber1 = '3';
var myNumber2 = '4';

var count1 = number1 + number2;
var count2 = myNumber1 + myNumber2;

var el = document.getElementById('one');
el.textContent = count1;

var el = document.getElementById('two');
el.textContent = count2;

var num = 47;
var address = 'Jalan Gombak';
var add = num + ' ' + address; //function

var el = document.getElementById('three');
el.textContent = add;

var num3 = 50;
var num4 = 100;
var multiply = num3 * num4;

var el = document.getElementById('four');
el.textContent = multiply;


/*
document.getElementById('four').textContent //have one var only

document.getAnimations

document.querySelector('.hot')[0].textContent;   // alternative for if else   //classname
document.querySelector('#one')[0].textContent;  //id
document.querySelector('h1')[0].textContent;   
*/

//a) byclassname
//document.getElementsByClassName('cool')[0].textContent = count2 + " using getElementsByClassName";

//b) by taggNAme
//document.getElementsByTagName('span')[1].textContent = count2 + " using tagName";

//c) by query selector
//document.querySelector('#two').textContent = count2 + " using query selector";

//d) query selector all
document.querySelectorAll('span')[1].textContent = count1 + " using query selector all";