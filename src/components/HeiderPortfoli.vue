<template>
	<section class="heiderprof">
		<div class="bag">
			<img :src='this.$store.state.heiderlist.img' :alt='this.$store.state.heiderlist.title' />
		</div>
		<div class="nlock_arxiv">
			<h1>{{ this.$store.state.heiderlist.title }}</h1>
			<div v-html='libText'></div>
			<div class="cenia" v-bind:class="`${this.$store.state.heiderlist.arts != 0 ? 'active' : 'null'}`">От {{
				this.$store.state.heiderlist.arts }} Руб.
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'HederPortfolio',
	props: {
		img: String,
		title: String,
		contents: String,
		arts: String
	},
	data() {
		return {
			cenia: this.$store.state.heiderlist.arts,
		}
	},
	computed: {
		libText: function () {
			// return directly html
			var str = this.$store.state.heiderlist.contents;
			return str;
		}
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.heiderprof {
	display: flex;
	align-items: center;
}

.cenia.null {
	display: none;
}

.bag img {
	width: 100%;
	height: 550px;
	object-fit: cover;
}

.bag {
	width: 100%;
}

.nlock_arxiv {
	position: absolute;
	display: block;
	align-items: center;
	width: 90%;
	color: #fff;
	background: rgba(52, 52, 52, 0.8117647059);
	mix-blend-mode: normal;
	backdrop-filter: blur(15px);
	overflow: hidden;
	padding: 24px;
	box-shadow: 0px 20px 53px -30px rgba(95, 102, 173, 0.57);
	border-radius: 10px;
	margin: auto 5%;
}

.nlock_arxiv h1 {
	text-align: left;
	margin-bottom: 15px;
}

.nlock_arxiv .cenia {
	text-align: right;
	margin-top: 15px;
}

.nlock_arxiv .cenia {
	color: var(--color-text);
	FONT-WEIGHT: 700;
	font-size: 2rem;
}
</style>
