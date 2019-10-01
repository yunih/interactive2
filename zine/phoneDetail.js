let revealers = document.querySelectorAll('.revealer')



for(let counter = 0; counter < revealers.length; counter = counter + 1){
	revealers[counter].onmouseenter = function(){

		document.body.classList.add('hoveringRevealer')
	}

	revealers[counter].onmouseleave = function(){

		document.body.classList.remove('hoveringRevealer')
	}
}