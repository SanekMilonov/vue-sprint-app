<template>
	<div v-if="tag === 'h1'">
		<h1 class="h1">{{ msg }}</h1>
	</div>
	<div v-else-if="tag === 'h2'">
		<h2 class="h2">{{ msg }}</h2>
	</div>
	<div v-else-if="tag === 'h3'">
		<h3 class="h3">{{ msg }}</h3>
	</div>
	<div v-else-if="tag === 'zagolovokh2'">
		<h2 class="zagolovokh2">{{ msg }}</h2>
	</div>
	<div v-else-if="tag === 'zagolovokhabout'">
		<h2 class="zagolovokhabout" style="margin-top: 0%;">{{ msg }}</h2>
	</div>
</template>

<script>
export default {
	name: 'HTag',
	props: {
		tag: String,
		msg: String
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.h1 {
	font-weight: 500;
	font-size: 26px;
	line-height: 35px;
	margin: 0;
}

.h2 {
	font-size: 3.75rem !important;
	letter-spacing: -.125rem;
	line-height: 1.1;
	margin-bottom: 1.25rem;
	-webkit-font-smoothing: antialiased;
	font-weight: 200;
	color: var(--white);
}

.zagolovokh2,
.zagolovokhabout {
	text-align: center;
	font-weight: 700;
	color: #01b8e5;
	opacity: 1;
	text-shadow: 0 0 10px #01b0db, 0 0 20px #01b0db, 0 0 30px #01b0db, 0 0 40px #01b0db;
}

.zagolovokh2 {
	margin-top: 100px;
}

.zagolovokhabout {
	margin-top: 0px;
}

.h3 {
	line-height: 1;
	margin-bottom: 0.625rem;
	-webkit-font-smoothing: antialiased;
	font-size: 1.25rem;
	text-transform: uppercase;
	color: #0cf;
	letter-spacing: 0;
	margin: 0;
	color: #0cf;
	text-shadow: 0 0 10px #01b0db, 0 0 20px #01b0db, 0 0 30px #01b0db, 0 0 40px #01b0db;
}

@media (max-width: 990px) {
	.zagolovokh2 {
		margin: 0px;
		padding: 50px 0px;
	}
}
</style>