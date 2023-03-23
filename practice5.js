const test   = document.getElementsByClassName('test')[0];
const test2 = document.getElementsByClassName('test2')[0];
const defaultColor = test2.style.backgroundColor;
test.addEventListener('mouseenter', function() {
  test2.style.backgroundColor = 'red';
}, false);
test.addEventListener('mouseleave', function() {
  test2.style.backgroundColor = defaultColor;
}, false);

test2.addEventListener('mouseenter', function() {
    test.style.backgroundColor = 'red';
  }, false);
  test2.addEventListener('mouseleave', function() {
    test.style.backgroundColor = defaultColor;
  }, false);