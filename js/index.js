
let controller = new ScrollMagic.Controller()

let $catsScroll = document.getElementById('main_cat')

let catsScrollAnim = anime({
  targets: $catsScroll,
  scale: 20,
  autoplay: false,
  easing: 'easeInOutCirc'
})

let $section1 = document.getElementById('cats_scroll')

new ScrollMagic.Scene({
  triggerElement: '#cats_scroll',
  duration: $section1.getBoundingClientRect().height
})
.addTo(controller)
.setPin($catsScroll)
.on('progress', function(event) {
  catsScrollAnim.seek(catsScrollAnim.duration * (event.progress * 1))
})
