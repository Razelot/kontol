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
  for (i = 0; i < skill_count; i++) {
    bar[i].animate(1);
  }
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
