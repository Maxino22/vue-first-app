import { defineStore } from 'pinia'
import MemoryType from '../types/memoryType'
export const useMemoryStore = defineStore('memories', {
	state: () => ({
		memories: [
			{
				id: 'm1',
				image:
					'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/ff/d4/cb/mbabamb-3-largejpg.jpg?w=700&h=-1&s=1',
				title: 'A trip to the Coast',
				description: 'Enjoyed myself a lot ',
			},
			{
				id: 'm2',
				image:
					'https://cdn.pixabay.com/photo/2016/11/30/20/58/programming-1873854_1280.png',
				title: 'Learning Ionic',
				description: 'Learing with Max from youtube ',
			},
			{
				id: 'm3',
				image:
					'https://images.pexels.com/photos/14882030/pexels-photo-14882030.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
				title: 'Drinking at the club',
				description: 'Drinking at brew Bistro ',
			},
			{
				id: 'm4',
				image:
					'https://images.pexels.com/photos/4931332/pexels-photo-4931332.jpeg?auto=compress&cs=tinysrgb&w=1600',
				title: 'Making new friends',
				description: 'Always on tinder',
			},
		],
	}),

	getters: {
		getMemories(state) {
			return state.memories
		},
	},

	actions: {
		addMemory(memory: MemoryType) {
			this.memories.unshift(memory)
		},
	},
})
