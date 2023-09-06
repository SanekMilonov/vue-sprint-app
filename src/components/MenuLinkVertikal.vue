<template>
	<div v-if="typ === 'bottom'">
		<h3>{{ title }}</h3>
		<div class="menu_menju_container">
			<div v-if="arr === 'menuarr'">
				<ul className='menu'>
					<li v-for="item in data.menuarr" :key="item.id">
						<router-link :to="item.path">{{ item.title }}</router-link>
					</li>
				</ul>
			</div>
			<ul v-else-if="arr === 'menuauslug'" class="uslugis">
				<li v-for="item in data.menuauslug" :key="item.id"
					v-bind:class="`${item.title === this.$store.state.heiderlist.title ? 'active' : 'null'}`">
					<router-link to='/portfolio' v-bind:class="`${this.click === item.id ? 'activsill' : 'diactivsill'}`"
						@:click="profcms(item.title, item.path, item.id)">
						{{ item.title
						}}</router-link>
				</li>
			</ul>
		</div>
	</div>
	<div v-else-if="typ === 'bottom_kont'">
		<h3>{{ title }}</h3>
		<ul class="menu_menju_container">
			<li v-for="item in data.menukontakt" :key="item.id">
				<a :href="item.path">
					<i v-if="item.title === 'Whatsapp'"><font-awesome-icon icon="fa-brands fa-whatsapp" /></i>
					<i v-else-if="item.title === 'Telegramm'"><font-awesome-icon icon="fa-brands fa-telegram" /></i>
					<i v-else-if="item.title === 'VK'"><font-awesome-icon icon="fa-brands fa-vk" /></i>
					<i v-else-if="item.title === 'E-Mail'"><font-awesome-icon icon="fa-regular fa-envelope" /></i>{{
						item.title }}</a>
			</li>
		</ul>
	</div>
	<div v-else>
		<h3>{{ title }}</h3>
		<div class="menu_menju_container">
			Не работает
		</div>
	</div>
</template>

<script>
export default {
	name: 'MenuLinksVue',
	props: {
		typ: String,
		title: String,
		arr: String,
		data: Array,
	},
	data() {
		return {
			click: 0,
		};
	},
	methods: {
		async profcms(menu, url, evnt) {
			console.log("MenuLinksVue");
			console.log(menu);
			console.log(url);
			//this.page = menu;
			//this.page = menu;
			//cms_serves
			//this.$store.commit('INCREMENT_PAGE', menu);
			this.click = evnt;
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
	/*setup(props) {
		//console.log(props.data.menukontakt)
	}*/
}
</script>

<style>
footer.footer a {
	color: #999;
	text-decoration: none;
	transition: all 180ms ease-in-out;
	list-style: none !important;
}

.uslugis a {
	color: #999;
	text-shadow: none;
}

.activsill,
li.active a,
ul.menu a.router-link-active {
	color: #02b1dc !important;
	text-shadow: 0 0 10px #01b0db, 0 0 20px #01b0db, 0 0 30px #01b0db, 0 0 40px #01b0db !important;
}

footer.footer .menu a.router-link-active.router-link-exact-active {
	color: #02b1dc;
	text-shadow: 0 0 10px #01b0db, 0 0 20px #01b0db, 0 0 30px #01b0db, 0 0 40px #01b0db;
}

footer.footer ul li {
	padding-left: 0px;
	position: inherit;
}

footer.footer ul {
	padding-left: 0px;
	position: inherit;
}

footer.footer ul li {
	list-style: none;
	display: flex;
}

footer h3 {
	color: #02b1dc;
	text-shadow: 0 0 10px #01b0db, 0 0 20px #01b0db, 0 0 30px #01b0db, 0 0 40px #01b0db;
	display: flex;
}

footer.footer ul li a:hover,
.uslugis a:hover {
	color: #0cf;
	text-shadow: 0 0 10px #01b0db, 0 0 20px #01b0db, 0 0 30px #01b0db, 0 0 40px #01b0db;
}

footer.footer ul li a i {
	/*font-size: 20px;*/
	margin-right: 20px;
}
</style>