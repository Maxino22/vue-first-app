<template>
	<ion-page>
		<ion-header>
			<ion-toolbar>
				<ion-buttons slot="start">
					<ion-back-button
						slot="start"
						:default-href="pageDefaultBackLink"
					></ion-back-button>
				</ion-buttons>
				<ion-title>{{ pageTitle }}</ion-title>
				<ion-buttons slot="end">
					<slot name="actions-end"></slot>
				</ion-buttons>
			</ion-toolbar>
		</ion-header>
		<ion-content>
			<slot />
		</ion-content>
	</ion-page>
</template>

<script setup lang="ts">
import {
	IonPage,
	IonHeader,
	IonToolbar,
	IonTitle,
	IonContent,
	IonBackButton,
	IonButtons,
} from '@ionic/vue'

defineProps({
	pageTitle: {
		type: String,
		required: true,
	},
	pageDefaultBackLink: String,
})
</script>

<style scoped></style>
