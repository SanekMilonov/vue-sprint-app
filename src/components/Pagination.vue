<template>
	<div v-if="this.$store.state.maxpage != 1 || this.$store.state.maxpage != null"
		v-bind:class="`${this.$store.state.maxpage != 1 ? 'active' : 'pagination_null'}`">
		<ul class="pagination">
			<template v-for="n in this.$store.state.maxpage" :key="n">
				<template v-if="n == this.$store.state.page">
					<span class="active">{{ n }}</span>
				</template>
				<template v-else>
					<router-link @:click="perexod(n)" :to="{ name: 'portfolio', params: { page: n } }">{{ n }}</router-link>
				</template>
			</template>
		</ul>
	</div>
</template>

<script >
export default {
	name: 'PaginationV',
	data() {
		return {
			n: 0,
			page: this.$store.state.page,
			portfolioj: [],
		}
	},
	props: {
		max_num_pages: Number,
		pages: Number,
	},
	methods: {
		async perexod(pag) {
			console.log("NEW CLICK PAGINATION");
			//console.log(pag);
			var portfolioj = null;
			console.log(pag);
			console.log(this.$store.state.menutitle);
			console.log(this.$store.state.heiderlist.href);
			console.log(this.$store.state.page);
			switch (this.$store.state.menutitle) {
				case 'cms':
					portfolioj = await fetch(`https://sprint-site.ru/wp-json/wpcustomusers/v2/cms_serves/${this.$store.state.heiderlist.href}/?page=${pag}`);
					break;

				case 'servec':
					portfolioj = await fetch(`https://sprint-site.ru/wp-json/wpcustomusers/v2/my_servec/${this.$store.state.heiderlist.href}/?page=${pag}`);
					break;

				default:
					portfolioj = await fetch(`https://sprint-site.ru/wp-json/wpcustomusers/v2/portfolio/?page=${pag}`);
					break;
			}
			console.log(this.$store.state.heiderlist.href);
			console.log(portfolioj);
			const portfolioq = await portfolioj.json();
			console.log(portfolioq);
			this.page = pag;
			this.$store.commit('INCREMENT_PAGE', pag);
			this.$store.commit('INCREMENT_PORTFOLIO', portfolioq.post);
			this.$store.commit('INCREMENT_MAXPAGE', portfolioq.max_num_pages);
			//console.log(this.page);
			console.log(this.$store.state.page);
			window.scrollTo(0, 0);
		}
	},
}
</script>

<style scoped>
.pagination_null {
	display: none;
}

.pagination {
	border-radius: 40px;
	border: 2px solid #00ccff;
	overflow: hidden;
	width: fit-content;
	margin: 20px auto;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	background: #181818;
	box-shadow: 0 0 2px #00ccff, 0 0 2px #00ccff, 0 0 2px #00ccff, 0 0 20px #00ccff;
	padding: 0px;
}

.pagination .active {
	background-color: #00ccff !important;
	border: none !important;
	transform: skewX(344deg);
}

.pagination .active span {
	color: #fff !important;
	background: transparent !important;
	border: none;
}

.pagination a,
.pagination span {
	color: #fff;
	background-color: transparent;
	font-size: 22px;
	font-weight: 600;
	text-align: center;
	line-height: 43px;
	height: 45px;
	width: 55px;
	padding: 0;
	border: none;
	border-radius: 0;
	position: relative;
	z-index: 1;
	display: flow-root;
	text-decoration: none;
}

.pagination a:hover::after {
	border-radius: 0;
	transform: skewX(-16deg) scale(1);
}

.pagination a::before,
.pagination a::after {
	content: '';
	height: 100%;
	width: 100%;
	border: 1px solid #000;
	border-top: none;
	border-bottom: none;
	transform: skewX(-16deg);
	position: absolute;
	left: 0;
	top: 0;
	z-index: -1;
	transition: all 0.3s;
}

.pagination a:after {
	background-color: #00ccff;
	border: none;
	border-radius: 50%;
	transform: skewX(-16deg) scale(0);
}
</style>