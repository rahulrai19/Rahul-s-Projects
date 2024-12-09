// var
// let
// const
var a=10;
var b=12;
var c;
document.write(a+b);
// let element = document.getElementById('myId');
// let elements = document.getElementsByClassName('myClass');
// let elements = document.querySelectorAll('.myClass');
// let element = document.querySelector('#myId');
// let element = document.querySelector('.myClass');
  // Target by ID
//   let header = document.getElementById('header');
//   header.style.color = 'blue';
//   let header1 = document.getElementById('header1');
//   header1.style.color = 'red';

  // Target by Class
  let paragraphs = document.getElementsByClassName('text');
  for (let i = 0; i < paragraphs.length; i++) {
      paragraphs[i].style.color = 'green';
  }
  let header = document.getElementsByClassName('header');
  for (let i = 0; i < header.length; i++) {
    header[i].style.color = 'blue';
  }
//   document.write(c+typeof(a));
document.write("<br>");
document.write(a-b);

