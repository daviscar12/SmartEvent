<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/tabs/home"></ion-back-button>
        </ion-buttons>
        <ion-title>Eventos</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <div class="topo">
        <h2 class="titulo">Eventos disponíveis</h2>
        <p class="subtitulo">
          Explore shows, palestras, workshops e esportes perto de você.
        </p>
      </div>

      <!-- Mantendo IonList para seguir o projeto -->
      <ion-list lines="none" class="lista-eventos">
        <ion-item
          v-for="evento in eventos"
          :key="evento.id"
          class="item-evento"
          button
          :detail="false"
          @click="irParaDetalhe(evento.id)"
        >
          <ion-card class="card-evento">
            <ion-card-header>
              <div class="card-top">
                <span class="categoria">{{ evento.categoria }}</span>
              </div>

              <ion-card-title>{{ evento.titulo }}</ion-card-title>
              <ion-card-subtitle>{{ evento.data }}</ion-card-subtitle>
            </ion-card-header>

            <ion-card-content>
              <p><strong>Local:</strong> {{ evento.local }}</p>
              <p class="descricao">{{ evento.descricao }}</p>

              <ion-button expand="block" class="botao-detalhes">
                Ver detalhes
              </ion-button>
            </ion-card-content>
          </ion-card>
        </ion-item>
      </ion-list>
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
  IonList,
  IonItem,
  IonButtons,
  IonBackButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonButton
} from '@ionic/vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'



const router = useRouter()

const eventos = ref([
  {
    id: 1,
    titulo: 'Show de Rock',
    categoria: 'Show',
    data: '10/04/2026',
    local: 'Arena Joinville',
    descricao: 'Uma noite com bandas locais e muita música ao vivo.'
  },
  {
    id: 2,
    titulo: 'Workshop de Programação',
    categoria: 'Workshop',
    data: '15/04/2026',
    local: 'Senac Joinville',
    descricao: 'Aprenda lógica, front-end e boas práticas no desenvolvimento.'
  },
  {
    id: 3,
    titulo: 'Palestra sobre Inovação',
    categoria: 'Palestra',
    data: '18/04/2026',
    local: 'Centro de Eventos',
    descricao: 'Tendências de tecnologia, criatividade e mercado digital.'
  },
  {
    id: 4,
    titulo: 'Campeonato de Skate',
    categoria: 'Esporte',
    data: '22/04/2026',
    local: 'Pista Central',
    descricao: 'Evento com atletas locais, manobras e premiações.'
  }
])

function irParaDetalhe(id: number) {
//   router.push(`/detalhes`) --- IGNORE ---
  router.push({
    name: 'detalhes', // Use the name defined in the route config
    params: { id: id}, // Pass parameters as an object
  })
}
</script>

<style scoped>
.topo {
  margin-bottom: 20px;
}

.titulo {
  font-size: 1.7rem;
  font-weight: 700;
  margin-bottom: 8px;
}

.subtitulo {
  color: #6b7280;
  font-size: 0.98rem;
  line-height: 1.5;
}

.lista-eventos {
  background: transparent;
  padding: 0;
}

.item-evento {
  --background: transparent;
  --inner-padding-end: 0;
  --inner-padding-start: 0;
  --padding-start: 0;
  --padding-end: 0;
  --border-style: none;
  margin-bottom: 14px;
}

.card-evento {
  width: 100%;
  margin: 0;
  border-radius: 18px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
}

.card-top {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 8px;
}

.categoria {
  background: var(--ion-color-primary);
  color: white;
  padding: 6px 12px;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 600;
}

ion-card-title {
  font-size: 1.2rem;
  margin-bottom: 6px;
}

ion-card-subtitle {
  font-size: 0.9rem;
}

ion-card-content p {
  margin-bottom: 10px;
  color: #374151;
  line-height: 1.5;
}

.descricao {
  color: #6b7280;
}

.botao-detalhes {
  margin-top: 12px;
}
</style>