// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText = h2.innerText + " from tutorials"

// let divs = document.querySelectorAll(".box");
// // divs[0].innerText = "new value 1";
// // divs[1].innerText = "new value 2";
// // divs[2].innerText = "new value 3";

// let idx = 1;
// for (div of divs) {
//     div.innerText = `new value ${idx}` ;
//     idx++;
// }


//  creating a button element with the text "Click Me," 
// a red background, and white text, and  inserting  it as the first element inside the body tag using javascript

let button = document.createElement("button");
button.textContent = "click me";

button.style.backgroundColor = 'red';
button.style.color = 'white';

document.querySelector("body").prepend(button);


