<template>
	<div class="col col-md-6 speed">
		<h3>{{ title }}</h3>
		<div class="container" style="padding-top: 0px;display: flex;justify-content: center;">
			<div class="center">
				<div class="speedometr">
					<svg class="speed" width="250" viewBox="0 0 400 342">
						<defs>
							<linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
								<stop offset="0%" stop-color="#ff0000"></stop>
								<stop offset="40%" stop-color="#ff00f5"></stop>
								<stop offset="70%" stop-color="#06AFFD" />
								<stop offset="100%" stop-color="#01ff00" />

							</linearGradient>
						</defs>
						<defs>
							<linearGradient id="linear2" x1="0%" y1="0%" x2="100%" y2="0%">
								<stop offset="50%" stop-color="#fff" />

								<stop offset="90%" stop-color="rgba(255,255,255,0)" />
							</linearGradient>
						</defs>
						<defs>
							<filter id="f4" x="0" y="0" width="200%" height="200%">
								<feOffset result="offOut" in="SourceGraphic" dx="0" dy="0" />

								<feGaussianBlur result="blurOut" in="matrixOut" stdDeviation="25" />
								<feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
							</filter>
						</defs>
						<defs>
							<filter id="f1" x="0" y="0">
								<feGaussianBlur in="SourceGraphic" stdDeviation="7" />
							</filter>
						</defs>

						<path :id='"arcy" + id'
							:style='"fill: none; fill-rule: evenodd; stroke-width: 52; stroke-miterlimit: 1; stroke-opacity: 0.2; transform-origin: 0px 14px; stroke-dashoffset: 1509.21; stroke-dasharray: 754.603, 754.603, " + this.tweenValue + ";"'
							transform="scale(0.9 0.9) translate(20 18)" stroke="url(#linear)" filter="url(#f1)"
							d="m 66.906305,293.33748 a 160.10918,160.10918 0 0 1 10e-7,-226.428566 a 160.10918,160.10918 0 0 1 226.428574,10e-7 a 160.10918,160.10918 0 0 1 -10e-6,226.428565" />
						<path :id='"path" + id'
							style="fill:none;fill-rule:evenodd;stroke-width:38;stroke-miterlimit:4;stroke:#223050;stroke-opacity:0.5;"
							d="m 66.906305,293.33748 a 160.10918,160.10918 0 0 1 10e-7,-226.428566 a 160.10918,160.10918 0 0 1 226.428574,10e-7 a 160.10918,160.10918 0 0 1 -10e-6,226.428565" />
						<path
							:style='"fill: none; fill-rule: evenodd; stroke-width: 40; stroke-miterlimit: 4; stroke-dashoffset: 1509.21; stroke-dasharray: 754.603, 754.603," + this.tweenValue + ";"'
							stroke="url(#linear)" :id='"arc" + id'
							d="m 66.906305,293.33748 a 160.10918,160.10918 0 0 1 10e-7,-226.428566 a 160.10918,160.10918 0 0 1 226.428574,10e-7 a 160.10918,160.10918 0 0 1 -10e-6,226.428565">
						</path>

						<line class="metka" x1="180" y1="14" x2="180" y2="26" transform="rotate(226 180 180)">
						</line>
						<line class="metka" x1="180" y1="14" x2="180" y2="26" transform="rotate(270 180 180)">
						</line>
						<line class="metka" x1="180" y1="14" x2="180" y2="26" transform="rotate(315 180 180)">
						</line>
						<line class="metka" x1="180" y1="14" x2="180" y2="26" transform="rotate(405 180 180)">
						</line>
						<line class="metka" x1="180" y1="14" x2="180" y2="26" transform="rotate(450 180 180)">
						</line>
						<line class="metka" x1="180" y1="14" x2="180" y2="26" transform="rotate(494 180 180)">
						</line>
						<line class="metka" x1="180" y1="14" x2="180" y2="26">
						</line>

						<text x="85" y="275" class="number">0</text>
						<text x="50" y="187" class="number">15</text>
						<text x="82" y="100" class="number">30</text>
						<text x="170" y="60" class="number">45</text>
						<text x="255" y="100" class="number">60</text>
						<text x="292" y="187" class="number">75</text>
						<text x="255" y="275" class="number">100</text>
					</svg>
					<div :model='value' :id='"speed-number" + id' class="speed-number">{{ this.displayValue }} % </div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'PortFolioList',
	props: {
		title: String,
		num: Number,
		typ: String,
		id: Number,
		value: { default: 0 }
	},
	components: {
	},
	computed: {
		animatedNumber() {
			return this.tweenedNumber;
		}
	},
	data() {
		return {
			displayValue: 0,
			tweenValue: 0,
			number: this.num,
		};
	},
	setup() {
	},
	watch: {
	},
	mounted() {
		let timer = 0;
		let proc = 7.7;
		let interval = setInterval(() => {
			if (timer === this.num && timer < 101) {
				clearInterval(interval)
			} else {
				this.displayValue = timer;
				this.tweenValue = this.tweenValue + proc;
				timer++
				//console.log(timer)
			}
		}, 70)
	}
}
</script>

<style scoped>
.tax a {
	color: #fff;
}

.tax h3 {
	margin-bottom: 30px;
}

.speed h3 {
	color: #fff !important;
	margin-left: -30px;
	text-align: center;
}

.nout-ekran-left {
	max-width: 510px;
	min-height: 140px;
	height: 310px;
	float: left;
	width: 19px;
	margin-left: -1px;
	z-index: 2;
	transform: rotateZ(0deg);
}

section.about .container h2 {
	color: #0cf;
	font-size: 2em;
	text-shadow: 0 0 10px #01b0db, 0 0 20px #01b0db, 0 0 30px #01b0db, 0 0 40px #01b0db;
}

.nout_bottom-center {
	max-width: 500px;
	min-height: 88px;
	height: 88px;
	width: 500px;
	;
	background-size: cover;
}

.nout-ekran-right {
	height: 310px;
	float: right;
	width: 18px;
	z-index: 2;
	margin-left: -0.2px;
	position: inherit;
	transform: rotateY(180deg);
}

.nout-ekran-center {
	overflow: overlay;
	max-height: 310px;
	max-width: 500px;
	width: 100%;
	margin: 0px;
	display: inline-block;
}

.nout-ekran {
	display: inline-flex;
	align-items: flex-start;
	align-content: flex-start;
}

.nout-ekran img {
	width: 100%;
	max-width: 500px;
	z-index: 0;
}

.new_nout {
	max-width: 522px;
	width: 100%;
	height: inherit;
	display: grid;
	/*justify-content: center;*/
	margin: auto;
	margin-top: 30px;
	margin-bottom: 50px;
}

.nout-top-center {
	z-index: 3;
	border-radius: 0;
	width: 502px;
	height: 42px;
	margin-bottom: 0px;
	object-fit: cover;
}

.nout-top-left {
	height: 22px;
	width: 18px;
	z-index: 2;
	position: inherit;
	float: left;
	margin-bottom: -1px;
	transform: rotateY(180deg);
	margin-right: -1px;
}

.nout-top-right {
	height: 27px;
	float: right;
	width: 23px;
	z-index: 2;
	margin-bottom: -4px;
	margin-left: -3.7px;
}

.nout-top {
	margin-left: 0px;
	margin-bottom: 0px;
	display: inline-flex;
	flex-wrap: nowrap;
	flex-direction: row;
	max-width: 555px;
	align-items: flex-end;
}

.nout_bottom-left {
	height: 88px;
	float: right;
	width: 80px;
	margin-left: -61.4px;
	z-index: 2;
	;
	/* position: absolute; */
	margin-bottom: -5px;
}

.nout_bottom-right {
	height: 88px;
	float: right;
	width: 80px;
	z-index: 2;
	;
	/* position: absolute; */
	margin-bottom: 50px;
	margin-top: -1px;
}

.nout_bottom {
	display: inline-flex;
	align-items: flex-start;
}

.info img {
	width: 100%;
	height: auto;
}

@media screen and (max-width:800px) {
	.timeline-item {
		width: 100%;
		margin: auto;
		margin-top: 30px;
		display: block;
		justify-content: center;
	}
}

@media screen and (max-width:780px) {
	section.about .container {
		padding-left: 0px;
		padding-right: 0px;
		width: 100%;
	}

	.nout-ekran-left {
		display: none;
	}

	.nout_bottom-center {
		max-width: 500px;
		height: 88px;
		width: 197px;
		background-size: cover;
	}

	.nout-ekran-right {
		display: none;
	}

	.nout-ekran {
		display: inline-flex;
		align-items: flex-start;
		align-content: flex-start;
	}

	.nout-ekran-center {
		overflow: overlay;
		width: 100%;
		margin: 0px;
		display: inline-block;
		border: 15px solid #d1d1d1;
		border-radius: 10px;
	}

	.nout-top-left {
		display: none;
	}

	.nout-top-right {
		display: none;
	}

	.nout-top {
		display: inline-flex;
		width: 100%;
	}

	.nout_bottom {
		display: none;
	}

	.nout-top-center {
		z-index: 3;
		border-radius: 0;
		width: 10px;
		height: 10px;
		margin: auto;
		margin-bottom: -12px;
		object-fit: cover;
		background: black;
		border-radius: 50px;
	}
}


section.about .container {
	height: 100%;
	display: block;
	align-items: center;
	justify-content: center;
	padding-top: 180px;
}

.about-page {
	height: auto;
}

div#timeline {
	list-style: none;
	position: relative;
	margin: 50px auto;
	width: 90%;
}

div#timeline:before {
	top: 0px;
	bottom: -100px;
	position: absolute;
	content: " ";
	width: 2px;
	background-color: #4997cd;
	left: 50%;
	margin-left: -1.5px;
	mask: inherit;
}

#timeline .timeline-badge {
	color: #fff;
	width: 25px;
	height: 25px;
	font-size: 1.2em;
	text-align: center;
	position: absolute;
	top: 0px;
	left: 50%;
	margin-left: -14px;
	background-color: #fff;
	z-index: 6;
	border-radius: 50%;
	border: 2px solid #4997cd;
	background: #01b0db !important;
	fill: black;
	clip-path: circle(25px at center);
	mask: inherit;
	box-shadow: 0 0 2px 0px #01b0db, 0 0 2px #01b0db, 0 0 2px #01b0db, 0 0 20px #01b0db;
}

.col-sm-6 .title {
	text-align: end;
}

.offset-sm-6 .title {
	text-align: left;
}

.col-sm-6 .timeline-item {
	margin: auto;
	margin-right: 0px;
}

.offset-sm-6 .timeline-item {
	margin: auto;
	margin-left: 0px;
}

.timeline-movement {
	position: relative;
	margin-bottom: 10rem;
}

.metka {
	stroke: #fff;
	opacity: 0;
	stroke-width: 5;
}

.number {
	fill: #fff;
	font-weight: 700;
	font-size: 16px;
	opacity: 0.8;
	font-family: 'Open Sans', sans-serif;
}

.speedometr {
	position: relative;
	max-width: 350px;
}

.speed-number {
	color: #fff;
	font-family: 'Tulpen One', cursive;
	font-size: 30px;
	font-weight: 400;
	text-align: center;
	position: absolute;
	top: 94px;
	width: 93%;
}

#butanim {
	width: 10rem;
	border: 2px solid #6EFDF3;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	position: absolute;
	left: calc(50% - 5rem);
	bottom: -5rem;
	font-size: 1.2rem;
	font-weight: bold;
	text-align: center;
	text-transform: uppercase;
	line-height: 3rem;
	color: #6EFDF3;
	border-radius: 3rem;
	background-color: transparent;
	cursor: pointer;
	outline: none;
	-webkit-transition: background-color 250ms ease-out;
	transition: background-color 250ms ease-out;
}

@media screen and (max-width:780px) {
	.nout-ekran-left {
		max-width: 510px;
		min-height: 140px;
		height: 150px;
		float: left;
		width: 17px;
		z-index: 2;
		display: none;
	}

	.nout_bottom-center {
		max-width: 500px;
		/* min-height: 140px; */
		height: 88px;
		width: 197px;
		/* background: url(/wp-content/uploads/2022/06/pngwing.com_bottom.png) no-repeat top; */
		background-size: cover;
	}

	.nout-ekran-right {
		height: 150px;
		float: right;
		width: 18px;
		z-index: 2;
		margin-left: 0.8px;
		position: inherit;
		transform: rotateY(180deg);
		display: none;
	}

	.nout-ekran {
		display: inline-flex;
		align-items: flex-start;
		align-content: flex-start;
	}

	.nout-ekran-center {
		overflow: overlay;
		width: 100%;
		margin: 0px;
		display: inline-block;
		border: 15px solid #d1d1d1;
		border-radius: 10px;
	}

	.nout-top-left {
		height: 22px;
		width: 18px;
		z-index: 2;
		position: inherit;
		float: left;
		margin-bottom: -1px;
		transform: rotateY(180deg);
		margin-right: -1px;
		display: none;
	}

	.nout-top-right {
		height: 27px;
		float: right;
		width: 23px;
		z-index: 2;
		margin-bottom: -4px;
		margin-left: -4px;
		display: none;
	}

	.nout-top {
		display: inline-flex;
		width: 100%;
	}

	.nout_bottom-left {
		height: 22px;
		float: right;
		width: 18px;
		margin-left: 0px;
		z-index: 2;
		/* position: absolute; */
		/* margin-bottom: -5px; */
		transform: rotateZ(180deg);
	}

	.nout_bottom-right {
		height: 88px;
		float: right;
		width: 80px;
		z-index: 2;
		/* background: url(/wp-content/uploads/2022/06/pngwing.com_bottom_right.png) no-repeat top; */
		/* position: absolute; */
		margin-bottom: 50px;
		margin-top: -1px;
	}

	.nout_bottom {
		display: inline-flex;
		align-items: flex-start;
		display: none;
	}

}

@media (min-width: 576px) {
	.offset-sm-6 {
		margin-left: 50%;
	}
}

.col-sm-6 .timeline-item {
	position: relative;
	background-color: rgba(255, 255, 255, 0.2);
	padding: 14px;
	border-radius: 6px;
	box-shadow: 0 0 4px rgb(0 0 0 / 12%), 0 2px 2px rgb(0 0 0 / 8%);
	color: #fff;
	width: fit-content;
}
</style>