const nameNode = document.querySelector("input");
const btnSave = document.querySelector(".btn1");
const btnRemove = document.querySelector(".btn2");
const form = document.querySelector("form");
const label = document.querySelector("label");
const span = document.querySelector(".span");

const arrOfName = [];
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

btnSave.addEventListener("click", () => {
  const nameValue = nameNode.value;
  arrOfName.push(nameValue);
  localStorage.setItem("name", JSON.stringify(arrOfName));
  form.reset();
  const localStorageName = localStorage.getItem("name");

  console.log(localStorageName);

  let text = "";

  arrOfName.forEach((name) => {
    text += " " + name;
    label.innerText = text;
    // console.log(text);
  });
});
btnRemove.addEventListener("click", () => {
  arrOfName.pop();
  localStorage.setItem("name", JSON.stringify(arrOfName));
  const localStorageName = localStorage.getItem("name");
  console.log(JSON.parse(localStorageName));
  const names = JSON.parse(localStorageName);
  text = "";
  if (names.length > 0) {
    names.forEach((name) => {
      text += " " + name;
      label.innerText = text;
    });
  } else {
    label.innerText = "Inserisci il tuo nome...";
  }
});

window.addEventListener("DOMContentLoaded", () => {
  const localStorageName = localStorage.getItem("name");
  console.log("ciao");
  if (localStorageName) {
    console.log(JSON.parse(localStorageName));
    let text = "";
    JSON.parse(localStorageName).forEach((ele) => {
      text += " " + ele;
      label.innerText = text;
    });
  }
});


let i =
 setInterval(() => {
  sessionStorage.setItem("i", i);
  const time = sessionStorage.getItem("i");

  i++;
  console.log(i);
  span.innerText = i;
}, 1000);

window.addEventListener("DOMContentLoaded", () => {
    const time = sessionStorage.getItem("i");
    i = time;
    span.innerText = time
})