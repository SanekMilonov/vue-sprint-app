<template>
	<a class="btnfos btnfos-5" :href="href">
		<i v-if="title === 'address'">
			<font-awesome-icon icon="fa-solid fa-briefcase" />
		</i>
		<i v-else-if="title === 'briefcase'">
			<font-awesome-icon icon="fa-solid fa-address-card" />
		</i>
		<i v-else></i>
		{{ msg }}</a>
</template>

<script>
export default {
	name: 'ButtonLink',
	props: {
		href: String,
		title: String,
		msg: String
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btnfos {
	display: inline-block;
	margin-right: 2.5em;
}

.btnfos {
	color: #fff;
	cursor: pointer;
	display: block;
	font-size: 16px;
	font-weight: 400;
	line-height: 45px;
	max-width: 150px;
	margin: 0 auto 2em;
	position: relative;
	text-transform: uppercase;
	vertical-align: middle;
	width: 100%;
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
</style>