<template>
	<base-layout :page-title="memory?.title" page-default-back-link="/memories">
		<MemoryOverview :memory="memory" />
	</base-layout>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useMemoryStore } from '../store/'
import { computed } from 'vue'
import MemoryOverview from '@/components/memories/MemoryOverview.vue'
const { id } = useRouter().currentRoute.value.params

const memories = useMemoryStore()

const memory = computed(() => {
	return memories.getMemories.find((mem) => mem.id === id)
})
</script>

<style scoped></style>
