<template>
	<template v-if='procent != 0 || procent != false'>
		<div class="set__item">
			<div class="set__icon">
				<img :src="Werts" />
			</div>
			<div class="set__detail">
				<div class="set__meta">
					<div class="set__name">
						<h4 class="small_title">{{ title }}</h4>
						<template v-if='years != 0 || years != false'>
							<p class="skill-set__year">{{ years }} year</p>
						</template>
					</div>
					<p class="set__high">{{ this.prosents }}
						<span class="skill-set__ratio"> %</span>
					</p>

				</div>
				<div class="progress" role="progressbar" aria-label="Animated Default striped example" aria-valuenow="10"
					aria-valuemin="0" aria-valuemax="100">
					<div class="progress-bar progress-bar-striped progress-bar-animated"
						:style='"width:" + this.prosents + "%;"'></div>
				</div>
			</div>
		</div>
	</template>
</template>

<script>
export default {
	name: 'NaVik',
	props: {
		procent: Number,
		title: String,
		years: Number,
	},
	data() {
		return {
			Werts: [],
			prosents: 0,
		};
	},
	async mounted() {
		const brandImgs = {
			'1C Bitrix': '/logotip/html.svg',
			'Angular': '/logotip/angular_full_color_logo.svg.png',
			'CS-Cart': '/logotip/cs-cart-e1651150902132.png',
			'Drupal': '/logotip/logo-drupal-e1651150843917.png',
			'HTML/CSS': '/logotip/html.svg',
			'Illustrator': '/logotip/ai.svg',
			'JS': '/logotip/javascript-logo.png',
			'MODX': '/logotip/modx-logo-e1651150810445.png',
			'Laravel': '/logotip/gh.png',
			'Opencart': '/logotip/opencart-e1651150778269.png',
			'PHP': '/logotip/php_png23.png',
			'Photoshop': '/logotip/ps.svg',
			'PrestaShop': '/logotip/1200px-prestashop.svg-e1651150744304.png',
			'React': '/logotip/react-icon.svg.png',
			'Sass': '/logotip/sass-1.svg',
			'VUE': '/logotip/1200px-vue.js_logo_2.png',
			'Wordpress': '/logotip/wordpress-logotype-wmark.png',
		};
		this.Werts = brandImgs[this.title];
		let timers = 0;
		let proc = this.procent;
		proc = proc++;
		console.log(proc)
		let interval = setInterval(() => {
			if (timers == proc + 1) {
				clearInterval(interval)
			} else {
				this.prosents = timers;
				//this.tweenValue = this.tweenValue + proc;
				timers++
				//console.log(timer)
			}
		}, 70)
	},
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.set__item {
	width: 40%;
	float: left;
	margin: 30px;
}

.set__item .set__icon {
	float: left;
	margin-right: 15px;
}



.set__item .set__icon svg,
.set__item .set__icon img {
	max-width: 100%;
	display: flex;
	max-height: 60px;
	position: absolute;
	align-items: center;
	justify-content: center;
	margin: 10px;
	z-index: 1;
}

.set__item .set__icon:after {
	background: #ffffff66;
	width: 80px;
	height: 80px;
	content: '';
	display: flex;
	filter: blur(2px);
	align-items: center;
	justify-content: center;
	border-radius: 50px;
	z-index: -1;
}

.set__item .set__detail .set__meta {
	margin-bottom: 0.8rem;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-pack: justify;
	-ms-flex-pack: justify;
	justify-content: space-between;
}

.set__item .set__detail .set__meta .set__name {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: end;
	-ms-flex-align: end;
	color: #01b8e5;
	align-items: flex-end;
	/*padding-left: 10px;*/
}

.set__item .set__detail .set__meta .set__name .small_title {
	font-size: 1.8em;
	text-shadow: 0 0 10px #01b0db, 0 0 20px #01b0db, 0 0 30px #01b0db, 0 0 40px #01b0db;
	margin: 0px;
}

.set__item .set__detail .set__meta .set__name .set__year {
	line-height: 1.2;
	color: #c0c5ca;
	font-size: 1em;
	margin: 0px;
	margin-left: 20px;
}

.set__item .set__detail .set__meta .set__high {
	font-size: 1.2em;
	color: #fff;
	font-weight: bold;
	font-style: italic;
}

@media (max-width: 1200px) {
	.set__item {
		width: 100%;
		float: none;
		margin: 0px;
		margin-bottom: 40px;
	}

	.set__item .set__icon {
		float: none;
	}

	.set__detail .set__meta .set__high {
		margin: 0%;
	}
}
</style>