// btn
document.getElementById('btn_white').onclick = function() { document.getElementById('btn_black').style.display = 'flex';
document.getElementById('cat_on').style.display = 'block';
document.getElementById('cat_on').style.animation = `aniCat 1s ease-in 1 forwards`;
 }

document.getElementById('btn_black').onclick = function() {
document.getElementById('btn_black').style.display = 'none'
document.getElementById('cat_on').style.animation = `opacityCat 1s ease-in 1 forwards`
}
