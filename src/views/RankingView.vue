<script setup>
import { computed } from 'vue';
import { cafesAvaliados } from '@/data/cafes';
import LeaderboardTable from '@/components/LeaderboardTable.vue';

const totalCafes = computed(() => cafesAvaliados.value.length);

const listaOrdenada = computed(() => {
  return [...cafesAvaliados.value].sort((a, b) => b.mediaSCA - a.mediaSCA);
});
</script>

<template>
  <main class="ranking-container">
    <header class="ranking-header">
      <div class="titulo-sessao">
        <img src="/icons/trofeuMarrom.svg" alt="Ícone Troféu" class="icon-trofeu">
        <div class="textos-titulo">
          <h1>Ranking Geral</h1>
          <p>Classificação dos melhores cafés do campeonato.</p>
        </div>
      </div>
      <div class="card-totalizador">
        <img src="/icons/grafico.svg" alt="Ícone Gráfico" class="icon-grafico">
        <div class="textos-totalizador">
          <small>Total de Cafés Avaliados</small>
          <strong>{{ totalCafes }}</strong>
        </div>
      </div>
    </header>

    <LeaderboardTable :cafes="listaOrdenada" />

    <footer class="bloco-informativo">
      <div class="icon-info-circle">
        <img src="/icons/selo.svg" alt="Selo">
      </div>
      <div class="conteudo-info">
        <h3>Como funciona a pontuação?</h3>
        <p>As notas são baseadas na metodologia SCA (Specialty Coffee Association).</p>
        <p>Cada critério recebe uma nota de 0 a 10 e a média final determina a classificação.</p>
      </div>
      <div class="ilustracao-montanhas"></div>
    </footer>
  </main>
</template>

<style scoped>
.ranking-container {
  margin-top: 5vw;
  padding: 2vw 4vw;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  gap: 2vw;
  box-sizing: border-box;
}
.ranking-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.titulo-sessao {
  display: flex;
  align-items: flex-start;
  gap: 1vw;
}
.icon-trofeu {
  width: 2.5vw;
  height: auto;
}
.textos-titulo h1 {
  font-size: 1.8vw;
  color: #1a110b;
  margin: 0 0 0.3vw 0;
}
.textos-titulo p {
  font-size: 1.1vw;
  color: #666;
  margin: 0;
}
.card-totalizador {
  display: flex;
  align-items: center;
  gap: 1vw;
  border: 1.5px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 0.8vw 1.5vw;
  background-color: #fff;
}
.icon-grafico {
  width: 2vw;
}
.textos-totalizador {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.textos-totalizador small {
  font-size: 0.8vw;
  color: #444;
  font-weight: bold;
}
.textos-totalizador strong {
  font-size: 1.8vw;
  color: #1a110b;
}
.bloco-informativo {
  background-color: #FBF7F4;
  border-radius: 14px;
  padding: 1.5vw 2vw;
  display: flex;
  align-items: flex-start;
  gap: 1.5vw;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(111, 78, 55, 0.1);
}
.icon-info-circle {
  background-color: rgba(111, 78, 55, 0.1);
  width: 3vw;
  height: 3vw;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.icon-info-circle img {
  width: 1.5vw;
}
.conteudo-info h3 {
  margin: 0 0 0.5vw 0;
  font-size: 1.2vw;
  color: #1a110b;
}
.conteudo-info p {
  margin: 0;
  font-size: 1vw;
  color: #555;
}
.ilustracao-montanhas {
  position: absolute;
  right: 2vw;
  bottom: 0;
  width: 15vw;
  height: 100%;
  opacity: 0.12;
}
</style>
