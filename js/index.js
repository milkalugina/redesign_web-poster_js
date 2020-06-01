
let controller = new ScrollMagic.Controller()

let sections = document.querySelectorAll('section')

let count = 1
while (count < sections.length) {
new ScrollMagic.Scene({
  triggerHook: 'onLeave',
  triggerElement: sections[count]
})
.addTo(controller)
.setPin(sections[count])
count += 1
}


 // cats_scroll
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
