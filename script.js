//  Dom Selection
// document.getElementById() -> element

// (1):

// const judul = document.getElementById('judul');

// judul.style.color = 'red';
// judul.style.backgroundColor = '#ccc';
// judul.innerHTML = 'Muhamad Husin';

// // document.getElementsByTagName() -> HTMLcollections
// const p = document.getElementsByTagName('p');

// for( let i = 0; i < p.length; i++ ) {
//    p[i].style.backgroundColor = 'lightblue';
// }

// const h1 = document.getElementsByTagName('h1')[0];
// h1.style.fontSize = '50px';

// // document.getElementsByClassName() -> HTMLCollection
// const p1 = document.getElementsByClassName('p1')[0];
// p1.innerHTML = 'Ini di ubah dari JavaScript';


// (2):

// document.querySelector() -> element;
// const p4 = document.querySelector('#b p')
//  p4.style.color = 'orange';
//  p4.style.fontSize = '30px';

// const li2 = document.querySelector('section#b ul li:nth-child(2)');
//  li2.style.backgroundColor = 'blue';

// // const p = document.querySelector('p');
// //  p.innerHTML = 'ini di ubah dengan javascrip';

// // document.querySelectorAll() -> NodeList ;
// const p = document.querySelectorAll('p');
// for( let i = 0; i < p.length; i++ ) {
//    p[i].style.backgroundColor = 'lightblue';
// }
  
// (3)

// const sectionB = document.querySelector('section#b');
// const p4 = sectionB.getElementsByTagName('p')[0];
//  p4.style.backgroundColor = 'orange';

// (4)

// const judul = document.getElementById('judul');
// judul.innerHTML = '<b>Husin</b>';

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = 'Husin';



// (5)

// const judul = document.querySelector('#judul');
// judul.style.color = 'lightblue';
// judul.style.backgroundColor = 'salmon';


// (6)

// const judul = document.getElementsByTagName('h1')[0];
// const a = document.querySelector('section#a a');

// (7)

const p2 = document.querySelector('.p2');
p2.setAttribute('class','label');
