const penize = document.getElementById("penize");
const hp = document.getElementById("maxhp");
const dmg = document.getElementById("dmg");
const cook1 = document.getElementById("cook1");
const cook2 = document.getElementById("cook2");
const cook3 = document.getElementById("cook3");
const cook35 = document.getElementById("cook3,5");
const cook4 = document.getElementById("cook4");
const cook5 = document.getElementById("cook5");
const cook6 = document.getElementById("cook6");
const cook7 = document.getElementById("cook7");
const cook8 = document.getElementById("cook8");
const cook9 = document.getElementById("cook9");
const cook10 = document.getElementById("cook10");
const cook11 = document.getElementById("cook11");
const cook12 = document.getElementById("cook12");
const vavrik = document.getElementById("vavrik");
0;
const repeat = document.getElementById("repeat");

let penizecount = parseInt(localStorage.getItem("money")) || 0;
let hpcount = parseInt(localStorage.getItem("zivoty")) || 10;
let dmgcount = parseInt(localStorage.getItem("damage")) || 1;
let ryby = parseInt(localStorage.getItem("ryba")) || 0;
let doneryby = parseInt(localStorage.getItem("doneryba")) || 0;
let sharkcount = parseInt(localStorage.getItem("sharkcount1")) || 0;

parseInt(localStorage.setItem("money", penizecount));
parseInt(localStorage.setItem("zivoty", hpcount));
parseInt(localStorage.setItem("damage", dmgcount));
parseInt(localStorage.setItem("ryba", ryby));
parseInt(localStorage.setItem("doneryba", doneryby));
parseInt(localStorage.setItem("sharkcount1", sharkcount));

penize.innerHTML = `${penizecount}$`;
hp.innerHTML = `HP:${hpcount}`;
dmg.innerHTML = `${dmgcount}dmg`;

cook1.onclick = function () {
  if (ryby >= 1) {
    vavrik.src = "./rep/img/vavrik2.png";
    cook1.style.display = "none";
    cook2.style.display = "block";
    cook3.style.display = "none";
    cook4.style.display = "none";
    cook5.style.display = "none";
    cook6.style.display = "none";
    cook7.style.display = "none";
    ryby -= 1;
    parseInt(localStorage.setItem("ryba", ryby));
    music.play();
    music.volume = 0.3;
  } else {
    text1.style.display = "block";
    text1.innerHTML = "musíš nejdřív ulovit rybu";
  }
};
cook2.onclick = function () {
  vavrik.src = "./rep/img/vavrik3.png";
  cook1.style.display = "none";
  cook2.style.display = "none";
  cook3.style.display = "block";
};
cook3.onclick = function () {
  vavrik.src = "./rep/img/vavrik3,5.png";
  cook1.style.display = "none";
  cook2.style.display = "none";
  cook3.style.display = "none";
  cook35.style.display = "block";
};
cook35.onclick = function () {
  vavrik.src = "./rep/img/vavrik3.png";
  cook1.style.display = "none";
  cook2.style.display = "none";
  cook3.style.display = "none";
  cook35.style.display = "none";
  cook4.style.display = "block";
};
cook4.onclick = function () {
  vavrik.src = "./rep/img/vavrik3,5.png";
  cook1.style.display = "none";
  cook2.style.display = "none";
  cook3.style.display = "none";
  cook35.style.display = "none";
  cook4.style.display = "none";
  cook5.style.display = "block";
};
cook5.onclick = function () {
  vavrik.src = "./rep/img/vavrik3.png";
  cook1.style.display = "none";
  cook2.style.display = "none";
  cook3.style.display = "none";
  cook35.style.display = "none";
  cook4.style.display = "none";
  cook5.style.display = "none";
  cook6.style.display = "block";
};
cook6.onclick = function () {
  vavrik.src = "./rep/img/vavrik4.png";
  cook1.style.display = "none";
  cook2.style.display = "none";
  cook3.style.display = "none";
  cook35.style.display = "none";
  cook4.style.display = "none";
  cook5.style.display = "none";
  cook6.style.display = "none";
  cook7.style.display = "block";
};
cook7.onclick = function () {
  vavrik.src = "./rep/img/vavrik5.png";
  cook1.style.display = "none";
  cook2.style.display = "none";
  cook3.style.display = "none";
  cook35.style.display = "none";
  cook4.style.display = "none";
  cook5.style.display = "none";
  cook6.style.display = "none";
  cook7.style.display = "none";
  cook8.style.display = "block";
};
cook8.onclick = function () {
  vavrik.src = "./rep/img/vavrik6.png";
  cook1.style.display = "none";
  cook2.style.display = "none";
  cook3.style.display = "none";
  cook35.style.display = "none";
  cook4.style.display = "none";
  cook5.style.display = "none";
  cook6.style.display = "none";
  cook7.style.display = "none";
  cook8.style.display = "none";
  cook9.style.display = "block";
};
cook9.onclick = function () {
  vavrik.src = "./rep/img/vavrik6,5.png";
  cook1.style.display = "none";
  cook2.style.display = "none";
  cook3.style.display = "none";
  cook35.style.display = "none";
  cook4.style.display = "none";
  cook5.style.display = "none";
  cook6.style.display = "none";
  cook7.style.display = "none";
  cook8.style.display = "none";
  cook9.style.display = "none";
  cook10.style.display = "block";
};
cook10.onclick = function () {
  vavrik.src = "./rep/img/vavrik7,5.png";
  cook1.style.display = "none";
  cook2.style.display = "none";
  cook3.style.display = "none";
  cook35.style.display = "none";
  cook4.style.display = "none";
  cook5.style.display = "none";
  cook6.style.display = "none";
  cook7.style.display = "none";
  cook8.style.display = "none";
  cook9.style.display = "none";
  cook10.style.display = "none";
  cook11.style.display = "block";
};
cook11.onclick = function () {
  vavrik.src = "./rep/img/vavrik6,5.png";
  cook1.style.display = "none";
  cook2.style.display = "none";
  cook3.style.display = "none";
  cook35.style.display = "none";
  cook4.style.display = "none";
  cook5.style.display = "none";
  cook6.style.display = "none";
  cook7.style.display = "none";
  cook8.style.display = "none";
  cook9.style.display = "none";
  cook10.style.display = "none";
  cook11.style.display = "none";
  cook12.style.display = "block";
};
cook12.onclick = function () {
  vavrik.src = "./rep/img/vavrik7.png";
  cook1.style.display = "none";
  cook2.style.display = "none";
  cook3.style.display = "none";
  cook35.style.display = "none";
  cook4.style.display = "none";
  cook5.style.display = "none";
  cook6.style.display = "none";
  cook7.style.display = "none";
  cook8.style.display = "none";
  cook9.style.display = "none";
  cook10.style.display = "none";
  cook11.style.display = "none";
  cook12.style.display = "none";
  repeat.style.display = "block";
  text1.style.display = "block";
  text1.innerHTML = "uvařil jsi lososa tak jak to máš rád ";
  doneryby += 1;
  parseInt(localStorage.setItem("doneryba", doneryby));
};
repeat.onclick = function () {
  vavrik.src = "./rep/img/vavrik.png";
  cook1.style.display = "block";
  repeat.style.display = "none";
  text1.style.display = "none";
};
