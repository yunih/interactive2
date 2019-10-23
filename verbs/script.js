
let one = document.querySelector('#oneHover')
let two = document.querySelector('#twoHover')
let three = document.querySelector('#threeHover')
let four = document.querySelector('#fourHover')
var hue = 100;

let oneCount = 0
let twoCount = 0
let threeCount = 0
let fourCount = 0


let colorChange = 1




let oneTimber

// colorChange -= 0.01;
one.addEventListener('mouseenter',function(){
	hue = 0;

	// document.body.style.backgroundColor = "HSL("+hue+",50%,50%)";

	oneTimer = setInterval(function(){
		hue = (hue+5)%360;
		document.body.style.backgroundColor = 'HSL('+hue+', 35%, 20%)';
	}
	,150)
})
one.addEventListener('mouseleave',function(){
	document.body.style.background = 'unset'
	clearInterval(oneTimer)
})


let twoTimber

two.addEventListener('mouseenter',function(){
	hue = 0;
	// document.body.style.background = '#7DCBD4'
	twoTimer = setInterval(function(){
		hue = (hue+5)%360;
		document.body.style.backgroundColor = 'HSL('+hue+', 50%, 50%)';
	}
	,150)

})

two.addEventListener('mouseleave',function(){
	document.body.style.background = 'unset'
	clearInterval(twoTimer)
})




let threeTimber

three.addEventListener('mouseenter',function(){
	hue = 0;
	// document.body.style.background = '#7DCBD4'
	threeTimer = setInterval(function(){
		hue = (hue+5)%360;
		document.body.style.backgroundColor = 'HSL('+hue+', 80%, 80%)';
	}
	,150)

})

three.addEventListener('mouseleave',function(){
	document.body.style.background = 'unset'
	clearInterval(threeTimer)
})





let fourTimber

// colorChange -= 0.01;
four.addEventListener('mouseenter',function(){
	hue = 0;

	// document.body.style.backgroundColor = "HSL("+hue+",50%,50%)";

	fourTimer = setInterval(function(){
		hue = (hue+5)%360;
		document.body.style.backgroundColor = 'HSL('+hue+', 35%, 20%)';
	}
	,150)
})
four.addEventListener('mouseleave',function(){
	document.body.style.background = 'unset'
	clearInterval(fourTimer)
})




