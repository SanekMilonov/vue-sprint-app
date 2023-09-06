<template>
	<div class="about about_page bg0 bg4">
		<div class="container container">
			<div class="row my_row">
				<div class="about_img leftimagepicture col col-6 col_right">
					<img src="../assets/avatar.jpg" width="320" height="320" alt="Аватар" />
				</div>
				<div class="container right_about col col-6">
					<HTag :tag='"zagolovokhabout"' :msg='"КТО Я?"' class="tum" style="margin-top: 0%;" />
					<p>
						Здравствуйте! Меня зовут Александр. Со школьных лет увлекаюсь программированием. Начинал с AS2 потом
						перешел на AS3. Потом начал изучать JS написал свое первое расширение для Google. Потом перешел на
						разработку игр использовал unity и C++. Написал пару игр для Android, после этого увлекся созданием
						сайтов. Начинал с Joomla потом изучил PHP/CSS сделал пару сайтов PHP+HTML+MySQL. Перешел на
						wordpress, за время работы над сайтами перепробовал множество и других CMS. Получил сертификат по
						битриксу.
					</p>
				</div>
			</div>
		</div>
	</div>
	<section class="block_stati">
		<div class="stati">
			<HTag :tag='"zagolovokh2"' :msg='"Мои навыки"' />
			<template v-for=" item  in  stati " :key="item.ID">
				<Navik :procent='item.proc' :title='item.title' :years='item.year' />
			</template>
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
</template>
<script>
import HTag from '@/components/HTag.vue';
import Navik from '@/components/Navik.vue';
import PortfolioItem from '@/components/PortfolioItem.vue';

export default {
	name: 'AboutV',
	components: {
		HTag,
		Navik,
		PortfolioItem,
	},
	data() {
		return {
			portfolio: [],
			stati: [],
			value: 45,
			max: 100
		};
	},
	async mounted() {
		this.$store.commit('INCREMENT_PRELODER', true);
		const statis = await fetch('https://sprint-site.ru/wp-json/wpcustomusers/v2/stati/');
		const portfolios = await fetch('https://sprint-site.ru/wp-json/wpcustomusers/v2/potfolio3/');
		const portfolioq = await portfolios.json();
		const statiq = await statis.json();
		this.stati = statiq;
		this.portfolio = portfolioq;
		this.$store.commit('INCREMENT_PRELODER', false);

	}
}
</script>

<style scoped>
.tump h2 {
	margin-top: 0% !important;
}

.container {
	height: auto;
	display: block;
	padding: 25px 0px;
}

.content {
	min-height: 100vh;
	height: auto;
	width: 80%;
	margin: auto;
	padding: 15px 0px;
	display: flex;
}

.blockabout {
	align-items: center;
	flex-wrap: nowrap;
	margin: 0px !important;
}

.blockabout .div1 {
	grid-area: 0.0833333333;
}

.blockabout .div1 img {
	width: 40%;
	float: right;
}

.blockabout .div2 {
	grid-area: 0.0333333333;
	width: 31%;
}

.blockabout .div3 {
	grid-area: 0.0833333333;
}

.blockabout .div4 {
	grid-area: 0.1111111111;
}

.blockabout .div5 {
	grid-area: 0.125;
}

.blockabout .div6 {
	grid-area: 0.1333333333;
}

.pricecontent {
	height: 100%;
	display: grid;
	grid-template-rows: 1fr;
	grid-column-gap: 25px;
	grid-row-gap: 20px;
	width: 90%;
	padding: 0px;
	grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
	margin: 80px auto;
}

.leftimagepicture {
	-webkit-animation: morph 8s ease-in-out 1s infinite;
	animation: morph 8s ease-in-out 1s infinite;
	background-blend-mode: multiply;
	box-shadow: inset 0 0 0 9px white;
	border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
	overflow: hidden;
	border-radius: 50%;
	max-width: 320px;
	border: 10px solid rgba(255, 255, 255, 0.1);
	z-index: 1;
	float: right;
	width: 320px !important;
	padding: 0px !important;
	max-height: 320px;
}

.right_about {
	max-height: 320px;
	padding: 20px;
	margin: 0px 30px;
	background: #000000cf;
	text-align: center;
	border-radius: 25px;
	color: #999;
}

.right_about h2 {
	margin: auto;
}

.block_stati {
	padding-bottom: 60px;
	display: -webkit-box;
}

.block_stati .stati {
	width: 80%;
	margin: auto;
}

.blockportfolio {
	display: grid;
}

.prof3block {
	display: grid;
	grid-template-rows: 1fr;
	grid-column-gap: 25px;
	grid-row-gap: 50px;
	margin: 30px auto;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

@media (max-width: 1200px) {
	.about_page {
		height: auto;
	}

	.container {
		padding: 0px;
	}

	.container div {
		max-height: fit-content;
		height: fit-content;
		width: 100%;
		margin: 0%;
	}

	.block_stati .stati {
		width: 90%;
	}

	.blockabout .div1 {
		text-align: center;
	}

	.blockabout .div1 img {
		width: 40%;
		float: none;
	}

	.blockabout .div2 {
		width: 100%;
	}

	.pricecontent {
		margin: auto;
		padding: 80px;
	}

	.prof3block {
		padding: 50px 0px;
		margin: 0px;
	}

	.right_about {
		max-height: fit-content;
	}

	.leftimagepicture {
		width: fit-content !important;
		max-height: fit-content;
	}
}

@media (max-width: 600px) {
	.grid {
		width: 100%;
		flex-direction: column;
	}
}
</style>