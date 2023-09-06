<template>
	<section class='bg0 bgerr'>
		<Container class="container">
			<div>
				<h1 class="err" title="404!">404!</h1>
				<router-link to="/" class="btnfos btnfos-5">На главную</router-link>
			</div>
		</Container>
	</section>
</template>
<script>

export default {
	name: 'ErrorViem',
	components: {
	},
	data() {
		return {
		};
	},
	async mounted() {
	}
}
</script>

<style scoped>
/*404*/
.bgerr {
	background: url('../../public/eror.jpg') center bottom no-repeat;
	background-size: cover;
	min-height: 100vh;
}

.btnfos-5 i:before {
	padding-right: 10px;
}

.btnfos-5 {
	border: 0 solid;
	box-shadow: inset 0 0 20px rgb(255 255 255);
	outline: 1px solid;
	outline-color: rgba(255, 255, 255, 0);
	outline-offset: 0px;
	text-shadow: none;
	-webkit-transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
	transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
	outline-color: rgb(255 255 255);
	outline-offset: 0px;
	text-decoration: none;
	color: #fff !important;
	text-align: center;
	font-size: 2em;
}

.btnfos-5:hover {
	border: 1px solid;
	box-shadow: inset 0 0 20px rgb(0 204 255), 0 0 20px rgb(0 204 255);
	outline-offset: 15px;
	outline-color: rgba(255, 255, 255, 0);
	text-shadow: 1px 1px 2px #00ccff;
	color: #fff;
	text-decoration: none;
}

.bgerr .container {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
}

h1.err {
	font-size: 10em;
	color: #fff;
}

.err {
	animation: glitch 1s linear infinite;
}

@keyframes glitch {

	2%,
	64% {
		transform: translate(2px, 0) skew(0deg);
	}

	4%,
	60% {
		transform: translate(-2px, 0) skew(0deg);
	}

	62% {
		transform: translate(0, 0) skew(5deg);
	}
}

.err:before,
.err:after {
	content: attr(title);
	position: absolute;
	left: 0;
}

.err:before {
	animation: glitchTop 1s linear infinite;
	clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
	-webkit-clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
}

@keyframes glitchTop {

	2%,
	64% {
		transform: translate(2px, -2px);
	}

	4%,
	60% {
		transform: translate(-2px, 2px);
	}

	62% {
		transform: translate(13px, -1px) skew(-13deg);
	}
}

.err:after {
	animation: glitchBotom 1.5s linear infinite;
	clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
	-webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
}

@keyframes glitchBotom {

	2%,
	64% {
		transform: translate(-2px, 0);
	}

	4%,
	60% {
		transform: translate(-2px, 0);
	}

	62% {
		transform: translate(-22px, 5px) skew(21deg);
	}
}

a.btnfos.btnfos-5 {
	display: block;
	margin: auto;
	padding: 8px;
}

/*end 404*/
</style>