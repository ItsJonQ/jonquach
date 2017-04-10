var post = document.querySelector('.post');

var progress = function() {
  if (!post) {
    return false;
  }

  var $p = rxs('.rx-reading-progress');

  // VARIABLES + MATH
  var offset = window.pageYOffset;
  var transform = 'translateY(-100%)';
  var heroHeight = 500;
  var barHeight = 50;
  var threshold = heroHeight - barHeight;
  var postScrollHeight = post.clientHeight - window.innerHeight;
  var scrollOffset = Math.max(0, Math.min((offset - heroHeight), postScrollHeight));

  // MATH!
  var progress = (scrollOffset / postScrollHeight * 100);
  if (offset >= threshold) {
    transform = 'translateY(0%)';
  }

  $p.set({
    background: 'hsl('+progress+', 50%, 50%)',
    transition: 'transform 0.3s ease',
    transform: transform,
    width: progress + '%',
  }, 'important');
};

window.addEventListener('scroll', progress, false);
