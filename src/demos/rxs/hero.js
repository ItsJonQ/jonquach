var a = rxs('.rx-hero-image');
var b = rxs('.rx-promo-bar');

var magicBar = function() {
  var offset = window.pageYOffset;
  var transform = 'translateY(-100%)';
  if (offset >= 50) {
    transform = 'translateY(0%)';
  }
  b.set({
    transition: 'transform 0.3s ease',
    transform: transform,
  }, 'important');
}

var magicHero = function() {
  var offset = window.pageYOffset;
  var h = window.innerHeight * 0.7;
  var opacity = Math.max(0, Math.min(1 - (offset/h), 1));
  var scale = Math.max(0, Math.min(1 + (offset/h), 3));

  a.set({
    opacity: opacity,
    transform: 'translateZ(0) scale('+scale+')',
  });
};

var scrollStyles = function() {
  magicBar();
  magicHero();
};

window.addEventListener('scroll', scrollStyles, false);
