// console.log('slider')

const slides = [
	'./img/01.jpg',
	'./img/02.jpg',
	'./img/03.jpg',
	'./img/04.jpg',
	'./img/05.jpg',
]

let counter = 0;

const app = new Vue ({
	el: '#app',
	data: {
		slides,
		counter,
		autoP: null,
		stopAutoP: null,
	},
	methods: {
		goPrev () {
			if(this.counter > 0){
				this.counter--;
			} else {
				this.counter = slides.length - 1;
			}
		},
		goNext () {
			if(this.counter < this.slides.length - 1){
				this.counter++;	
			} else {
				this.counter = 0;
			}
		},
		autoPlay () { // Exit
			this.autoP = setInterval(this.goNext, 3000);
		},
		stopAutoPlay(){ // Enter
			this.stopAutoP = clearInterval(this.autoP);
		}
	}
})
