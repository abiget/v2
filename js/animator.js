// Hero name: letter-by-letter entrance, plays once and stays visible
var textWrapper = document.querySelector('.ml2');
if (textWrapper) {
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

  anime.timeline({ loop: false })
    .add({
      targets: '.ml2 .letter',
      scale: [4, 1],
      opacity: [0, 1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 800,
      delay: (el, i) => 50 * i
    });
}