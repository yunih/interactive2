

window.onload = function(){






	let shapes = document.querySelectorAll('.draggyShape')
	let draggedEl = undefined


	for(let counter = 0; counter < shapes.length; counter = counter + 1){
		let x = Math.random() * (window.innerWidth - shapes[counter].clientWidth)
		let y = Math.random() * (window.innerHeight - shapes[counter].clientHeight)
		shapes[counter].style.left = x + 'px'
		shapes[counter].style.top = y + 'px'



		shapes[counter].onmousedown = function(){
			draggedEl = this
		}
	}




	document.onmousemove = function(event){
			

		draggedEl.style.top = event.clientY - draggedEl.clientHeight/2 + 'px'
		draggedEl.style.left = event.clientX - draggedEl.clientWidth/2 + 'px'

	}
	document.onmouseup = function() {
		draggedEl = undefined
	}



}