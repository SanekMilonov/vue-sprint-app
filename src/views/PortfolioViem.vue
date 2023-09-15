<template>
	<HeiderPortfoli :img='this.$store.state.heiderlist.img' :title='this.$store.state.heiderlist.title'
		:contents='this.$store.state.heiderlist.contents' :arts="this.$store.state.heiderlist.arts" />
	<section class="portfolio_section bg0 bg1 ">
		<div class="portfolio_page">
			<div class="portfolio_items">
				<PortFolioList :page='this.$store.state.page' />
			</div>
			<div class="portfolio_seadbar">
				<SidebarMenu :data='my' :title='"Услуги"' />
				<SidebarMenu :data='cms' :title='"CMS"' />
			</div>
		</div>
		<Pagination :max_num_pages='portfolio.max_num_pages' :pages='portfolio.page' />
	</section>
</template>
<script>
function pereborpage(no) {
	var hop = 0;
	if (no == 0 || no == null) {
		hop = 1;
	} else {
		hop = no;
	}
	return hop;
}
import HeiderPortfoli from '@/components/HeiderPortfoli.vue';
//import CardPortfolio from '@/components/CardPortfolio.vue';
import PortFolioList from '@/components/PortfolioList.vue';
import Pagination from '@/components/Pagination.vue';
import SidebarMenu from '@/components/SidebarMenu.vue';
import { useMeta } from 'vue-meta'
export default {
	name: 'ServicesV',
	components: {
		HeiderPortfoli,
		//CardPortfolio
		PortFolioList,
		SidebarMenu,
		Pagination
	},
	data() {
		return {
			portfolio: [],
			my: [],
			cms: [],
			n: 0,
			page: 1,
		};
	}, setup() {

	},
	async mounted() {
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
		this.$store.commit('INCREMENT_PRELODER', true);
		console.log(this.$store.state.page)
		const lrt = this.$route.params.page;
		const ThisPage = pereborpage(lrt);
		this.$store.commit('INCREMENT_PAGE', ThisPage);
		console.log(this.$store.state.heiderlist);
		console.log(lrt);
		console.log(ThisPage);
		this.page = ThisPage;
		const portfolioj = await fetch(`https://sprint-site.ru/wp-json/wpcustomusers/v2/portfolio/?page=${this.page}`);
		const my_servecj = await fetch('https://sprint-site.ru/wp-json/wpcustomusers/v2/my_servec/');
		const cms_servesj = await fetch('https://sprint-site.ru/wp-json/wpcustomusers/v2/cms_serves/');
		//console.log(portfolioj);
		const portfolioq = await portfolioj.json();
		const my_servecq = await my_servecj.json();
		const cms_servesq = await cms_servesj.json();
		//console.log(portfolioq);
		this.portfolio = portfolioq;
		this.my = my_servecq;
		this.cms = cms_servesq;
		this.$store.commit('INCREMENT_PRELODER', false);
		this.$store.commit('INCREMENT_METADESCRIPT', this.$store.state.meta.title);
		this.$store.commit('INCREMENT_METATITLE', this.$store.state.meta.contents);
	}
}
</script>

<style scoped>
.portfolio_section {
	padding: 150px 0px;
}

.portfolio_section .portfolio_page {
	display: grid;
	grid-template-rows: 1fr;
	grid-template-columns: 80% 20%;
	grid-template-areas: "items sidbar";
	grid-gap: 0px;
	gap: 40px;
	height: 100%;
	width: 80%;
	margin: auto;
}

.portfolio_section .portfolio_page .portfolio_items {
	grid-area: items;
}

.portfolio_section .portfolio_page .portfolio_seadbar {
	grid-area: sidbar;
}

@media screen and (max-width: 1200px) {
	.portfolio_section {
		padding: 150px 0px;
	}

	.portfolio_section .portfolio_page {
		display: grid;
		grid-template-rows: 1fr;
		grid-template-columns: 100%;
		grid-template-areas: "sidbar" "items";
		grid-gap: 0px;
		gap: 40px;
		height: 100%;
		width: 80%;
		margin: auto;
	}
}
</style>