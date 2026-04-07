<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/tabs/home"></ion-back-button>
        </ion-buttons>
        <ion-title>Perfil / Sobre</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-card class="card-perfil">
        <div class="banner"></div>

        <ion-card-header>
          <ion-card-title>SmartEvent</ion-card-title>
          <ion-card-subtitle>Seu app de eventos locais</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
          <p>
            O SmartEvent é um aplicativo criado para facilitar a busca por
            shows, palestras, workshops e eventos esportivos da sua região.
          </p>

          <div class="info-box">
            <h3>Dados do usuário</h3>

            <ion-item lines="none" class="input-item">
              <ion-label position="stacked">Seu nome</ion-label>
              <ion-input
                v-model="nomeUsuario"
                placeholder="Digite seu nome"
              ></ion-input>
            </ion-item>

            <ion-item lines="none" class="input-item">
              <ion-label position="stacked">Cidade</ion-label>
              <ion-input
                v-model="cidadeUsuario"
                placeholder="Digite sua cidade"
              ></ion-input>
            </ion-item>
          </div>

          <div class="mensagem-box">
            <h3>Mensagem personalizada</h3>
            <p>{{ mensagemBoasVindas }}</p>
          </div>
        </ion-card-content>
      </ion-card>
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
  IonButtons,
  IonBackButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonInput
} from '@ionic/vue'
import { ref, watch } from 'vue'

const nomeUsuario = ref('Davi')
const cidadeUsuario = ref('Joinville')
const mensagemBoasVindas = ref('Bem-vindo ao SmartEvent, Davi de Joinville!')

watch([nomeUsuario, cidadeUsuario], ([novoNome, novaCidade]) => {
  const nomeFinal = novoNome?.trim() || 'Visitante'
  const cidadeFinal = novaCidade?.trim() || 'sua cidade'

  mensagemBoasVindas.value =
    `Bem-vindo ao SmartEvent, ${nomeFinal} de ${cidadeFinal}!`
})
</script>

<style scoped>
.card-perfil {
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.08);
}

.banner {
  height: 140px;
  background: linear-gradient(135deg, var(--ion-color-primary), #6dd5ed);
}

ion-card-title {
  font-size: 1.6rem;
}

ion-card-subtitle {
  font-size: 0.95rem;
}

ion-card-content p {
  color: #374151;
  line-height: 1.6;
}

.info-box {
  margin-top: 20px;
}

.info-box h3,
.mensagem-box h3 {
  margin-bottom: 10px;
  font-size: 1.1rem;
}

.input-item {
  --background: #f8fafc;
  border-radius: 14px;
  margin-bottom: 14px;
}

.mensagem-box {
  margin-top: 24px;
  padding: 16px;
  background: #f8fafc;
  border-radius: 16px;
}
</style>