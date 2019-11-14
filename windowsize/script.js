window.addEventListener('resize',pageResized)
// window.addEventListener('resize',pageWidth)
// let squre = window.getElementById('resize',pageResized)


function pageResized(){
  
  let windowPercentOfScreen = (1 - (window.innerHeight / window.screen.height)) * 100
  
  hue = 0;
  let colorFromScreenHeight = 'hsl('+hue+', 50% ,50%,' + windowPercentOfScreen + '%)'
  document.body.style.color = colorFromScreenHeight

	// document.body.style.backgroundColor = 'HSL('+hue+', 50%, 50%)';
  // let squreBorderRadius = (100% - (window.innerHeight / window.screen.height)) - 5%

}






pageResized()