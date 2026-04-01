<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/home"></ion-back-button>
        </ion-buttons>
        <ion-title>Favoritos</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <div class="topo">
        <h2 class="titulo">Meus eventos favoritos</h2>
        <p class="subtitulo">
          Aqui ficam os eventos que você marcou para acompanhar.
        </p>
      </div>

      <div v-if="favoritos.length > 0">
        <ion-card
          v-for="evento in favoritos"
          :key="evento.id"
          class="card-evento"
        >
          <img
            :src="evento.imagem"
            :alt="evento.titulo"
            class="imagem-evento"
          />

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

            <div class="acoes">
              <ion-button expand="block" @click="verDetalhes(evento.id)">
                Ver detalhes
              </ion-button>

              <ion-button
                expand="block"
                fill="outline"
                color="danger"
                @click="removerFavorito(evento.id)"
              >
                Remover dos favoritos
              </ion-button>
            </div>
          </ion-card-content>
        </ion-card>
      </div>

      <div v-else class="estado-vazio">
        <ion-icon :icon="heartDislikeOutline" class="icone-vazio"></ion-icon>
        <h2>Nenhum favorito ainda</h2>
        <p>
          Você ainda não adicionou eventos aos favoritos.
        </p>
        <ion-button router-link="/eventos">
          Explorar eventos
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
  IonButton,
  IonIcon
} from '@ionic/vue'
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { heartDislikeOutline } from 'ionicons/icons'
import { useEventos } from '../composable/useEventos'

const router = useRouter()
const { eventos, alternarFavorito } = useEventos()

const favoritos = computed(() => {
  return eventos.value.filter((evento) => evento.favorito)
})

function verDetalhes(id: number) {
  router.push(`/eventos/${id}`)
}

function removerFavorito(id: number) {
  alternarFavorito(id)
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

.card-evento {
  margin: 0 0 18px 0;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.08);
}

.imagem-evento {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
}

.card-top {
  display: flex;
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

.acoes {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 14px;
}

.estado-vazio {
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.icone-vazio {
  font-size: 72px;
  color: #9ca3af;
  margin-bottom: 16px;
}

.estado-vazio h2 {
  margin-bottom: 8px;
}

.estado-vazio p {
  color: #6b7280;
  margin-bottom: 18px;
  max-width: 280px;
  line-height: 1.5;
}
</style>