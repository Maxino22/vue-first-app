<template>
	<ion-item :router-link="`/memories/${memory.id}`">
		<ion-thumbnail slot="start">
			<ion-img :src="memory.image" :alt="memory.title"></ion-img>
		</ion-thumbnail>
		<ion-label>
			{{ memory.title }}
		</ion-label>
	</ion-item>
</template>

<script setup lang="ts">
import { IonItem, IonThumbnail, IonLabel, IonImg } from '@ionic/vue'
import memoryType from '../../types/memoryType'
defineProps({
	memory: {
		type: Object as () => memoryType,
		required: true,
	},
})
</script>
