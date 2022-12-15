// // // setTimeout(() => {
// // //   console.log(0);
// // // }, 0);
// // // setTimeout(() => {
// // //   console.log(1);
// // // }, 1000);
// // // setTimeout(() => {
// // //   console.log(2);
// // // }, 2000);
// // // setTimeout(() => {
// // //   console.log(3);
// // // }, 3000);

// // // console.log("a");
// // // console.log("b");
// // // console.log("c");

// const interval = setInterval(() => {
//   console.log("123");
// }, 1000);

// console.log(interval);

const btn = document.querySelector("button");
const interval = setInterval(() => {
  console.log("123");
}, 1000);
console.log(interval);

btn.addEventListener("click", () => {
  clearInterval(interval);
});

// // // setTimeout(() => {
// // //   clearInterval(interval);
// // // }, 5000);

// // const box = document.getElementsByClassName("box");

// // let positionX = 440;
// // let positionY = 0;

// // const move = () => {
// //   if (positionX <= 440) {
// //     positionX += 16;
// //     box[0].style.left = `${positionX}px`;
// //     setTimeout(move, 100);
// //     // move();
// //   } else if (positionX >= 440 && positionY <= 440) {
// //     positionY += 16;
// //     box[0].style.top = `${positionY}px`;
// //     setTimeout(move, 100);
// //     // move();
// //   }
// // };

// // move();
// // setTimeout(() => {
// //   console.log("3");
// // }, 1000);

// // setTimeout(() => {
// //   console.log("1");
// // }, 1000);
// // //
// // setTimeout(() => {
// //   console.log("2");
// // }, 1000);

// // const doHomework = (car, subject = "javascript") => {
// //   alert(`starting my ${subject} homework`);
// //   car();
// // };

// // const alertFinished = () => {
// //   alert("DONE!!!!");
// // };

// // doHomework(alertFinished, "math");

// // const arr = ["Май", "Июнь", 3, 4, 5, 6, 3, 34, 5, 6, 7];

// // // arr.map((item) => {
// // //   console.log(item);
// // // });

// // // console.log(arr);

// // arr.map((item) => {
// //   const block = document.createElement("div");
// //   block.style.width = "50px";
// //   block.style.height = "50px";
// //   block.style.backgroundColor = "green";
// //   block.innerHTML = item;
// //   const wrapper = document.querySelector(".wrapper");

// //   wrapper.append(block);
// // });

// // const fruits = ["apple", "banana", "watermelon", "peach"];

// // const result = fruits.filter((item) => {
// //   return item.length > 5;
// // });

// // console.log(result);

// const arr = [5, 4, 86, 23];

// const newArr = [];

// const result = arr.reduce((prev, curr) => {
//   const item = curr + 10;
//   return newArr.push(item);
// }, newArr);

// console.log(newArr);
// console.log(arr);
