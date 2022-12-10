// // const string = prompt("Tell me your name!!!");

// // const regExp = /a/i;

// // const regExp = new RegExp("y", "i");

// // console.log(string.match(regExp));

// // const letter = "AaaBbbCccDddCcccCC";

// // // console.log(letter.split(""));

// // const regExp = /a/gi;

// // console.log(letter.match(regExp));

// // const letter = "12a3d56g78j90k4f98d7h65";

// // // const regExp = /\w/g;

// // const regExp = /[A-Z0-9]/gi;

// // console.log(letter.replace(regExp, "*"));

// const phoneInput = document.querySelector(".phoneInput");
// const phoneCheck = document.querySelector(".phoneCheck");
// const phoneResult = document.querySelector(".phoneResult");

// // console.log(phoneCheck, phoneInput, phoneResult);

// const regExp = /^\+996 [5|7|9]\d{2} \d{2}-\d{2}-\d{2}$/;
// // @
// phoneCheck.addEventListener("click", () => {
//   if (regExp.test(phoneInput.value)) {
//     phoneResult.innerText = "ok";
//     phoneResult.style.color = "green";
//   } else {
//     phoneResult.innerText = "not ok";
//     phoneResult.style.color = "red";
//   }
// });

// // if (!0) {
// //   console.log("true");
// // } else {
// //   console.log("false");
// // }

// // num str obj NaN null undef arr boolean

// let num = 0;

// const count = () => {
//   num++;
//   // num = num + 1
//   console.log(num);
//   if (num < 500) {
//     count();
//   }
// };

// count();

const people = {
  John: {
    age: 25,
    parents: {
      Kelly: {
        age: 50,
      },
      Tony: {
        age: 55,
        parents: {
          Din: {
            age: 80,
            parents: {
              Din: {
                age: 80,
                parents: {
                  Din: {
                    age: 80,
                    parents: {
                      Din: {
                        age: 80,
                        parents: {
                          Din: {
                            age: 80,
                            parents: {
                              Din: {
                                age: 80,
                                parents: {
                                  Din: {
                                    age: 80,
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  Sam: {
    age: 15,
    parents: {
      Jean: {
        age: 30,
      },
    },
  },
};

// console.log(people.Sam.parents);

const parentList = (obj) => {
  if (obj.parents) {
    for (let key in obj.parents) {
      console.log(key);
      parentList(obj.parents[key]);
    }
  } else {
    console.log("...oops");
  }
};

for (let key in people) {
  parentList(people[key]);
}
