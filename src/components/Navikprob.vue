<template>
	<div class="set__item">
		<div class="set__icon">
			<img id="hero-img" src:='brandImg(title)' class="brandImgOne" :alt='title' />
			<!--{setDropsNavikIMG(title, years)}-->
		</div>
		<div class="set__detail">
			<div class="set__meta">
				<div class="set__name">
					<h4 class="small_title">{{ title }}</h4>
					<!--{{ setDropsNavikYears(years) }}-->
				</div>
				<p class="set__high">{{ procent }}
					<span class="skill-set__ratio"> %</span>
				</p>
			</div>
			<!--<ProgressBar animated now={procent} />-->
		</div>
	</div>
</template>

<script>
export default {
	name: 'NaViks',
	props: {
		procent: Number,
		title: String,
		years: Number,
	},
	setup() {
		function brandImg(title) {
			const brandImgs = {
				'1C Bitrix': '1cbitrixl.png',
				'Angular': '../assets/1cbitrixl.png',
				'CS-Cart': '../assets/1c_bitrix_logo.svg.png',
				'Drupal': '../assets/1c_bitrix_logo.svg.png',
				'HTML/CSS': '../assets/1c_bitrix_logo.svg.png',
				'Illustrator': '../assets/1c_bitrix_logo.svg.png',
				'JS': '../assets/1c_bitrix_logo.svg.png',
				'MODX': '../assets/1c_bitrix_logo.svg.png',
				'Opencart': '../assets/1c_bitrix_logo.svg.png',
				'PHP': '../assets/1c_bitrix_logo.svg.png',
				'Photoshop': '../assets/1c_bitrix_logo.svg.png',
				'PrestaShop': '../assets/1c_bitrix_logo.svg.png',
				'React': '../assets/1c_bitrix_logo.svg.png',
				'Sass': '../assets/1c_bitrix_logo.svg.png',
				'VUE': '../assets/1c_bitrix_logo.svg.png',
				'Wordpress': '../assets/wordpress-logotype-wmark.png',
			};
			return brandImgs[title];
		}

		return {
			brandImg,
		};
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
	padding-left: 10px;
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