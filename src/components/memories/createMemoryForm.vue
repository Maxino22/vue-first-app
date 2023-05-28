<template>
	<form @submit.prevent="submitForm" classs="ion-padding">
		<ion-list>
			<ion-item>
				<ion-label aria-label="Title" position="floating">Title</ion-label>
				<ion-input v-model="title" type="text" required></ion-input>
			</ion-item>
			<ion-item>
				<ion-thumbnail slot="start">
					<ion-img :src="chosenImage"></ion-img>
				</ion-thumbnail>
				<ion-button type="button" fill="clear" @click="takePhoto">
					<ion-icon slot="start" :icon="camera"></ion-icon>
					Take Photo
				</ion-button>
			</ion-item>
			<ion-item>
				<ion-label aria-label="Description" position="floating"
					>Description</ion-label
				>
				<ion-textarea v-model="description" :rows="5"></ion-textarea>
			</ion-item>

			<ion-button type="submit" expand="full">Save</ion-button>
		</ion-list>
	</form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { camera } from 'ionicons/icons'
import {
	IonList,
	IonThumbnail,
	IonItem,
	IonImg,
	IonLabel,
	IonInput,
	IonIcon,
	IonTextarea,
	IonButton,
} from '@ionic/vue'
import memoryType from '../../types/memoryType'
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera'

const emit = defineEmits(['save-memory'])

const title = ref('')
const description = ref('')
const chosenImage = ref<string | undefined>(
	'https://png.pngtree.com/png-vector/20190223/ourlarge/pngtree-vector-picture-icon-png-image_695350.jpg'
)

function submitForm() {
	const memoryData: memoryType = {
		id: Date.now().toLocaleString(),
		title: title.value,
		image: chosenImage.value,
		description: description.value,
	}

	emit('save-memory', memoryData)
}

const takePhoto = async () => {
	const photo = await Camera.getPhoto({
		resultType: CameraResultType.Uri,
		source: CameraSource.Camera,
		quality: 60,
	})

	chosenImage.value = photo.webPath
}
</script>

<style scoped></style>
