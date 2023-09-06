<template>
	<img :src="src" />
</template>

<script>
export default {
	name: 'KartInki',
	props: {
		src: String,
	}
}
</script>