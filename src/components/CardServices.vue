<template>
	<div class="col-lg-2 col-md-12 price-items block">
		<router-link to='portfolio' class="flipc" @:click="profcms(title, href)">
			<div class="flipper">
				<div class="front">
					<div class="overlay">
						<div class="inner">
							<h2>{{ title }}</h2>
						</div>
					</div>
				</div>
				<div class="back"
					:style="{ background: 'linear-gradient(115deg,' + color + ' 0%,#37b8ff 98.72611464968152%)' }">
					<div class="overlay">
						<div class="inner">
							<p>{{ prev }}</p>
							<h3>От {{ cena }} ₽</h3>
						</div>
					</div>
				</div>
			</div>
		</router-link>
	</div>
</template>

<script>
export default {
	name: 'ButtonLink',
	props: {
		href: String,
		title: String,
		prev: String,
		cena: String,
		color: String,
	},
	methods: {
		async profcms(menu, url) {
			console.log("ButtonLink");
			console.log(menu);
			console.log(url);
			//this.page = menu;
			//this.page = menu;
			//cms_serves
			//this.$store.commit('INCREMENT_PAGE', menu);
			this.$store.commit('INCREMENT_PRELODER', true);
			const portfolioj = await fetch(`https://sprint-site.ru/wp-json/wpcustomusers/v2${url}`);
			const portfolioq = await portfolioj.json();
			this.$store.commit('INCREMENT_PRELODER', false);
			console.log(portfolioq);
			this.$store.commit('INCREMENT_MENUTITLE', 'servec');
			this.$store.commit('INCREMENT_HEIDER_HREF', portfolioq.argsu.my_servec);
			window.scrollTo(0, 0);
			this.$store.commit('INCREMENT_HEIDER_LIST', menu);
			this.$store.commit('INCREMENT_HEIDER_CENIA', portfolioq.price);
			this.$store.commit('INCREMENT_HEIDER_IMG', portfolioq.img_site);
			this.$store.commit('INCREMENT_HEIDER_CONTENT', portfolioq.text);
			this.$store.commit('INCREMENT_PAGE', portfolioq.page);
			this.$store.commit('INCREMENT_PORTFOLIO', portfolioq.post);
			this.$store.commit('INCREMENT_MAXPAGE', portfolioq.max_num_pages);
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flipc,
.front,
.back {
	width: 100%;
	height: 100%;
	text-align: center;
	display: block;
	border: 0.2 silid #000000;
	border-radius: 4px;
	min-height: 200px;
	min-width: 280px;
}

.flipc:hover .flipper {
	transform: rotateY(180deg);
}

.flipc .flipper {
	transition: 0.8s;
	transform-style: preserve-3d;
	position: relative;
	height: 100%;
	width: 100%;
	align-items: center;
	border-radius: 3px;
	perspective: 1000px;
}

.flipc .flipper .front {
	background: rgba(58, 57, 57, 0.98);
	-webkit-transform: none;
	-ms-transform: none;
	transform: none;
	z-index: 1;
}

.flipc .flipper .front h2 {
	color: #fff;
}

.flipc .flipper .back {
	transform: rotateY(180deg);
	-webkit-transform: rotateX(0) rotateY(-180deg);
}

.flipc .flipper .inner {
	-webkit-transform: translateZ(90px) scale(0.91);
	transform: translateZ(130px) scale(0.91);
}

.flipc .flipper .inner p {
	min-height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0px -15px;
	border-left: 0px;
	border-right: 0px;
	font-size: 12pt;
	color: black;
}

.flipc .flipper .inner h3 {
	color: #fff;
	margin: 0px -15px;
	padding: 15px 0px;
}

.flipc .flipper .overlay {
	-webkit-transform-style: preserve-3d;
	transform-style: preserve-3d;
	-webkit-transform: translateZ(0.1px);
	transform: translateZ(0.1px);
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
}

.flipc .flipper .front,
.flipc .flipper .back {
	backface-visibility: hidden;
	position: absolute;
	border-radius: 3px;
	-webkit-transform-style: preserve-3d;
	transform-style: preserve-3d;
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
}
</style>