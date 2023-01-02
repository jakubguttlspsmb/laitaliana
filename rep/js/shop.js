const penize = document.getElementById("penize");
const hp = document.getElementById("maxhp");
const dmg = document.getElementById("dmg");
const hat = document.getElementById("hat");
const sellfish = document.getElementById("sellfish");
const panev = document.getElementById("panev");

let penizecount = parseInt(localStorage.getItem("money"))|| 0 ;
let hpcount = parseInt(localStorage.getItem("zivoty"))|| 10 ;
let dmgcount = parseInt(localStorage.getItem("damage"))|| 1;
let ryby = parseInt(localStorage.getItem("ryba"))|| 0 ;
let doneryby = parseInt(localStorage.getItem("doneryba"))|| 0 ;
let sharkcount = parseInt(localStorage.getItem("sharkcount1"))|| 0;


penize.innerHTML = `${penizecount}$`;
hp.innerHTML = `HP:${hpcount}`;
dmg.innerHTML = `${dmgcount}dmg`;

sellfish.onclick = () => {
  if (doneryby >= 1) {
    penizecount += 40 + 10 * sharkcount;
    doneryby -= 1;
    penize.innerHTML = `${penizecount}$`;
    parseInt(localStorage.setItem("money", penizecount));
    parseInt(localStorage.setItem("doneryba", doneryby));
    text2.innerHTML = `prodal jsi lososa za${40 + 5 * sharkcount}$`;
  } else {
    text2.innerHTML = "už nemáš žádného upečéného lososa";
  }
};

hat.onclick = () => {
  if (penizecount >= 20 + 5 * sharkcount) {
    penizecount -= 20 + 5 * sharkcount;
    hpcount += 5 + 3 * sharkcount;
    penize.innerHTML = `${penizecount}$`;
    hp.innerHTML = `HP:${hpcount}`;
    parseInt(localStorage.setItem("money", penizecount));
    parseInt(localStorage.setItem("zivoty", hpcount));
  }
};
panev.onclick = () => {
    if (penizecount >= 20 + 5 * sharkcount) {
      penizecount -= 20 + 5 * sharkcount;
      dmgcount += 5 + 1 * sharkcount;
      penize.innerHTML = `${penizecount}$`;
      dmg.innerHTML = `${dmgcount}dmg`;
      parseInt(localStorage.setItem("money", penizecount));
      parseInt(localStorage.setItem("damage", dmgcount));
    }
  };