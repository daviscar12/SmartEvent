<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/eventos"></ion-back-button>
        </ion-buttons>
        <ion-title>Detalhes do Evento</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-card v-if="eventoSelecionado" class="card-detalhe">
        <img
          :src="eventoSelecionado.imagem"
          :alt="eventoSelecionado.titulo"
          class="imagem-evento"
        />

        <ion-card-header>
          <div class="topo-card">
            <span class="categoria">{{ eventoSelecionado.categoria }}</span>
          </div>

          <ion-card-title>{{ eventoSelecionado.titulo }}</ion-card-title>
          <ion-card-subtitle>{{ eventoSelecionado.data }}</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
          <p><strong>Local:</strong> {{ eventoSelecionado.local }}</p>
          <p><strong>Descrição:</strong> {{ eventoSelecionado.descricao }}</p>

          <ion-button expand="block" @click="favoritarEvento">
            {{
              eventoSelecionado.favorito
                ? 'Remover dos favoritos'
                : 'Adicionar aos favoritos'
            }}
          </ion-button>
        </ion-card-content>
      </ion-card>

      <div v-else class="nao-encontrado">
        <h2>Evento não encontrado</h2>
        <p>Não foi possível localizar esse evento.</p>
        <ion-button router-link="/eventos">
          Voltar para eventos
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
  IonButtons,
  IonBackButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonButton
} from '@ionic/vue'
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useEventos } from '../composable/useEventos'
import { onIonViewWillEnter } from '@ionic/vue'

const route = useRoute()
const { buscarEventoPorId, alternarFavorito } = useEventos()
 const id = ref(0) ;

 onIonViewWillEnter(() => {
    id.value = Number(route.params.id);
    // Refresh your data here
  });


const eventoSelecionado = computed(() => {
 
  return buscarEventoPorId(id.value)
})

function favoritarEvento() {
  if (eventoSelecionado.value) {
    alternarFavorito(eventoSelecionado.value.id)
  }
}
</script>

<style scoped>
.card-detalhe {
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.08);
}

.imagem-evento {
  width: 100%;
  height: 220px;
  object-fit: cover;
  display: block;
}

.topo-card {
  margin-bottom: 10px;
}

.categoria {
  display: inline-block;
  background: var(--ion-color-primary);
  color: white;
  padding: 6px 12px;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 600;
}

ion-card-title {
  font-size: 1.5rem;
  margin-bottom: 6px;
}

ion-card-subtitle {
  font-size: 0.95rem;
}

ion-card-content p {
  margin-bottom: 14px;
  color: #374151;
  line-height: 1.6;
}

.nao-encontrado {
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.nao-encontrado h2 {
  margin-bottom: 8px;
}

.nao-encontrado p {
  color: #6b7280;
  margin-bottom: 18px;
}
</style>