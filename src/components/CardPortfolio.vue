<template>
	<article :class="'postcard ' + cvet">
		<router-link :to="{ name: 'portfoliosingle', params: { name: url } }" class="postcard_img_link">
			<img :src="img" />
		</router-link>
		<router-link :class="'postcard_link ' + titl" :to="{ name: 'portfoliosingle', params: { name: url } }">
			<div class="postcard_text">
				<h2 class="postcard_title">
					{{ title }}
				</h2>
				<div :class="'postcard_bar ' + bar"></div>
				<div class="postcard_preview_txt">{{ content }}</div>
			</div>
		</router-link>
	</article>
</template>

<script>
export default {
	name: 'CardPortfolio',
	props: {
		url: String,
		img: String,
		title: String,
		content: String,
		color: String
	},
	data() {
		return {
			page: 0,
			cvet: this.color,
			titl: 'title_' + this.color,
			bar: 'postcard_bar_' + this.color,
		};
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.postcard {
	flex-wrap: inherit;
	display: flex;
	box-shadow: 0 4px 21px -12px rgba(0, 0, 0, 0.66);
	border-radius: 10px;
	margin: 0 0 2rem 0;
	overflow: hidden;
	position: relative;
	color: #ffffff;
	background-color: #18151f;
}

.postcard:before {
	content: "";
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background-color: linear-gradient(-70deg, #424242, transparent 50%);
	opacity: 1;
	border-radius: 10px;
}

.postcard img {
	max-width: 500px;
	object-fit: cover;
	height: 100%;
}

.postcard .postcard_img_link {
	display: contents;
	z-index: 8;
}

.postcard .postcard_img_link img {
	max-width: 300px;
	height: auto;
	transition: transform 0.3s ease;
	object-fit: cover;
	z-index: 0;
}

.postcard .postcard_link {
	color: #fff;
	text-decoration: none;
	width: 100%;
}

.postcard .postcard_link .postcard_text {
	padding: 3rem;
	width: 100%;
	position: relative;
	display: flex;
	flex-direction: column;
}

.postcard .postcard_link .postcard_text:before {
	background: #18151f;
	left: -40px !important;
	transform: rotate(4deg);
	content: "";
	position: absolute;
	display: block;
	top: -20%;
	height: 130%;
	width: 55px;
}

.postcard .postcard_link .postcard_text h2 {
	font-size: 3rem;
	margin-bottom: 0.5rem;
	font-weight: 500;
	line-height: 1.2;
	z-index: 29;
}

.postcard .postcard_link .postcard_text h2 a {
	color: #fff;
	text-decoration: none;
}

.postcard .postcard_link .postcard_text .postcard_preview_txt {
	overflow: hidden;
	text-overflow: ellipsis;
	text-align: justify;
	height: 100%;
	color: #fff !important;
	text-shadow: none !important;
}

.postcard .postcard_link .postcard_text .postcard_bar {
	width: 50px;
	height: 3px;
	margin: 10px 0;
	border-radius: 5px;
	transition: width 2s ease;
}

.postcard .postcard_link:hover .postcard_bar {
	width: 100%;
}

@media screen and (max-width: 1200px) {
	.postcard {
		display: block;
	}

	.postcard .postcard_link .postcard_text {
		padding: 3rem 1rem;
	}

	.postcard .postcard_link .postcard_text:before {
		display: none;
	}

	.postcard .postcard_link .postcard_text h2 {
		font-size: 18px;
	}

	.postcard .postcard_link .postcard_text .postcard_preview_txt {
		text-align: inherit;
	}
}
</style>
