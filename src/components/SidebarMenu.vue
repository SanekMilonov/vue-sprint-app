<template>
	<div class="widget_title">
		<h3>{{ title }}</h3>
		<ul class="widget_list">
			<template v-for="post in data" :key="post.ID">
				<li class="widget_items"
					v-bind:class="`${post.name === this.$store.state.heiderlist.title ? 'active' : 'null'}`">
					<router-link :to='"/portfolio" + post.url' @:click="profcms(post.name, post.url)"
						class="widget_silka">{{
							post.name
						}}</router-link>
				</li>
			</template>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'CardPortfolio',
	props: {
		title: String,
		data: Array,
	},
	data() {
		return {
			page: 0,
		};

	},
	methods: {
		async profcms(menu, url) {
			console.log("NEW CLICK SIDEBAR MENU");
			console.log(menu);
			console.log(url);
			//this.page = menu;
			//this.page = menu;
			//cms_serves
			//this.$store.commit('INCREMENT_PAGE', menu);
			const portfolioj = await fetch(`https://sprint-site.ru/wp-json/wpcustomusers/v2${url}`);
			const portfolioq = await portfolioj.json();
			console.log(portfolioq);
			if (portfolioq.argsu.my_servec != undefined) {
				this.$store.commit('INCREMENT_MENUTITLE', 'servec');
				this.$store.commit('INCREMENT_HEIDER_HREF', portfolioq.argsu.my_servec);
			} else {
				this.$store.commit('INCREMENT_MENUTITLE', 'cms');
				this.$store.commit('INCREMENT_HEIDER_HREF', portfolioq.argsu.cms_serves);
			}
			window.scrollTo(0, 0);
			this.$store.commit('INCREMENT_HEIDER_LIST', menu);
			this.$store.commit('INCREMENT_HEIDER_CENIA', portfolioq.price);
			this.$store.commit('INCREMENT_HEIDER_IMG', portfolioq.img_site);
			this.$store.commit('INCREMENT_HEIDER_CONTENT', portfolioq.text);
			this.$store.commit('INCREMENT_PAGE', portfolioq.page);
			this.$store.commit('INCREMENT_PORTFOLIO', portfolioq.post);
			this.$store.commit('INCREMENT_MAXPAGE', portfolioq.max_num_pages);
		}
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.widget_title {
	margin-bottom: 40px;
}

.widget_title h3 {
	font-size: 2rem;
	display: flex;
	justify-content: flex-end;
	margin: auto;
	font-weight: bold;
	margin-bottom: 5px;
}

.widget_title .widget_list {
	padding: 0px;
}

.widget_title .widget_list .active {
	background: rgba(0, 204, 255, 0.2);
	border: 1px solid #00ccff;
}

.widget_title .widget_list .active a {
	color: #fff !important;
}

.widget_title .widget_list .widget_items {
	text-decoration: none !important;
	list-style: none !important;
	list-style-type: none !important;
	font-size: 18px;
	text-align: end;
	color: #00ccff;
	border: 1px solid #00ccff47;
	transition: background 230ms ease-in-out, color 230ms ease-in-out, border 230ms ease-in-out;
}

.widget_title .widget_list .widget_items:hover {
	background: rgba(0, 204, 255, 0.2);
	border: 1px solid #00ccff;
}

.widget_title .widget_list .widget_items:hover a {
	color: #fff !important;
}

.widget_title .widget_list .widget_items .widget_silka {
	text-decoration: none !important;
	list-style: none !important;
	list-style-type: none !important;
	text-align: end;
	color: #00ccff;
	display: block;
	font-size: 20px;
	font-weight: 700;
	padding: 15px;
}
</style>
