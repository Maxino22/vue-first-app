<template>
	<ion-list>
		<MemoryListItem
			v-for="memory in memories"
			:key="memory.id"
			:memory="memory"
		/>
	</ion-list>
</template>

<script setup lang="ts">
import { IonList } from '@ionic/vue'
import MemoryListItem from './MemoryListItem.vue'
import memoryType from '../../types/memoryType'

defineProps({
	memories: {
		type: Array as () => memoryType[],
		required: true,
	},
})
</script>
