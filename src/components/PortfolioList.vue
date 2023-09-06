<template>
	<template v-for="item  in  this.$store.state.portfolio " :key="item.ID">
		<CardPortfolio :url="item.post_name" :img="item.img" :title="item.post_title" :content="item.post_content"
			:color="item.color" />
	</template>
</template>

<script>
import CardPortfolio from '@/components/CardPortfolio.vue';
export default {
	name: 'PortFolioList',
	props: {
		type: Number,
		page: Number,
	},
	components: {
		CardPortfolio
	},
	data() {
		return {
			portfolio: [],
		};
	},
	computed: {
		getMessageObject() {
			// Вызываем геттер для получения сообщения
			return this.$store.getters.getMessageObject
		},
	},
	async mounted() {
		const portfolioj = await fetch(`https://sprint-site.ru/wp-json/wpcustomusers/v2/portfolio/?page=${this.$store.state.page}`);
		const portfolioq = await portfolioj.json();
		this.$store.commit('INCREMENT_PORTFOLIO', portfolioq.post);
		this.$store.commit('INCREMENT_MAXPAGE', portfolioq.max_num_pages);
		console.log(portfolioq);
		this.portfolio = portfolioq;
	}
}
</script>

<style scoped></style>