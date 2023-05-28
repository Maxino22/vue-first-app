<template>
	<ion-img :src="memory?.image" :alt="memory?.title"></ion-img>
	<h2 class="ion-text-center">{{ memory?.title }}</h2>
	<p class="ion-text-center">{{ memory?.description }}</p>
</template>

<script setup lang="ts">
import { IonImg } from '@ionic/vue'
import memoryType from '../../types/memoryType'

defineProps({
	memory: {
		type: Object as () => memoryType,
	},
})
</script>

<style scoped>
h2 {
	font-weight: bold;
}
</style>
