<template>
	<base-layout page-title="All Memories">
		<template #actions-end>
			<ion-button router-link="/memories/add">
				<ion-icon slot="icon-only" :icon="addCircleOutline"></ion-icon>
			</ion-button>
		</template>
		<Memorylist :memories="memories.getMemories" />
	</base-layout>
</template>

<script setup lang="ts">
import { IonButton, IonIcon } from '@ionic/vue'
import { addCircleOutline } from 'ionicons/icons'
import { useMemoryStore } from '../store/'
import Memorylist from '@/components/memories/Memorylist.vue'

const memories = useMemoryStore()
</script>
