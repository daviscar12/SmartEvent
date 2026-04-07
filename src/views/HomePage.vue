<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>SmartEvent</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <div class="home-container">
        <ion-icon :icon="calendarOutline" class="home-icon"></ion-icon>

        <h1>Bem-vindo ao SmartEvent</h1>

        <p class="descricao">
          Encontre shows, palestras, esportes e workshops da sua região
          de forma rápida e prática.
        </p>

        <ion-button expand="block" @click="irParaEventos">
          Ver eventos
        </ion-button>
      </div>
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
  IonButton,
  IonIcon
} from '@ionic/vue'
import { useRouter } from 'vue-router'
import { calendarOutline } from 'ionicons/icons'

const router = useRouter()

function irParaEventos() {
  router.push('/tabs/eventos')
}
</script>

<style scoped>
.home-container {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.home-icon {
  font-size: 80px;
  margin-bottom: 20px;
  color: var(--ion-color-primary);
}

h1 {
  font-size: 2rem;
  margin-bottom: 12px;
}

.descricao {
  font-size: 1rem;
  color: #666;
  margin-bottom: 24px;
  max-width: 320px;
  line-height: 1.5;
}

ion-button {
  width: 100%;
  max-width: 250px;
}
</style>
