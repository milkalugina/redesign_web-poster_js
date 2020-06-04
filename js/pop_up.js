
$(document).ready(function() {
  $(".black").click(function() {
    $(".black").toggleClass("change");
  });
});


$(document).ready(function() {
  $(".white").click(function() {
    $(".white").toggleClass("change");
  });
});


document.getElementsByClassName('black_pop_up').onclick = function() {
  document.getElementsByClassName('pop_up_2').style.transform =  `translate(${anime.random(-25,55)}vw,${anime.random(15,35)}vh) rotate(${anime.random(0, 0)}deg)`;
  document.getElementsByClassName('pop_up_4').style.transform =  `translate(${anime.random(-25,55)}vw,${anime.random(15,35)}vh) rotate(${anime.random(0, 0)}deg)`;
  document.getElementsByClassName('pop_up_6').style.transform =  `translate(${anime.random(-25,55)}vw,${anime.random(15,35)}vh) rotate(${anime.random(0, 0)}deg)`;
  document.getElementsByClassName('pop_up_8').style.transform =  `translate(${anime.random(-25,55)}vw,${anime.random(15,35)}vh) rotate(${anime.random(0, 0)}deg)`;
}
