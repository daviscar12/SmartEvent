import { ref } from 'vue'

export interface Evento {
  id: number
  titulo: string
  categoria: string
  data: string
  local: string
  descricao: string
  imagem: string
  favorito: boolean
}

const eventos = ref<Evento[]>([
  {
    id: 1,
    titulo: 'Show de Rock',
    categoria: 'Show',
    data: '10/04/2026',
    local: 'Arena Joinville',
    descricao: 'Uma noite com bandas locais, iluminação especial e muita música ao vivo.',
    imagem: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=1200',
    favorito: false
  },
  {
    id: 2,
    titulo: 'Workshop de Programação',
    categoria: 'Workshop',
    data: '15/04/2026',
    local: 'Senac Joinville',
    descricao: 'Aprenda programação, lógica e boas práticas de desenvolvimento.',
    imagem: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200',
    favorito: false
  },
  {
    id: 3,
    titulo: 'Palestra sobre Inovação',
    categoria: 'Palestra',
    data: '18/04/2026',
    local: 'Centro de Eventos',
    descricao: 'Uma palestra sobre criatividade, tecnologia e transformação digital.',
    imagem: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200',
    favorito: false
  },
  {
    id: 4,
    titulo: 'Campeonato de Skate',
    categoria: 'Esporte',
    data: '22/04/2026',
    local: 'Pista Central',
    descricao: 'Competição com atletas locais, manobras e premiações.',
    imagem: 'https://images.unsplash.com/photo-1519766304817-4f37bda74a26?w=1200',
    favorito: false
  }
])

export function useEventos() {
  function buscarEventoPorId(id: number) {
   console.log('Buscando evento com ID:', id) 
    return eventos.value.find((evento) => evento.id === id)
  }

  function alternarFavorito(id: number) {
    const evento = buscarEventoPorId(id)

    if (evento) {
      evento.favorito = !evento.favorito
    }
  }

  return {
    eventos,
    buscarEventoPorId,
    alternarFavorito
  }
}