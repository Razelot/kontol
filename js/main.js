var bar = [];
var skill_count = 6

for (i = 0; i < skill_count; i++) {
  bar[i] = new ProgressBar.Line('#bar'+(i+1), {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#d6ffbf',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'}
  });
}


function resetBars(){
  for (i = 0; i < skill_count; i++) {
    bar[i].set(0);
  }
}

function loadBars() {
  bar[0].animate(0.8);
  bar[1].animate(0.7);
  bar[2].animate(0.6);
  bar[3].animate(0.6);
  bar[4].animate(0.4);
  bar[5].animate(0.3);
}

function reloadBars(){
  resetBars();
  loadBars();
}

window.onload = function(){
  resetBars();
  loadBars();
};

AOS.init({
  duration: 1200
});
