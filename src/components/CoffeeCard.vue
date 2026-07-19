<script setup>
import { ref } from 'vue';

defineProps({
  cafe: {
    type: Object,
    required: true
  },
  posicao: {
    type: Number,
    required: true
  }
});

const expandido = ref(false);
</script>

<template>
  <div class="wrapper-card-ranking" :class="{ 'top-tres': posicao <= 3, 'card-aberto': expandido }">
    <div class="linha-principal">
      <div class="col-posicao container-medalha">
        <span v-if="posicao === 1" class="badge-medalha ouro">1</span>
        <span v-else-if="posicao === 2" class="badge-medalha prata">2</span>
        <span v-else-if="posicao === 3" class="badge-medalha bronze">3</span>
        <span v-else class="numero-posicao">{{ posicao }}</span>
      </div>
      <div class="col-cafe container-nome-foto">
        <strong class="nome-do-cafe">{{ cafe.nomeCafe }}</strong>
      </div>
      <div class="col-produtor texto-comum">
        {{ cafe.produtor }}
      </div>
      <div class="col-nota container-score">
        <span class="valor-nota-sca">{{ cafe.mediaSCA.toFixed(1) }}</span>
      </div>
      <div class="col-acoes">
        <button @click="expandido = !expandido" class="btn-detalhes">
          {{ expandido ? 'Fechar' : 'Ver Detalhes' }}
        </button>
      </div>
    </div>
    <div v-if="expandido" class="gaveta-detalhes">
      <div class="divisor-detalhes"></div>
      <div class="grade-detalhes">
        <div class="item-detalhe">
          <small>Data da Avaliação</small>
          <p>{{ cafe.dataAvaliado || 'Sem data cadastrada' }}</p>
        </div>
        <div class="item-detalhe">
          <small>Método / Origem</small>
          <p>Avaliação por SCA</p>
        </div>
        <div class="item-detalhe">
          <small>Status do Registro</small>
          <p>{{ cafe.criadoPeloUsuario ? 'Inserido por você' : 'Padrão do Sistema' }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper-card-ranking {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border: 1.5px solid rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;
}
.linha-principal {
  display: flex;
  align-items: center;
  padding: 1vw 1.5vw;
  width: 100%;
  box-sizing: border-box;
}
.wrapper-card-ranking.top-tres {
  background-color: #FFFDF9;
  border-color: rgba(234, 171, 0, 0.15);
}
.wrapper-card-ranking.card-aberto {
  border-color: #6F4E37;
  box-shadow: 0 4px 12px rgba(111, 78, 55, 0.06);
}

.col-posicao { width: 10%; display: flex; justify-content: center; }
.col-cafe { width: 25%; }
.col-produtor { width: 25%; }
.col-nota { width: 25%; display: flex; justify-content: center; align-items: center; gap: 1vw; }
.col-acoes { width: 15%; display: flex; justify-content: center; }

.badge-medalha {
  width: 2.2vw;
  height: 2.2vw;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1vw;
  color: #fff;
}
.ouro { background-color: #E2B93B; border: 2px solid #F5D365; }
.prata { background-color: #A0AAB5; border: 2px solid #C1CDDA; }
.bronze { background-color: #C58955; border: 2px solid #E5AA7A; }
.numero-posicao {
  font-size: 1.1vw;
  color: #666;
  font-weight: bold;
}
.container-nome-foto {
  display: flex;
  align-items: center;
  gap: 1vw;
}
.nome-do-cafe {
  font-size: 1.2vw;
  color: #1a110b;
}
.texto-comum {
  font-size: 1.1vw;
  color: #444;
}
.valor-nota-sca {
  font-size: 1.5vw;
  font-weight: bold;
  color: #1a110b;
}
.btn-detalhes {
  background-color: #fff;
  border: 1.5px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  padding: 0.5vw 1.2vw;
  font-size: 1vw;
  color: #1a110b;
  cursor: pointer;
  font-weight: 500;
}
.gaveta-detalhes {
  padding: 0 1.5vw 1.5vw 1.5vw;
  background-color: #FAF6F2;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
.divisor-detalhes {
  height: 1px;
  background-color: rgba(0, 0, 0, 0.06);
  margin-bottom: 1vw;
}
.grade-detalhes {
  display: flex;
  gap: 3vw;
  text-align: left;
}
.item-detalhe small {
  font-size: 0.8vw;
  color: #777;
  text-transform: uppercase;
  font-weight: bold;
}
.item-detalhe p {
  margin: 0.2vw 0 0 0;
  font-size: 1.1vw;
  color: #1a110b;
}
.container-score {
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.6vw;
}
</style>
