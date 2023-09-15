<template>
	<div class="progresso " v-bind:class="`${this.$store.state.preloder != false ? 'activio' : 'diactivio'}`">
		<img src="../public/logotip/preloder.gif" />
	</div>
	<the-navbars-vue />
	<metainfo></metainfo>
	<router-view />

	<NavFooterVue />
</template>


<script>
import TheNavbarsVue from '@/components/Navbars.vue';
import NavFooterVue from '@/components/NavFooter.vue';
export default {
	name: 'BootstrapExample',
	components: {
		TheNavbarsVue,
		NavFooterVue,
	},
}

</script>
<style>
@font-face {
	font-family: exo2_0_light;
	src: url('../src/assets/font/exo2_0_light.otf');
	font-weight: normal;
}

@font-face {
	font-family: exo2_0_bold;
	src: url('../src/assets/font/exo2_0_bold.otf');
	font-weight: normal;
}

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

div#app {
	overflow: hidden;
}

.activio {
	display: flex;
	align-items: center;
	justify-content: center;
}

.diactivio {
	display: none;
}

.progresso {
	width: 100%;
	height: 100vh;
	background: #000001;
	position: fixed;
	z-index: 999999999;
}

nav {
	padding: 30px;
}

nav a {
	font-weight: bold;
	color: #2c3e50;
}

nav a.router-link-exact-active {
	color: #42b983;
}

html,
body,
p {
	padding: 0;
	margin: 0;
	font-family: 'exo2_0_light' !important;
}


a {
	color: inherit;
	text-decoration: none;
}

* {
	box-sizing: border-box;
}

img {
	max-width: 100%;
	height: auto;
}

h1,
h2,
p,
ul {
	margin: 0;
}

ul {
	padding: 0;
	list-style: none;
}

button {
	padding: 0.5rem 1rem;
	font-weight: bold;
}

:root {
	--black: #000000;
	--gray-light: #EBEBEB;
	--white: #fff;
	--primary: #7653FC;
	--primary-hover: #0cf;
	--color-text: #0cf;
	--red: #FC836D;
	--green: #1DC37E;
	--green-light: #C8F8E4;
	--blue: #3f9df4;
	--azure: #0082FA;
	--textcolor: #999;
	--prof-green: linear-gradient(-80deg, rgba(121, 221, 9, 0.1), transparent 50%);
	--prof-blue: linear-gradient(-80deg, rgba(0, 118, 189, 0.1), transparent 50%);
	--profred: linear-gradient(-80deg, rgb(255 0 0 / 10%), transparent 50%);
	--prof-yellow: linear-gradient(-80deg, rgba(189, 187, 73, 0.1), transparent 50%);
	--text-shodow-color: 0 0 10px #01b0db,
		0 0 20px #01b0db,
		0 0 30px #01b0db,
		0 0 40px #01b0db;
	--text-shodow-white: 0 0 10px #fff,
		0 0 20px #fff,
		0 0 30px #fff,
		0 0 40px #fff;
}


body {
	background-color: var(--black) !important;
	color: var(--textcolor) !important;
}

body::-webkit-scrollbar {
	width: 15px;
	background-color: #272727;
	padding: 5px;
}

body::-webkit-scrollbar-thumb {
	border-radius: 10px;
	background-color: #D9D9D9;
}

.bg0 {
	background-color: #161616;
	background-size: cover;
}

.bg1 {
	background: url('../public/bg-1.jpg') center bottom no-repeat;
	background-size: cover;
	margin: 0px;
	width: 100%;
}

.bg2 {
	background: url('../public/bg-2.jpg') center bottom no-repeat;
	background-size: cover;
	min-height: auto;
}

.bg3 {
	background: url('../public/bg-3.jpg') center bottom no-repeat;
	background-size: cover;
}

.bg4 {
	background: url('../public/bg-4.jpg') center bottom no-repeat;
	background-size: cover;
}




.my_row {
	align-items: center;
	justify-content: center;
	padding: 80px 0px;
	height: 100vh;
}

.col_right img {
	margin: auto;
	display: block;
	margin-right: 10px;
}

.red::before {
	background-image: linear-gradient(-80deg, rgb(255 0 0 / 50%), transparent 50%) !important;
}

.yellow::before {
	background-image: linear-gradient(-80deg, rgb(189 187 73 / 50%), transparent 50%) !important;
}

.blue::before {
	background-image: linear-gradient(-80deg, rgb(0 118 189 / 50%), transparent 50%) !important;
}

.greens::before {
	background-image: linear-gradient(-80deg, rgb(121 221 9 / 50%), transparent 50%) !important;
}

.title_greens:hover {
	color: #79dd09 !important;
	text-shadow: 0 0 10px #79dd09, 0 0 20px #79dd09, 0 0 30px #79dd09, 0 0 40px #79dd09;
	z-index: 100;
}

.title_red:hover {
	color: #ff0e00 !important;
	text-shadow: 0 0 10px #bd150b, 0 0 20px #bd150b, 0 0 30px #bd150b, 0 0 40px #bd150b;
	z-index: 100;
}

.title_blue:hover {
	color: #02a0ff !important;
	text-shadow: 0 0 10px #0076bd, 0 0 20px #0076bd, 0 0 30px #0076bd, 0 0 40px #0076bd;
	z-index: 100;
}

.title_yellow:hover {
	color: #fffb00 !important;
	text-shadow: 0 0 10px #bdbb49, 0 0 20px #bdbb49, 0 0 30px #bdbb49, 0 0 40px #bdbb49;
	z-index: 100;
}

.postcard_bar_yellow {
	background-color: #bdbb49;
}

.postcard_bar_blue {
	background-color: #0076bd;
}

.postcard_bar_greens {
	background-color: #79dd09;
}

.postcard_bar_red {
	background-color: #bd150b;
}

.div50 {
	width: 50%;
}

@media screen and (max-width: 1200px) {
	.carousel-inner {
		min-height: 450px;
	}

	.red::before {
		background-image: linear-gradient(360deg, rgb(255 0 0 / 50%), transparent 50%) !important;
	}

	.yellow::before {
		background-image: linear-gradient(360deg, rgb(189 187 73 / 50%), transparent 50%) !important;
	}

	.blue::before {
		background-image: linear-gradient(360deg, rgb(0 118 189 / 50%), transparent 50%) !important;
	}

	.greens::before {
		background-image: linear-gradient(360deg, rgb(121 221 9 / 50%), transparent 50%) !important;
	}
}
</style>
