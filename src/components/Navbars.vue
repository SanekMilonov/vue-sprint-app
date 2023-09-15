<template>
	<div class="Navbarsvue">
		<nav class="navbar navbar-expand-lg bg-body-tertiary">
			<div class="container-fluid">
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
					aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav m-auto me-0">
						<li class="nav-item">
							<router-link to="/">Home</router-link>
						</li>
						<li class="nav-item">
							<router-link to="/about">Обо мне</router-link>
						</li>
						<li class="nav-item">
							<router-link to="/uslugi">Услуги</router-link>
						</li>
						<li class="nav-item">
							<router-link to="/portfolio" @:click="profstandart()">Портфолио</router-link>
						</li>
					</ul>
					<ul id="top-nav-ul" class="nav navbar-nav menu_navigator top-menu kontakt-menu">
						<li class="nav-item">
							<a href="https://wa.me/+79603823933?&text=Здравствуйте%2C+у+меня+есть+вопрос">
								<font-awesome-icon icon="fa-brands fa-whatsapp" />
							</a>
						</li>
						<li class="nav-item">
							<a href="https://t.me/alexsix82">
								<font-awesome-icon icon="fa-brands fa-telegram" />
							</a>
						</li>
						<li class="nav-item">
							<a href="https://vk.com/id137306194">
								<font-awesome-icon icon="fa-brands fa-vk" />
							</a>
						</li>
						<li class="nav-item">
							<a href="malto:sanesk@bk.ru">
								<font-awesome-icon icon="fa-regular fa-envelope" />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</div>
</template>

<script>
export default {
	name: 'NavbarsVue',
	methods: {
		async profstandart() {
			this.$store.commit('INCREMENT_PRELODER', true);
			const portfolioj = await fetch(`https://sprint-site.ru/wp-json/wpcustomusers/v2/portfolio/`);
			const portfolioq = await portfolioj.json();
			this.$store.commit('INCREMENT_PRELODER', false);
			console.log(portfolioq);
			this.$store.commit('INCREMENT_MENUTITLE', 'portfolio');
			this.$store.commit('INCREMENT_HEIDER_HREF', 'null');
			window.scrollTo(0, 0);
			this.$store.commit('INCREMENT_HEIDER_LIST', "Портфолио");
			this.$store.commit('INCREMENT_HEIDER_CENIA', 0);
			this.$store.commit('INCREMENT_HEIDER_IMG', "/Hederprof/macbook.jpg");
			this.$store.commit('INCREMENT_HEIDER_CONTENT', "Здесь собрана небольшая часть сайтов над которыми я работал.К сожалению большую часть сайтов я потерял при переустановке виндус. Еще часть сайтов прекратили свое существование или изменили дизайн.Некоторые мне удалось восстановить из архивов, но не все.");
			this.$store.commit('INCREMENT_PAGE', portfolioq.page);
			this.$store.commit('INCREMENT_PORTFOLIO', portfolioq.post);
			this.$store.commit('INCREMENT_MAXPAGE', portfolioq.max_num_pages);
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav.navbar {
	background: rgba(11, 11, 11, 0.1);
	display: flex;
	align-items: center;
	position: absolute;
	width: 100%;
	z-index: 99999999;
	padding: 0px;
}

nav .collapse {
	height: 72px;
}

ul.navbar-nav {
	background: #0b0b0be6;
	height: 72px;
}

ul.navbar-nav {
	justify-content: flex-end !important;
	margin-right: 0px !important;
}

div#navbarSupportedContent {
	justify-content: flex-end !important;
}

nav .container-fluid {
	padding-right: 0px;
	background: rgb(11 11 11 / 28%);
	position: absolute;
	top: 0px;
	z-index: 9999999999999999999999999999999;
}

.navbar-nav>li>a {
	height: 72px;
	padding: 27px 20px;
	transition: all 450ms ease-in-out;
	padding-left: 20px;
	padding-right: 20px;
	background: rgba(11, 11, 11, 0.9);
	color: #fff;
	text-decoration: none;
	display: block;
	position: relative;
}

.Navbarsvue a.router-link-active.router-link-exact-active {
	color: #0cf;
}

.Navbarsvue a.router-link-active.router-link-exact-active:after {
	background-color: #0cf;
	width: 100%;
}

.navbar-nav>li:hover>a {
	color: #0cf;
}

.navbar-nav>li:hover>a:after {
	background-color: #0cf;
	width: 100%;
	margin-bottom: -24px;
}

.navbar-nav>li>a:after {
	background: #0cf;
	content: '';
	display: block;
	height: 0.0625rem;
	position: absolute;
	bottom: 0px;
	left: 50%;
	margin-bottom: 0px !important;
	width: 0;
	transform: translate(-50%, 0);
	transition: all 450ms ease-in-out;
	margin-bottom: -24px;
	box-shadow: 0 0 10px #01b0db, 0 0 20px #01b0db, 0 0 30px #01b0db, 0 0 40px #01b0db;
}

.router-link-active {
	color: #0cf !important;
}

.router-link-active:after {
	background-color: #0cf !important;
	width: 100% !important;
}

@media (max-width: 990px) {
	ul.navbar-nav {
		height: auto;
	}

	nav .container-fluid {
		padding: 0px;
	}

	.Navbarsvue nav li {
		position: inherit;
		display: block;
		width: 100%;
		text-align: center;
		text-align: left;
		border-bottom: 2px solid;
	}

	.Navbarsvue nav .kontakt-menu li {
		display: inline-block;
		width: auto;
		border-bottom: 0px;
		text-align: left;
		position: inherit;
	}

	.kontakt-menu {
		display: flex;
		flex-direction: row-reverse;
	}
}
</style>
