const test3 = document.getElementsByClassName('test3')[0];
const test4 = document.getElementsByClassName('test4')[0];

const img1 = document.querySelectorAll('#1');
const img2 = document.querySelectorAll('#2');

const defaultColor = test2.style.backgroundColor;
test3.addEventListener('mouseenter', function() {
  img1.style.border = 'red';
}, false);
test3.addEventListener('mouseleave', function() {
  test2.style.backgroundColor = defaultColor;
}, false);