<template>
	<div id="carouselExample" class="carousel slide">
		<div class="carousel-inner">
			<div v-for="item in slideq" :key="item.ID">
				<template v-if="item.ID == 7">
					<div class="carousel-item active">
						<img v-dummy="'1857x670'" src="../assets/im.jpg" alt={{item.post_title}} />
						<div class="caption">
							<h2 v-dummy="'3,10'">{{ item.post_title }}</h2>
							<p v-dummy="'3,10'">{{ item.post_content }}</p>
						</div>
					</div>
				</template>
				<template v-else>
					<div class="carousel-item">
						<img src="../assets/im.jpg" alt="{{item.post_title }}" />
						<div class="caption">
							<h2>{{ item.post_title }}</h2>
							<p>{{ item.post_content }}</p>
						</div>
					</div>
				</template>
			</div>
		</div>
		<button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
			<span class="carousel-control-prev-icon" aria-hidden="true"></span>
			<span class="visually-hidden">Previous</span>
		</button>
		<button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
			<span class="carousel-control-next-icon" aria-hidden="true"></span>
			<span class="visually-hidden">Next</span>
		</button>
	</div>
	<section class="about mg-sn-1 slide-section">
		<div class="container">
			<div class="row">
				<div class="aos-init about--left col col-sm-2 col-md-12">
					<img src="../assets/inetforallnew.png" width="300" height="300"
						alt="Создание, разработка и доработка сайтов" />
				</div>
				<div class="aos-init about--right col col-sm-10 col-md-12">
					<header>
						<HTag :tag='"h3"' :msg='about.about_meta' />
						<HTag :tag='"h2"' :msg='about.about_h4' />
					</header>
					<div class="clou">
						<p>{{ about.about_text }}</p>
						<ButtonLink :title='"address"' :href='about.about_link' :msg='" Обо мне"' />
						<ButtonLink :title='"briefcase"' :href='about.about_link2' :msg='" Портфолио"' />
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="price mg-sn-2 slide-section" style="padding-top: 70px;">
		<HTag :tag='"zagolovokh2"' :msg="'Цены'" style="margin-bottom: 25px" />
		<div data-aos="zoom-in" class="aos-init container_price aos-animate">
			<div class="row justify-content-center">
				<template v-for=" item  in  prices " :key="item.ID">
					<CardServices :href='item.blok1_href' :title='item.blok1_name' :prev='item.blok1_text'
						:cena='item.blok1_price' :color='item.blok1_color' />
				</template>
			</div>
		</div>
	</section>
	<section class="portfol mg-sn-1 slide-section" style="padding-top: 70px;">
		<HTag :tag='"zagolovokh2"' :msg="'Портфолио'" style="margin-bottom: 25px" />
		<div class="container">
			<div class="row gx-3">
				<template v-for=" item  in  portfolio " :key="item.ID">
					<PortfolioItem :href='item.post_name' :title='item.post_title' :src='item.img'
						:prev='item.post_content' />
				</template>
			</div>
		</div>
	</section>
	<section class="message">
		<FormVi />
	</section>
</template>

<script>
import HTag from '@/components/HTag.vue';
import ButtonLink from '@/components/ButtonLink.vue';
import CardServices from '@/components/CardServices.vue';
import PortfolioItem from '@/components/PortfolioItem.vue';
import FormVi from '@/components/FormVi.vue';
import { useMeta } from 'vue-meta'

export default {
	name: 'HomeView',
	components: {
		HTag,
		ButtonLink,
		CardServices,
		PortfolioItem,
		FormVi
	},
	setup() {
		useMeta({
			title: 'Sprint-Site | Главная страница',
			htmlAttrs: { lang: 'ru', amp: true },
			meta: [{
				vmid: 'description',
				name: 'description',
				content: "Создание и доработка сайтов, по приемлемым ценам.Больше 10 лет в веб- разработке.",
			}, {
				vmid: 'robots',
				name: 'robots',
				content: "index,follow",
			},
			]
		}
		)
	},
	data() {
		return {
			slideq: [],
			about: [],
			prices: [],
			portfolio: [],
		};
	},
	async mounted() {
		this.$store.commit('INCREMENT_PRELODER', true);
		const resS = await fetch("https://sprint-site.ru/wp-json/wpcustomusers/v2/slider/");
		const abouts = await fetch('https://sprint-site.ru/wp-json/wpcustomusers/v2/homeab/');
		const prices = await fetch('https://sprint-site.ru/wp-json/wpcustomusers/v2/price/');
		const portfolios = await fetch('https://sprint-site.ru/wp-json/wpcustomusers/v2/potfolio3/');
		const aboutsq = await abouts.json();
		const slideq = await resS.json();
		const pricesq = await prices.json();
		const portfolioq = await portfolios.json();
		this.slideq = slideq;
		this.about = aboutsq;
		this.prices = pricesq;
		this.portfolio = portfolioq;
		this.$store.commit('INCREMENT_PRELODER', false);
	}
}
</script>
<style>
.carousel-inner {
	width: 100%;
}

.carousel-inner .carousel-item img {
	position: inherit !important;
	object-fit: cover !important;
	background-size: cover !important;
	width: auto !important;
	height: 100% !important;
	min-height: 100vh;
	max-width: none !important;
	width: 100% !important;
}

.carousel-inner .carousel-item .caption {
	top: 50%;
	bottom: 50%;
	background: #000000cf;
	height: -moz-fit-content;
	height: fit-content;
	filter: drop-shadow(2px 4px 6px black);
	position: absolute;
	left: 25%;
	padding: 20px;
	width: 50%;
	border-radius: 15px;
}

.carousel-inner .carousel-item .caption h2 {
	font-weight: 700;
	color: #01b8e5;
	opacity: 1;
	text-shadow: 0 0 10px #01b0db, 0 0 20px #01b0db, 0 0 30px #01b0db, 0 0 40px #01b0db;
}

.carousel-inner .carousel-item .caption p {
	color: white;
	margin: 30px 0px;
	text-shadow: 0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 30px #ffffff, 0 0 40px #ffffff;
}

/*about */
.about {
	display: flex;
	align-items: center;
}

.mg-sn-1 {
	background: url('../assets/bg-1.jpg') center bottom no-repeat;
	background-color: #161616;
	min-height: 800px;
	background-size: cover;
}

section.about .container {
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding-left: 3.75rem;
	padding-right: 3.75rem;
	width: 60%;
}

section.about .row {
	display: contents;
}

.about--left img {
	margin: 20px;
}

.about--left {
	display: contents;
	justify-content: flex-end;
	align-items: center;
}

.about--right {
	width: 80%;
	display: block;
	flex-wrap: wrap;
	justify-content: flex-start;
	text-align: left;
}

.clou a {
	float: left;
	margin-right: 30px !important;
}

section.about .col a {
	text-align: center;
	margin-top: 30px;
}

.clou p {
	margin-bottom: 1.875rem;
	color: #9e9e9f;
}

.about--right header h3 {
	line-height: 1;
	margin-bottom: 0.625rem;
	-webkit-font-smoothing: antialiased;
	font-size: 1.25rem;
	text-transform: uppercase;
	letter-spacing: 0;
}

.about--right header h2 {
	font-size: 3.75rem !important;
	letter-spacing: -.125rem;
	line-height: 1.1;
	margin-bottom: 1.25rem;
	-webkit-font-smoothing: antialiased;
	font-weight: 200;
}

/*price */
section.price {
	width: 100%;
	overflow: hidden;
}

section.price {
	background: url('../assets/bg-2.jpg');
}

section.price.mg-sn-2.slide-section {
	min-height: 520px;
}

.justify-content-center {
	justify-content: center !important;
}

section {
	height: fit-content;
}

/*message */
section.message {
	padding: 80px 0px;
	background: url('../assets/bg-3.jpg');
}

@media (max-width: 990px) {

	.about--left,
	.about--right {
		width: 100%;
	}

	section.about .container {
		display: block;
		width: 100%;
	}

	.price-items.block {
		margin-bottom: 25px;
		width: 95%;
	}

	.gx-3 article {
		margin-bottom: 25px;
	}

	.messagety .row div {
		width: 100%;
		margin-bottom: 25px;
	}

	.carousel-inner .carousel-item .caption {
		width: 90%;
		margin: auto;
		left: 4%;
		right: auto;
	}

	footer.footer {
		display: flex;
		justify-content: center;
		width: 100%;
	}

	footer.footer .content {
		width: 100%;
	}

	footer.footer .content .row ul {
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	footer #contact-footer li {
		border-bottom: 1px solid;
	}

	.menu_menju_container li {
		border-bottom: 1px solid;
		text-align: center;
		margin: auto;
		padding: 5px 0px;
	}

	.menu_menju_container li a {
		display: flex;
		text-decoration: none;
		color: #999;
		min-width: 250px;
		justify-content: flex-start;
	}

	footer h3 {
		text-align: center;
		border-bottom: 1px dotted;
		padding-bottom: 16px;
		display: block;
	}

	.fot_menu {
		margin-bottom: 20px;
	}
}
</style>
