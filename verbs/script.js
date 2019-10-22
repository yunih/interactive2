// let larry = document.querySelector('#larry')
// let larryCount = 0

// larry.addEventListener('click',function(){
// 	if (larryCount == 0) {
// 		console.log('zero')
// 		let randomR = Math.random() * 255
// 		larry.style.background = 'rgb('+randomR+',255,255)'
// 		larryCount = larryCount + 1
// 	}  else if(larryCount == 1){
// 		console.log('one')


// 		larryCount = larryCount + 1
// 	}   else if (larryCount == 2) {
// 		console.log('two')

// 		larryCount = 0
// 	}


// })


let one = document.querySelector('#one')

one.addEventListener('click',function(){
	if (oneCount == 0) {
		console.log('zero')
		let randomR = Math.random() * 255
		one.style.background = 'rgb('+randomR+',255,255)'
		oneCount = oneCount + 1
	}  else if(oneCount == 1){
		console.log('one')


		oneCount = oneCount + 1
	}   else if (oneCount == 2) {
		console.log('two')

		oneCount = 0
	}

})