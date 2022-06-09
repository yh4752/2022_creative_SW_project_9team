const clock = document.querySelector(".h1-clock");

function getTime() {
  const time = new Date();
  const hour = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  clock.innerHTML = `${hour < 10 ? `0${hour}` : hour}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
  setInterval(getTime, 1000);
}

init();

const hour = new Date().getHours();
console.log(typeof hour);

// 승차 리스트 (04시 ~ 21시)
let come_list = [
  "free",
  "free",
  "free",
  "normal",
  "busy",
  "busy",
  "free",
  "free",
  "normal",
  "normal",
  "busy",
  "busy",
  "busy",
  "busy",
  "busy",
  "busy",
  "normal",
  "normal",
  "normal",
  "free",
];

// 하차 리스트 (04시 ~ 21시)
let out_list = [
  "free",
  "free",
  "free",
  "normal",
  "busy",
  "busy",
  "busy",
  "busy",
  "busy",
  "busy",
  "normal",
  "normal",
  "normal",
  "normal",
  "busy",
  "busy",
  "normal",
  "free",
  "free",
  "free",
];

const come_state_div = document.querySelector(".come_state div");
const come_state = document.querySelector(".come_state div span");
console.log(come_list[hour - 4]);
if (come_list[hour - 4] === "free") {
  come_state.innerText = "여유";
  come_state_div.style.backgroundColor = "green";
} else if (come_list[hour - 4] === "normal") {
  come_state.innerText = "보통";
  come_state_div.style.backgroundColor = "yellow";
} else if (come_list[hour - 4] === "busy") {
  come_state.innerText = "혼잡";
  come_state_div.style.backgroundColor = "red";
} else {
  come_state.innerText = "끊김";
}

const out_state_div = document.querySelector(".out_state div");
const out_state = document.querySelector(".out_state div span");
console.log(out_list[hour - 4]);
out_state.innerText = out_list[hour - 4];
if (out_list[hour - 4] === "free") {
  out_state.innerText = "여유";
  out_state_div.style.backgroundColor = "green";
} else if (out_list[hour - 4] === "normal") {
  out_state.innerText = "보통";
  out_state_div.style.backgroundColor = "yellow";
} else if (out_list[hour - 4] === "busy") {
  out_state.innerText = "혼잡";
  out_state_div.style.backgroundColor = "red";
} else {
  out_state.innerText = "끊김";
}
