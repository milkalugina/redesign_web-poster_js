// btn
document.getElementById('btn_white').onclick = function() { document.getElementById('btn_black').style.display = 'flex';
document.getElementById('cat_on').style.display = 'block';
document.getElementById('cat_on').style.animation = `aniCat 1s ease-in 1 forwards`;
document.getElementById('figure_1').style.opacity = `100%`;
document.getElementById('figure_2').style.opacity = `100%`;
document.getElementById('figure_3').style.opacity = `100%`;
document.getElementById('figure_4').style.opacity = `100%`;
document.getElementById('figure_5').style.opacity = `100%`;
document.getElementById('figure_6').style.opacity = `100%`;
document.getElementById('figure_1--1').style.opacity = `100%`;
document.getElementById('figure_2--2').style.opacity = `100%`;
document.getElementById('figure_3--3').style.opacity = `100%`;
document.getElementById('figure_4--4').style.opacity = `100%`;
document.getElementById('figure_5--5').style.opacity = `100%`;
document.getElementById('figure_6--6').style.opacity = `100%`;
 }

document.getElementById('btn_black').onclick = function() {
document.getElementById('btn_black').style.display = 'none';
document.getElementById('cat_on').style.animation = `opacityCat 1s ease-in 1 forwards`;
document.getElementById('figure_1').style.opacity = `0%`;
document.getElementById('figure_2').style.opacity = `0%`;
document.getElementById('figure_3').style.opacity = `0%`;
document.getElementById('figure_4').style.opacity = `0%`;
document.getElementById('figure_5').style.opacity = `0%`;
document.getElementById('figure_6').style.opacity = `0%`;
document.getElementById('figure_1--1').style.opacity = `0%`;
document.getElementById('figure_2--2').style.opacity = `0%`;
document.getElementById('figure_3--3').style.opacity = `0%`;
document.getElementById('figure_4--4').style.opacity = `0%`;
document.getElementById('figure_5--5').style.opacity = `0%`;
document.getElementById('figure_6--6').style.opacity = `0%`;
}

$(document).ready(function() {
  $("#figure_1").click(function() {
    $("#figure_1").toggleClass("change");
  });
  $("#figure_2").click(function() {
    $("#figure_2").toggleClass("change");
  });
  $("#figure_3").click(function() {
    $("#figure_3").toggleClass("change");
  });
  $("#figure_4").click(function() {
    $("#figure_4").toggleClass("change");
  });
  $("#figure_5").click(function() {
    $("#figure_5").toggleClass("change");
  });
  $("#figure_6").click(function() {
    $("#figure_6").toggleClass("change");
  });
});
