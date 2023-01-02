const playerhp = document.getElementById("hp");
const maxhp = document.getElementById("maxhp");
const attack = document.getElementById("attack");
const enemyhp = document.getElementById("enemyhp");
const text = document.getElementById("text");
const enemy = document.getElementById("enemy");


let penizecount = parseInt(localStorage.getItem("money"))|| 0 ;
let hpcount = parseInt(localStorage.getItem("zivoty")) ;
let dmgcount = parseInt(localStorage.getItem("damage"))|| 1;
let ryby = parseInt(localStorage.getItem("ryba"))|| 0 ;
let sharkcount = parseInt(localStorage.getItem("sharkcount1"))|| 0;
let enemyhpcount = 10+30*sharkcount;


parseInt(localStorage.setItem("money", penizecount));
parseInt(localStorage.setItem("zivoty", hpcount));
parseInt(localStorage.setItem("damage", dmgcount));
parseInt(localStorage.setItem("ryba", ryby));
parseInt(localStorage.setItem("sharkcount1", sharkcount));

penize.innerHTML = `${penizecount}$`;
hp.innerHTML = `HP:${hpcount}`;
maxhp.innerHTML = `HP:${hpcount}`;
dmg.innerHTML = `${dmgcount}dmg`;

attack.onmousedown = () => {
  if (hpcount > 0 && enemyhpcount > 0);
  enemyhpcount -= dmgcount;
  player.style.left = "800px";
  enemyhp.innerHTML = `HP: ${enemyhpcount}`;
};
if (enemyhpcount <= 0) {
  ryby += 1;
  ryby.setInterval("ryby", ryby);
}
attack.onmouseup = () => {
  player.style.left = "300px";
};

const enemyAttackInterval = setInterval(() => {
  hpcount -= 3+8*sharkcount;

  playerhp.innerHTML = `HP: ${hpcount}`;
  if (hpcount <= 0) {
    clearInterval(enemyAttackInterval);
    text.innerHTML = "musel jsi utéct";
    x.style.display = "block";
    player.style.display = "none";
    attack.style.display = "none";
  }
  if (enemyhpcount <= 0) {
    text.innerHTML = "ulovil jsi rybu";
    x.style.display = "block";
    clearInterval(enemyAttackInterval);
    ryby += 1;
    sharkcount +=1;
    parseInt(localStorage.setItem("sharkcount1", sharkcount));
    parseInt(localStorage.setItem("ryba", ryby));
    enemy.style.display = "none";
    enemyhp.style.display = "none";
    attack.style.display = "none";
  }
}, 1000);
