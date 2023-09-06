<script>
import MenuLinksVue from '@/components/MenuLinkVertikal.vue'
//import IkonSite from '../../public/iconksite.svg';
const menukontakt = [
	{
		"id": "1",
		"title": "Whatsapp",
		"path": "https://wa.me/+79603823933?&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C+%D1%83+%D0%BC%D0%B5%D0%BD%D1%8F+%D0%B5%D1%81%D1%82%D1%8C+%D0%B2%D0%BE%D0%BF%D1%80%D0%BE%D1%81",
	}, {
		"id": "2",
		"title": "Telegramm",
		"path": "https://t.me/alexsix82",
	}, {
		"id": "3",
		"title": "VK",
		"path": "https://vk.com/id137306194",
	}, {
		"id": "4",
		"title": "E-Mail",
		"path": "malto:sanesk@bk.ru",
	}]
const menuarr = [
	{
		"id": "1",
		"title": "Главная",
		"path": "/",
	}, {
		"id": "2",
		"title": "Обо мне",
		"path": "/about/",
	}, {
		"id": "3",
		"title": "Услуги",
		"path": "/uslugi/",
	}, {
		"id": "4",
		"title": "Портфолио",
		"path": "/portfolio/",
	}]
const menuauslug = [
	{
		"id": "1",
		"title": "Landing page",
		"path": "/my_servec/landing_page/",
	}, {
		"id": "2",
		"title": "Простой сайт",
		"path": "/my_servec/simple_site/",
	}, {
		"id": "3",
		"title": "Интернет-магазин",
		"path": "/my_servec/online_store/",
	}, {
		"id": "4",
		"title": "Администрирование",
		"path": "/my_servec/administratirovanie/",
	}, {
		"id": "5",
		"title": "Доработка сайта и прочее",
		"path": "/portfolio/my_servec/development/",
	}]
export default {
	name: 'NavFooterVue',
	components: {
		MenuLinksVue
	},
	data: function () {
		return {
			menukontakt: menukontakt,
			menuarr: menuarr,
			menuauslug: menuauslug,
			currentDate: new Date,
		}
	}
}
</script>

<template>
	<div class="foots">
		<footer class="footer">
			<div class="content">
				<div class="row">
					<div class="col-lg-3 col-md-12 fot-logo">
						<img width="250" src="../../public/iconksite.svg" />
					</div>
					<div id="v-for-menukontakt" class="fot_menu col-lg-3 col-md-12">
						<MenuLinksVue :typ='"bottom"' :arr='"menuarr"' v-bind:data="{ menuarr }" :title='"Меню"' />
					</div>
					<div class="fot_menu col-lg-3 col-md-12">
						<MenuLinksVue :typ='"bottom"' :arr='"menuauslug"' :data="{ menuauslug }" :title='"Услуги"' />
					</div>
					<div class="fot_menu col-lg-3 col-md-12">
						<MenuLinksVue :typ='"bottom_kont"' :arr='"menukontakt"' :data="{ menukontakt }"
							:title='"Контакты"' />
					</div>
				</div>
			</div>
		</footer>
		<footer class="emd_bottom">
			<div class="content">
				<div class="row">
					<div class="col-md-12">
						<p><span>©</span> Copyright 2022 - {{ currentDate.getFullYear() }}
							<Link href="/">Sprint-Site.ru</Link>
						</p>
					</div>
				</div>
			</div>
		</footer>
	</div>
</template>

<style scoped>
.footer {
	background: #0B0B0B;
	padding: 7.5rem 0;
	position: inherit;
	font-size: 1rem;
	line-height: 1.6;
	width: 100%;
}

.footer svg {
	max-width: 160px;
	margin: auto;
	display: block;
}

.footer .fot_menu h3 {
	color: #02b1dc;
	text-shadow: 0 0 10px #01b0db, 0 0 20px #01b0db, 0 0 30px #01b0db, 0 0 40px #01b0db;
}

.footer a:hover {
	color: var(--gray-light);
}

.foots {
	display: block;
	overflow: hidden;
}

.foots .custom_logo_link svg {
	height: 160px;
	width: 160px;
}

.emd_bottom {
	padding: 0px;
	background: #000;
	border-top: 1px dotted #494949;
	color: #999;
	font-size: 0.75rem;
	text-align: center;
	position: inherit;
	line-height: 1.6;
	width: 100%;
}

.emd_bottom span {
	color: #02b1dc;
}

.emd_bottom a {
	color: #999;
	text-decoration: none;
}

.emd_bottom p {
	margin-bottom: 0;
	padding: 1.875rem 2.5rem;
}

@media (max-width: 990px) {
	.footer {
		padding: 3rem 0;
	}

	.footer svg {
		max-width: 160px;
		margin: auto;
		display: block;
	}

	.footer .fot_menu h3 {
		text-align: center;
		border-bottom: 1px dotted;
		padding-bottom: 16px;
	}
}

@media (max-width: 765px) {
	.footer {
		grid-template-columns: 1fr;
	}
}
</style>