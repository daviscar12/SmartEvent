<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>

      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home" href="/tabs/home">
          <ion-icon :icon="homeOutline"></ion-icon>
          <ion-label>Home</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="eventos" href="/tabs/eventos">
          <ion-icon :icon="calendarOutline"></ion-icon>
          <ion-label>Eventos</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="favoritos" href="/tabs/favoritos">
          <ion-icon :icon="heartOutline"></ion-icon>
          <ion-label>Favoritos</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="perfil" href="/tabs/perfil">
          <ion-icon :icon="personOutline"></ion-icon>
          <ion-label>Perfil</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel
} from '@ionic/vue'

import {
  homeOutline,
  calendarOutline,
  heartOutline,
  personOutline
} from 'ionicons/icons'
</script>