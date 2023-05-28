<template>
	<base-layout page-title="Add a Memeory" page-default-back-link="/memories">
		<createMemoryForm @save-memory="saveMemory" />
	</base-layout>
</template>

<script setup lang="ts">
import createMemoryForm from '@/components/memories/createMemoryForm.vue'
import { useMemoryStore } from '../store/'
import memoryType from '../types/memoryType'
import { useRouter } from 'vue-router'

const router = useRouter()
const memories = useMemoryStore()

const saveMemory = (memoryData: memoryType) => {
	memories.addMemory(memoryData)
	router.replace('/memories')
}
</script>

<style scoped></style>
