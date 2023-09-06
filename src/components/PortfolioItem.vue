<template>
	<article data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500"
		class="aos-init col-lg-4 col-md-12 aos-animate" v-bind:class="{ activizin: upHere }" @mouseover="upHere = true"
		@mouseleave="upHere = false">
		<div class="item modal_item">
			<a :href='"/portfolio/" + href'>
				<div class="item_top">
					<img :src='src' />
					<p :href='href' class="category">{{ title }}</p>
					<some-component v-show="upHere"></some-component>
				</div>
				<div class="item_bottom">
					<div class="item_title">
						<h3>{{ prev }}</h3>
					</div>
				</div>
			</a>
			<div class="linia"></div>
			<div class="cub"></div>
		</div>
	</article>
</template>

<script>
export default {
	name: 'ButtonLink',
	data() {
		return {
			upHere: false
		}
	},
	props: {
		href: String,
		title: String,
		src: String,
		prev: String,
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.modal_item {
	background-color: #292929;
	overflow: hidden;
	cursor: pointer;
	min-height: 480px;
	position: relative;
}

.modal_item.activizin .linia {
	transition: all 1s ease-in-out;
	transition-delay: 1s;
	width: 100%;
	box-shadow: 0 0 10px #01b0db, 0 0 20px #01b0db, 0 0 30px #01b0db, 0 0 40px #01b0db;
}

.modal_item.activizin .cub {
	transition: all 1s ease-in-out;
	background: #00ccff;
	box-shadow: 0 0 10px #01b0db, 0 0 20px #01b0db, 0 0 30px #01b0db, 0 0 40px #01b0db;
}

.modal_item a {
	color: #fff;
	text-decoration: none;
}

.modal_item a .item_top {
	width: 100%;
	position: relative;
	overflow: hidden;
	max-height: 265px;
	z-index: 3;
}

.modal_item a .item_top img {
	background-size: contain;
	width: 100%;
	height: auto;
}

.modal_item a .item_top p {
	display: block;
	position: absolute;
	margin: 0px;
	white-space: nowrap;
	text-overflow: ellipsis;
	background: #0cf;
	color: #0B0B0B;
	font-size: 0.625rem;
	left: 0;
	letter-spacing: 2px;
	padding: 0.3125rem 0.625rem;
	text-transform: uppercase;
	max-width: 80%;
	width: fit-content;
	text-decoration: none;
	bottom: 0px;
	z-index: 99;
	height: 26px;
}

.modal_item a .item_top p:after {
	content: '';
	display: block;
	width: 0px;
	height: 0px;
	border-left: 19px solid transparent;
	border-right: 19px solid transparent;
	border-bottom: 19px solid #0cf;
	position: absolute;
	top: 10px;
	right: -25px;
	transform: rotate(225deg);
	z-index: 99;
}

.modal_item a .item_bottom {
	width: 100%;
	box-sizing: border-box;
	height: 250px;
}

.modal_item a .item_bottom .item_title {
	display: -webkit-flex;
	display: -moz-flex;
	display: -ms-flex;
	display: -o-flex;
	display: flex;
	-webkit-flex-direction: column;
	-moz-flex-direction: column;
	-ms-flex-direction: column;
	-o-flex-direction: column;
	flex-direction: column;
	-ms-align-items: flex-start;
	align-items: flex-start;
	margin-top: -15px;
	padding: 30px 21px;
	position: relative;
}

.modal_item a .item_bottom .item_title h3 {
	margin: 0;
	padding: 0;
	font-size: 18px;
	line-height: 32px;
	font-weight: 400;
}

.modal_item .linia {
	width: 0%;
	background: #00ccff;
	height: 2px;
	display: block;
	position: absolute;
	bottom: 0px;
	right: 0px;
	transition: all 1s ease-in-out;
}

.modal_item .cub {
	display: block;
	transform: rotate(135deg);
	width: 50px;
	height: 50px;
	background: rgba(0, 0, 0, 0.4);
	position: absolute;
	bottom: -25px;
	right: -25px;
	transition: all 1s ease-in-out;
	transition-delay: 1s;
}

.linia {
	width: 0%;
	background: #00ccff;
	height: 2px;
	display: block;
	position: absolute;
	bottom: 0px;
	right: 0px;
	transition: all 1s ease-in-out;
}

.cub {
	display: block;
	transform: rotate(135deg);
	width: 50px;
	height: 50px;
	background: rgb(0 0 0 / 40%);
	position: absolute;
	bottom: -25px;
	right: -25px;
	transition: all 1s ease-in-out;
	transition-delay: 1s;
}

.activizin .linia {
	transition: all 1s ease-in-out;
	transition-delay: 1s;
	width: 100%;
	box-shadow: 0 0 10px #01b0db, 0 0 20px #01b0db, 0 0 30px #01b0db, 0 0 40px #01b0db;
}

.activizin .cub {
	transition: all 1s ease-in-out;
	background: #00ccff;
	box-shadow: 0 0 10px #01b0db, 0 0 20px #01b0db, 0 0 30px #01b0db, 0 0 40px #01b0db;
}
</style>