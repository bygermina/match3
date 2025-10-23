let c4 = document.getElementById('c3'),
	c5 = document.getElementById('c4'),
	c6 = document.getElementById('c5'),
	c7 = document.getElementById('c6'),
	c8 = document.getElementById('c7')

window.addEventListener('mousemove', function(e) {
	parallax(e, c4, 2)
	parallax(e, c5, 3)
	parallax(e, c6, 4)
	parallax(e, c7, 5)
	parallax(e, c8, 6)
})

function parallax(e, target, multiplier) {
    let x = e.clientX / window.innerWidth,
    	y = e.clientY / window.innerHeight;  

    target.style.transform = 'translate3d(-' + (x * 50 * multiplier) + 'px, -' + (y * 5 * multiplier)+ 'px,0)' 
}