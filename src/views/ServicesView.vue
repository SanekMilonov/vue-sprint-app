<template>
	<Head>
		<title>Услуги - Sprint Site</title>
		<meta name="description"
			content="Услуги, цены, описание и часто задаваемы вопросы. По созданию сайтов и их доработке" />
	</Head>
	<section class="uslugi_page bg0 bg3">
		<HTag :tag='"zagolovokh2"' :msg='"Услуги"' />

		<div class="uslugi_container container">
			<div class="row">
				<div class="uslugi_img col">
					<img src="../assets/inetforallnew.png" width="300" height="300" />
				</div>
				<div class="col">
					<div class="row">
						<div class="col-sm-6">
							<div class="card">
								<router-link to="/portfolio" class="card_body"
									@:click="profcms('Landing page', '/my_servec/landing_page/')">
									<h5 class="card_title">Landing page</h5>
									<p class="card_text">Простой и быстрый сайт. Состоящий из одной страницы. Подходит для
										небольших компаний, чтоб рассказать о себе.</p>
								</router-link>
							</div>
						</div>
						<div class="col-sm-6">
							<div class="card">
								<router-link to="/portfolio" class="card_body"
									@:click="profcms('Простой сайт', '/my_servec/simple_site')">
									<h5 class="card_title">Простой сайт</h5>
									<p class="card_text">Не большой легкий сайт. Как тот, га которым вы находитесь</p>
								</router-link>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-sm-6">
							<div class="card">
								<router-link to="/portfolio" class="card_body"
									@:click="profcms('Интернет магазин', '/my_servec/online_store')">
									<h5 class="card_title">Интернет магазин</h5>
									<p class="card_text">Сайт для продажи ваших товаров и услуг</p>
								</router-link>
							</div>
						</div>
						<div class="col-sm-6">
							<div class="card">
								<router-link to="/portfolio" class="card_body"
									@:click="profcms('Администрирование', '/my_servec/administratirovanie')">
									<h5 class="card_title">Администрирование</h5>
									<p class="card_text">Доработка и поддержка сайта на постоянной основе.Исправление багов
										и
										ускорение сайта</p>
								</router-link>
							</div>
						</div>
						<div class="col">
							<div class="card">
								<router-link to="/portfolio" class="card_body"
									@:click="profcms('Прочее', '/my_servec/development/')">
									<h5 class="card_title">Прочее</h5>
									<p class="card_text">Сюда входит доработка сайта, заполнение карточек товаров на вашем
										сайте.На озон и др.</p>
								</router-link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="uslugi_info bg0 bg1">
		<div class="container">
			<div class="spisok">
				<ul class="ulznat">
					<li>Я программист, а не дизайнер.(как можно видеть по моему сайту.Который я делал сам).По этому при
						оброщение ко мне вам следует обзавестись макетом сайта. И лучше на Figme. Если у вас нет макета вы
						можете посмотреть где его можно найти в следующем шаблоне</li>
					<li>Мне нужно ТЗ, в котором будет подробно расписан функционал сайта. Старайтесь все описать по
						подробнее. Где и что должно меняться, при наведение/скролле. Должны ли данные меняться в админке или
						они статичные и прочее</li>
					<li>Работаю при предоплате, бывают исключения</li>
				</ul>
			</div>
		</div>
	</section>
	<section class="uslugi_fqu bg0 bg1">
		<HTag :tag='"zagolovokh2"' :msg='"Часто задоваемые вопросы"' />



		<div class="spisok_accardion container">
			<div class="accordion" id="accordionExample">
				<div class="accordion-item">
					<h2 class="accordion-header">
						<button class="accordion-button" type="button" data-bs-toggle="collapse"
							data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Зачем нужна
							предоплата</button>
					</h2>
					<div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
						<div class="accordion-body">
							<p>В начале своей работе на фрилансе я брал плату только по окончанию работы. Но нашлись люди
								кторые
								либо пропадали,либо отказывались платить. И становиться жаль за потраченное время, так что
								теперь я работаю только по предоплате.</p>
						</div>
					</div>
				</div>
				<div class="accordion-item">
					<h2 class="accordion-header">
						<button class="accordion-button" type="button" data-bs-toggle="collapse"
							data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Если у вас нет
							шаблона</button>
					</h2>
					<div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
						<div class="accordion-body">
							<p>Вы можете заказать его на фриланс биржах.Найти в поисковике примеры сайтов, старайтесь не
								брать
								сайт
								полность, а частями. пример:"Хочу меню как на этом сайте (адресс сайта), а блок "обо мне"
								как на
								этом (адресс сайта) и т.д.
								<a href="https://themeforest.net/category/all">Можете посмотреть готовые шаблоный
									сайтов.</a>
								И по премеру с верху выбрать сайты по частям.
							</p>
						</div>
					</div>
				</div>
				<div class="accordion-item">
					<h2 class="accordion-header">
						<button class="accordion-button" type="button" data-bs-toggle="collapse"
							data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Условия
							предоставления услуг</button>
					</h2>
					<div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
						<div class="accordion-body">
							<ul>
								<li>Исполнитель обязуеться выполнить свою работу по ТЗ</li>
								<li>Заказчик может 3 раза вносить изменения после утверждения ТЗ.</li>
								<li>Стороны могут в любой момент отказаться друг от друга.Если работа была не доделана по
									ТЗ.Тогда Испонитель должен передать всю работу что успел выполнить заказчику.Заказчик
									должен
									оплатить часть работы от 30%-50% </li>
								<li>Исполнитель не несет ответственности за то что размещаеться на сайте</li>
								<li>Исполнитель отказываеться от всех прав на интелектульную собственность клиента</li>
								<li>{"Огронечения по должности 'Администратор'. 1-2 крупные задачи в месяц, и 10-15 постов в
									день"}</li>
								<li>Исполнитель не несет ни какой финансовой отвественности перед заказчиком</li>
								<li>Исполнитель не несет ответственность за поломку сайта третями лицами (Работа хостинга,
									взлом, ошибка другого программиста)</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
import HTag from '@/components/HTag.vue';
import { useMeta } from 'vue-meta'
export default {
	name: 'ServicesV',
	components: {
		HTag
	},
	data() {
		return {
			portfolio: [],
			stati: []
		};
	}, setup() {
		useMeta({
			title: 'Sprint-Site | Услуги',
			htmlAttrs: { lang: 'ru', amp: true },
			meta: [{
				vmid: 'description',
				name: 'description',
				content: "Услуги, цены, описание и часто задаваемы вопросы. По созданию сайтов и их доработке",
			}, {
				vmid: 'robots',
				name: 'robots',
				content: "index,follow",
			},
			]
		}
		)
	},
	methods: {
		async profcms(menu, url) {
			console.log("NEW CLICK SIDEBAR MENU");
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
.uslugi_info,
.uslugi_fqu {
	display: grid;
}

.uslugi_info .container,
.uslugi_fqu .container {
	width: 90%;
	margin: auto;
}

.uslugi_page {
	display: grid;
}

.uslugi_page .uslugi_container {
	padding: 40px 0px;
}

.uslugi_page .uslugi_container .uslugi_img {
	display: flex;
	justify-content: center;
	align-items: flex-start;
}

.uslugi_page .card {
	position: relative;
	display: flex;
	flex-direction: column;
	min-width: 0;
	word-wrap: break-word;
	background-clip: border-box;
	border-radius: 0.25rem;
	margin-bottom: 30px;
	border: 1px solid #f9fafb;
	border-radius: 5px;
	-webkit-transition: all 0.4s ease;
	transition: all 0.4s ease;
	position: relative;
	overflow: hidden;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
	min-height: 190px;
	background-color: #fff0 !important;
}

.uslugi_page .card:hover {
	transform: scale(1.1);
	border: 1px solid #00cafd;
	box-shadow: 0px -4px 20px 5px #01b0db;
}

.uslugi_page .card a {
	flex: 1 1 auto;
	padding: 1rem 1rem;
	backdrop-filter: blur(3px);
	text-decoration: none;
}

.uslugi_page .card a p {
	color: #fff;
}

.uslugi_page .card a .card_title {
	color: #0cf;
	margin-bottom: 0.5rem;
}

.uslugi_page .card a .card_body {
	backdrop-filter: blur(3px);
}

.uslugi_info .spisok {
	border: 1px solid #fff;
	border-radius: 28px;
	overflow: hidden;
	margin: 70px 0px;
}

.uslugi_info .spisok .ulznat {
	backdrop-filter: blur(20px);
	padding: 3rem;
	font-size: 2em;
	margin: auto;
	list-style: disc;
}

ul.ulznat {
	backdrop-filter: blur(20px);
	padding: 3rem;
	font-size: 2em;
	margin: auto;
	background-image: url('../assets/contact-shape.png');
	background-position: 50% 60%;
	background-size: cover;
	background-repeat: no-repeat;
	bottom: -2px;
	top: auto;
}

ul.ulznat {
	color: #999999 !important;
	text-align: start;
}

.uslugi_fqu .spisok_accardion {
	margin: 70px auto;
}

.uslugi_fqu .spisok_accardion ul {
	list-style: disc;
}

.uslugi_fqu .spisok_accardion button[aria-expanded="true"] {
	color: #ffffff;
	background-color: #02aed8;
	box-shadow: 1px 0px 20px 0px #01b8e5;
}

.uslugi_fqu .spisok_accardion button[aria-expanded="false"] {
	background: black;
	color: #fff;
	box-shadow: none;
}

@media screen and (max-width: 1200px) {

	.uslugi_info,
	.uslugi_fqu {
		display: block;
		padding-top: 50px;
	}

	.uslugi_page {
		display: block;
		padding-top: 90px;
		width: 100%;
		overflow: hidden;
	}

	.uslugi_page .uslugi_container .uslugi_img {
		display: none;
	}

	.uslugi_info .spisok .ulznat {
		padding: 1.2rem;
		font-size: 1em;
	}
}
</style>