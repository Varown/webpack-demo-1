import "./z.styl";
import "./x.less";
import png from "./assets/1.png";
console.log(png);

const div = document.getElementById("add");

div.innerHTML = `<img src="${png}">`;
