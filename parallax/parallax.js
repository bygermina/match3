let layer3 = document.getElementById('c3'),
	layer4 = document.getElementById('c4'),
	layer5 = document.getElementById('c5'),
	layer6 = document.getElementById('c6'),
	layer7 = document.getElementById('c7')

window.addEventListener('mousemove', function(e) {
	parallax(e, layer3, 2)
	parallax(e, layer4, 3)
	parallax(e, layer5, 4)
	parallax(e, layer6, 5)
	parallax(e, layer7, 6)
})

function parallax(e, target, multiplier) {
    if (!target) return;
    let x = e.clientX / window.innerWidth,
		y = e.clientY / window.innerHeight;  

    target.style.transform = 'translate3d(-' + (x * 50 * multiplier) + 'px, -' + (y * 5 * multiplier)+ 'px,0)'
}