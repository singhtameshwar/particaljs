
const button = document.getElementById("runaway-btn");

const animateMove = (element, prop, pixels) =>
  anime({
    targets: element,
    [prop]: `${pixels}px`,
    easing: "easeOutCirc"
  });

["mouseover", "click"].forEach(function (el) {
  button.addEventListener(el, function (event) {
    const top = getRandomNumber(window.innerHeight - this.offsetHeight);
    const left = getRandomNumber(window.innerWidth - this.offsetWidth);

    animateMove(this, "left", left).play();
    animateMove(this, "top", top).play();
  });
});

const getRandomNumber = (num) => {
  return Math.floor(Math.random() * (num + 1));
};
particlesJS('particles-js', {
  particles: {
    number: { value: 300 }, 
    color: { value: '#000' },
    shape: { type: 'polygon', stroke: { width: 1, color: '#008000' } },
    opacity: { value: 0.5, random: false, anim: { enable: false } },
    size: { value: 6, random: true, anim: { enable: false } },
    line_linked: { enable: true, distance: 100, color: '#FF0000', opacity: 0.4, width: 1 },
    move: { enable: true, speed: 7, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false }
  },
  interactivity: {
    detect_on: 'canvas',
    events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
    modes: { grab: { distance: 140, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }
  },
  retina_detect: true
});
