<template>
	<section class="portfolio_section bg0 bg4">
		<div class="conter container">
			<div class="row">
				<div class="col col-md-12">
					<HTag :tag='"zagolovokh2"' :msg='portfolio.post_title' />
					<div>
						<p v-html='portfolio.post_content'></p>
					</div>
					<div class="row">
						<div class="col col-md-6 tax">
							<h3 class="speed_uslugi">CMS</h3>
							<template v-for="item in portfolio.cms" :key="item.id">
								<router-link :to='"/portfolio/cms_serves/" + item.slug'>{{ item.name }}</router-link>
							</template>
						</div>
						<div class="col col-md-6 tax">
							<h3 class="speed_uslugi">Услуги</h3>
							<template v-for="item in portfolio.servic" :key="item.id">
								<router-link :to='"/portfolio/my_servec/" + item.slug'>{{ item.name }}</router-link>
							</template>
						</div>
					</div>
					<template v-if="portfolio.do_mob != 0">
						<h2 style="margin-top: 60px;margin-bottom: 40px;text-align: center;">Скорость на мобильном</h2>
						<div class="row">
							<Speed :title='"До"' :num="portfolio.do_mob" :id="1" :typ='"bottom"' />
							<Speed :title='"После"' :num="portfolio.posle_mob" :id="2" :typ='"bottomy"' />
						</div>

						<h2 style="margin-top: 60px;margin-bottom: 40px;text-align: center;">Скорость на ПК</h2>
						<div class="row">
							<Speed :title='"До"' :num="portfolio.do_pk" :id="3" :typ='"bottom"' />
							<Speed :title='"После"' :num="portfolio.posle_pk" :id="4" :typ='"bottomy"' />
						</div>
					</template>
				</div>
			</div>
		</div>
	</section>
	<section class="portfolio_section portfolio_site bg0 bg1">
		<h2>Изображение сайта</h2>
		<p>*Некторые сайты прекратили свое существование или были полность изменены. Изображение взяты из архивов. и могут
			быть искажены</p>
		<div data-aos="zoom-in" class="new_nout aos-init aos-animate">
			<div class="nout_ekran">
				<img :src='portfolio.img_site' :alt='portfolio.post_title' fill="true" />
			</div>
			<div class="nout_bottom">
				<img src="../../public/klava.png" />
			</div>
		</div>
	</section>
	<template v-if="!izmenenie">
		<section class="portfolio_section portfolio_izmenenie bg0 bg3">
			<h2>Список изменений сайта</h2>
			<div class="timeline">
				<div v-for="item in izmendan" :key="item.id" class="timeline_movement row"
					v-bind:class="`${item.id % 2 ? 'timeline_left' : 'timeline_right'}`">
					<div class="timeline_badge"></div>
					<aos-vue v-bind:data-aos="`${item.id % 2 ? 'fade-left' : 'fade-right'}`"
						class="timeline_itemo col-sm-6 timeline-item aos-init">
						<div class=" row">
							<div class="col-sm-12">
								<span></span>
								<div class="timeline_item">
									<p class="title">{{ item.text_site_izmen }}</p>
								</div>
							</div>
						</div>
					</aos-vue>
				</div>
			</div>
		</section>
	</template>
	<section class="portfol mg-sn-1 slide-section" style="padding-top: 70px;">
		<HTag :tag='"zagolovokh2"' :msg="'Портфолио'" style="margin-bottom: 25px" />
		<div class="container">
			<div class="row gx-3">
				<template v-for=" item  in  portfolio3 " :key="item.ID">
					<PortfolioItem :href='item.post_name' :title='item.post_title' :src='item.img'
						:prev='item.post_content' />
				</template>
			</div>
		</div>
	</section>
</template>
<script>
import HTag from '@/components/HTag.vue';
import Speed from '@/components/SpeederBue.vue';
import PortfolioItem from '@/components/PortfolioItem.vue';
import { useMeta } from 'vue-meta'
export default {
	name: 'ServicesV',
	components: {
		HTag, Speed, PortfolioItem
	},
	data() {
		return {
			portfolio: [],
			portfolio3: [],
			izmendan: [],
			num: 0,
		};
	},
	setup() {
	},
	computed() {
		useMeta(
			{
				title: 'Sprint-Site | ' + this.$store.state.meta.title,
				htmlAttrs: { lang: 'ru', amp: true },
				meta: [{
					vmid: 'description',
					name: 'description',
					content: this.$store.state.meta.contents,
				}, {
					vmid: 'robots',
					name: 'robots',
					content: "index,follow",
				},
				]
			}
		)
	},
	async mounted() {
		this.$store.commit('INCREMENT_PRELODER', true);
		console.log("SINGLE_PROFEL");
		console.log(this.$store);
		console.log(this.$route.href);
		const portfolioj = await fetch(`https://sprint-site.ru/wp-json/wpcustomusers/v2${this.$route.href}`);
		const portfolioq = await portfolioj.json();
		console.log(portfolioq);
		this.$store.commit('INCREMENT_METADESCRIPT', portfolioq.post_content);
		this.$store.commit('INCREMENT_METATITLE', portfolioq.post_title);
		const portfolios = await fetch('https://sprint-site.ru/wp-json/wpcustomusers/v2/potfolio3/');
		const portfolioqq = await portfolios.json();
		console.log(portfolioqq);
		this.portfolio = portfolioq;
		this.portfolio3 = portfolioqq;
		this.izmendan = portfolioq.izmenenie;
		this.$store.commit('INCREMENT_PRELODER', false);
	}
}
</script>

<style scoped>
.portfolio_section {
	overflow: hidden;
	min-height: 100vh;
}

.portfolio_section .conter {
	padding-top: 120px;
}

.portfolio_section .conter p,
.portfolio_section p {
	color: #cdcdcd;
	text-align: left;
	margin-top: 30px;
	margin-bottom: 1rem;
}

.portfolio_section p {
	font-size: 2rem;
}

.portfolio_section a {
	color: var(--white);
	font-size: 21px;
	margin: 5px 10px;
	transition: all 180ms ease-in-out;
}

.portfolio_section a:hover {
	color: var(--color-text);
}

.portfolio_section .speed_uslugi {
	margin-top: 30px;
	text-shadow: var(--text-shodow-color);
	color: var(--color-text);
}

.portfolio_section .speed_titel {
	text-align: center;
	padding: 10px 0px;
	margin-top: 25px;
}

.portfolio_section .speedZagolovok,
.portfolio_section .speedItems,
.portfolio_section .indicator {
	display: flex;
	justify-content: center;
	padding: 7px 0px;
}

.portfolio_section .indicator {
	font-size: 2rem;
	margin-top: -110px;
	font-weight: 700;
}

.portfolio_section h2 {
	color: var(--color-text);
	font-size: 2em;
	text-shadow: var(--text-shodow-color);
}

.portfolio_site {
	overflow: hidden;
}

.portfolio_site h2,
.portfolio_site p {
	text-align: center;
	font-size: 20px;
}

.portfolio_site h2 {
	color: var(--color-text);
	font-size: 2em;
	text-shadow: var(--text-shodow-color);
	padding: 40px 0px;
}

.portfolio_site .nout_ekran {
	height: 290px;
	width: 641px;
	margin: auto;
	margin-bottom: -12px;
	overflow: auto;
	border: 12px solid #bbbbbb;
	border-radius: 10px 10px 0px 0px;
}

.portfolio_site .nout_ekran img {
	position: inherit !important;
	width: 600px !important;
	height: auto !important;
	width: auto !important;
	min-width: 600px;
}

.portfolio_site .nout_bottom img {
	position: inherit !important;
	width: 800px !important;
	margin: auto;
	display: block;
	padding-bottom: 70px;
}

.timeline {
	list-style: none;
	position: relative;
	margin: 50px auto;
	width: 90%;
}

.timeline:before {
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

.portfolio_izmenenie {
	overflow: hidden;
}

.portfolio_izmenenie h2 {
	color: var(--color-text);
	font-size: 2em;
	text-shadow: var(--text-shodow-color);
	padding: 40px 0px;
	text-align: center;
}

.portfolio_izmenenie .timeline_movement {
	position: relative;
	margin-bottom: 10rem;
	list-style: none;
	position: relative;
	margin: 50px auto;
	width: 90%;
}

.portfolio_izmenenie .timeline_movement .timeline_badge {
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

.portfolio_izmenenie .timeline_movement .timeline_item {
	position: relative;
	background-color: rgba(255, 255, 255, 0.2);
	padding: 14px;
	border-radius: 6px;
	box-shadow: 0 0 4px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.08);
	color: #fff;
	width: fit-content;
}

.portfolio_izmenenie .timeline_left .timeline_item {
	margin: auto;
	margin-right: 10px;
}

.portfolio_izmenenie .timeline_right .timeline_item {
	margin: auto;
	margin-left: 10px;
}

.timeline_right {
	justify-content: flex-end;
}

.timeline_right .timeline_item {
	display: flex;
	justify-content: flex-start;
}

.timeline_left .timeline_item {
	display: flex;
	justify-content: flex-end;
}

.timeline_movement .fade-right {
	display: flex;
	justify-content: flex-start;
	text-align: left;
}

.timeline_movement .fade-left p {
	text-align: right;
}

.timeline_left {
	justify-content: flex-start;
}

@media screen and (max-width: 1024px) {
	.portfolio_section a {
		display: block;
	}

	.portfolio_site .nout_ekran {
		max-height: 240px;
	}

	.portfolio_site .nout_ekran img {
		min-width: 400px;
	}

	.timeline_itemo {
		margin: auto !important;
		margin-top: 45px !important;
		width: 100% !important;
	}

	.timeline_itemo div {
		background: black;
		width: 100% !important;
		text-align: center;
		padding: 0px;
	}
}

@media screen and (max-width: 600px) {
	.portfolio_section a {
		display: block;
	}

	.portfolio_site .nout_ekran {
		height: auto;
		max-height: 500px;
		width: fit-content;
		margin: auto;
		margin-bottom: 60px;
		overflow: auto;
		border: 12px solid #bbbbbb;
		border-radius: 10px 10px 10px 10px;
	}

	.portfolio_site .nout_ekran img {
		position: inherit !important;
		width: auto !important;
		height: auto !important;
		width: auto !important;
		min-width: 200px;
	}

	.portfolio_site .nout_bottom {
		display: none;
	}

	.timeline_itemo {
		margin: auto !important;
		margin-top: 45px !important;
		width: 100% !important;
	}

	.timeline_itemo div {
		background: black;
		width: 100% !important;
		text-align: center;
	}
}
</style>