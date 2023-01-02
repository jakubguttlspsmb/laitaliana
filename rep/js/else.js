const penize = document.getElementById("penize");
const hp = document.getElementById("maxhp");
const dmg = document.getElementById("dmg");

let penizecount = parseInt(localStorage.getItem("money"))|| 0 ;
let hpcount = parseInt(localStorage.getItem("zivoty"))|| 10 ;
let dmgcount = parseInt(localStorage.getItem("damage"))|| 1;
let ryby = parseInt(localStorage.getItem("ryba"))|| 0 ;
let doneryby = parseInt(localStorage.getItem("doneryba"))|| 0 ;
let sharkcount = parseInt(localStorage.getItem("sharkcount1"))|| 0;

parseInt(localStorage.setItem("money", penizecount));
parseInt(localStorage.setItem("zivoty", hpcount));
parseInt(localStorage.setItem("damage", dmgcount));
parseInt(localStorage.setItem("ryba", ryby));
parseInt(localStorage.setItem("doneryba", doneryby));
parseInt(localStorage.setItem("sharkcount1", sharkcount));


penize.innerHTML = `${penizecount}$`;
hp.innerHTML = `HP:${hpcount}`;
dmg.innerHTML = `${dmgcount}dmg`;