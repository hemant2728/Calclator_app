
let display = document.getElementById('screen');
let string = '';
let buttons = document.querySelectorAll('button');  // saare button ek sath le liye...
let arr = Array.from(buttons)                       // saare buttuons kaa array bna liya...
arr.forEach(btn =>                                 // saare buttons ko variable bna k one by one le lenge..
{
  btn.addEventListener('click', function (event) {
    if (event.target.innerHTML == '=') {
      string = eval(string);      // eval use hota h string ko number m krne k liye..
      display.value = string;
    }
    else if (event.target.innerHTML == 'AC') {
      string = '';
      display.value = string;
    }
    else if (event.target.innerHTML == 'DEL') {
      string = string.substring(0, string.length - 1);
      display.value = string;
    }
    else {
      string += event.target.innerHTML;
      display.value = string;
    }
  })
})



