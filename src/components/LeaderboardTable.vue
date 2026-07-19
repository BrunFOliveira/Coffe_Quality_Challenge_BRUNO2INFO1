<script setup>
import CoffeeCard from './CoffeeCard.vue';

defineProps({
  cafes: {
    type: Array,
    required: true
  }
});
</script>

<template>
  <div class="tabela-ranking">
    <div class="header-tabela">
      <span class="col-posicao">Posição</span>
      <span class="col-cafe">Café</span>
      <span class="col-produtor">Produtor</span>
      <span class="col-nota">Nota Final (Média SCA)</span>
      <span class="col-acoes">Ações</span>
    </div>
    <div class="janela-rolagem-ranking">
      <CoffeeCard
        v-for="(cafe, index) in cafes"
        :key="cafe.id"
        :cafe="cafe"
        :posicao="index + 1"
      />
    </div>
  </div>
</template>

<style scoped>
.tabela-ranking {
  display: flex;
  flex-direction: column;
  gap: 0.8vw;
  width: 100%;
}
.header-tabela {
  display: flex;
  align-items: center;
  padding: 0 1.5vw;
  font-size: 1vw;
  font-weight: bold;
  color: #1a110b;
  text-align: left;
}
.col-posicao { width: 10%; text-align: center; }
.col-cafe { width: 25%; }
.col-produtor { width: 25%; }
.col-nota { width: 25%; text-align: center; }
.col-acoes { width: 15%; text-align: center; }
.janela-rolagem-ranking {
  overflow-y: auto;
  max-height: 48vh;
  padding-right: 0.5vw;
  display: flex;
  flex-direction: column;
  gap: 0.8vw;
}
.janela-rolagem-ranking::-webkit-scrollbar {
  width: 6px;
}
.janela-rolagem-ranking::-webkit-scrollbar-track {
  background: transparent;
}
.janela-rolagem-ranking::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.15);
  border-radius: 10px;
}
</style>
