import { computed, ref } from "vue";

export const cafesAvaliados = ref(
  [
   {
    id: 1,
    nomeCafe: 'Bourbon Amarelo',
    produtor: 'Fazenda Boa Vista',
    dataAvaliado: '25/05/2024 14:32',
    mediaSCA: 9.3,
    criadoPeloUsuario: false
   },
   {
    id: 2,
    nomeCafe: 'Arara',
    produtor: 'Sítio das Flores',
    dataAvaliado: '25/05/2024 10:15',
    mediaSCA: 8.7,
    criadoPeloUsuario: false
   },
   {
    id: 3,
    nomeCafe: 'Catuaí Vermelho',
    produtor: 'Café do Vale',
    dataAvaliado: '25/05/2024 16:45',
    mediaSCA: 8.1,
    criadoPeloUsuario: false
   },
   {
    id: 4,
    nomeCafe: 'Mundo Novo',
    produtor: 'Santa Clara',
    dataAvaliado: '24/05/2024 09:30',
    mediaSCA: 7.4,
    criadoPeloUsuario: false
   }
  ]
);

export const melhorCafeObjeto = computed(() => {
  if (cafesAvaliados.value.length === 0) return null;

  return cafesAvaliados.value.reduce((melhor, atual) => {
    return atual.mediaSCA > melhor.mediaSCA ? atual : melhor;
  });
});

export const ultimaAvaliacaoObjeto = computed(() => {
  if (cafesAvaliados.value.length === 0) return null;
  return cafesAvaliados.value[0]; // Captura o primeiro elemento do array
});

const totalCafesAvaliados = computed( () => cafesAvaliados.value.length);

export default totalCafesAvaliados
