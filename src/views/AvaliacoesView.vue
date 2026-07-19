<script setup>
import { computed } from 'vue';
import { cafesAvaliados } from '@/data/cafes';
import RatingForm from '@/components/RatingForm.vue';

const temAvaliacaoDoUsuario = computed(() => {
  return cafesAvaliados.value.some(cafe => cafe.criadoPeloUsuario === true);
});

const cadastrarNovaAvaliacao = (objetoNovoCafe) => {
  const maiorIdAtual = Math.max(...cafesAvaliados.value.map(cafe => cafe.id)) || 0;
  objetoNovoCafe.id = maiorIdAtual + 1;
  cafesAvaliados.value.unshift(objetoNovoCafe);
};

const deletarItem = (idParaDeletar) => {
  cafesAvaliados.value = cafesAvaliados.value.filter(cafe => cafe.id !== idParaDeletar);
};
</script>

<template>
  <main>
    <div class="container-superior">
      <section class="colunaAvaliacoes">
        <div class="titulo-colunaAvaliacoes">
          <img src="/icons/bean.svg" alt="">
          <div class="div-titulo">
            <h2 class="titulo">Avaliações de cafés</h2>
            <p>Veja os cafés já avaliados e adicione uma nova avaliação</p>
          </div>
        </div>
        <div class="janela-rolagem">
          <div v-if="!temAvaliacaoDoUsuario" class="lista-vazia-feedback">
            <div class="wrapper-icone-vazio">
              <img src="/icons/cafePNG.svg" alt="Xícara">
            </div>
            <div class="textos-vazio">
              <p class="titulo-vazio">Nenhum café avaliado ainda.</p>
              <p class="subtitulo-vazio">Adicione sua primeira avaliação ao lado.</p>
            </div>
          </div>

          <ul v-if="cafesAvaliados.length > 0" class="lista-cards">
            <li v-for="cafe in cafesAvaliados" :key="cafe.id" class="card-cafe">
              <div class="card-info">
                <div class="wrapper-icone-cafe">
                  <img src="/icons/beanInline.svg" alt="">
                </div>
                <div class="textos-cafe">
                  <h3>{{ cafe.nomeCafe }}</h3>
                  <p class="produtor">Produtor: {{ cafe.produtor }}</p>
                  <small class="data">Avaliado em: {{ cafe.dataAvaliado }}</small>
                </div>
              </div>

              <div class="card-metrica-acoes">
                <div class="card-nota">
                  <small>Média SCA</small>
                  <strong class="valor-nota">{{ cafe.mediaSCA }}</strong>
                </div>
                <button v-if="cafe.criadoPeloUsuario == true" @click="deletarItem(cafe.id)" class="btn-deletar-card">
                  <img src="/icons/lixeira.svg" alt="">
                </button>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <RatingForm @adicionar-avaliacao="cadastrarNovaAvaliacao" />
    </div>

    <div class="bloco-dicas">
      <div class="icon-dicas-circle">
        <span class="estrela-icone">
          <img src="/icons/estrela.svg" alt="">
        </span>
      </div>
      <div class="conteudo-dicas">
        <h3>Dicas:</h3>
        <ul>
          <li>Todas as notas devem estar entre 0 e 10.</li>
          <li>A média será updated automaticamente conforme você altera as notas.</li>
          <li>Após salvar, o café será adicionado à lista e ao ranking automaticamente.</li>
        </ul>
      </div>
      <div class="ilustracao-montanhas"></div>
    </div>
  </main>
</template>

<style scoped>
main {
  margin-top: 7.5vw;
  display: flex;
  flex-direction: column;
  gap: 2vw;
  padding: 0 4vw;
  font-family: sans-serif;
}
.container-superior {
  display: flex;
  gap: 1.5vw;
  justify-content: center;
  width: 100%;
}
main section {
  width: 45%;
}
.titulo-colunaAvaliacoes {
  display: flex;
  align-items: flex-start;
  gap: 0.7vw;
  margin-bottom: 2vw;
}
.div-titulo h2 {
  margin-top: 0;
}
.janela-rolagem {
  overflow-y: auto;
  max-height: 65vh;
  padding-right: 1vw;
  padding-left: 1vw;
  border: 1.5px solid rgba(0, 0, 0, 0.15);
  border-radius: 15px;
}
.lista-cards {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1vw;
  margin-top: 1vw;
}
.card-cafe {
  border: 1.5px solid rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5vw;
  box-sizing: border-box;
}
.card-info {
  display: flex;
  align-items: center;
  gap: 1.5vw;
}
.wrapper-icone-cafe {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4vw;
  height: 4vw;
  background-color: rgba(111, 78, 55, 0.1);
  border-radius: 50%;
}
.wrapper-icone-cafe img {
  width: 2.2vw;
  height: auto;
}
.textos-cafe {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}
.textos-cafe h3 {
  font-size: 1.4vw;
  color: #1a110b;
  margin: 0 0 0.3vw 0;
  font-weight: bold;
}
.produtor {
  font-size: 1.1vw;
  color: #555555;
  margin: 0 0 0.2vw 0;
}
.data {
  font-size: 0.9vw;
  color: #999999;
}
.card-metrica-acoes {
  display: flex;
  align-items: center;
  gap: 1.5vw;
}
.card-nota {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.card-nota small {
  font-size: 0.8vw;
  color: #666666;
  font-weight: bold;
  margin-bottom: 0.3vw;
}
.valor-nota {
  font-size: 1.8vw;
  font-weight: bolder;
  color: #0032CA;
}
.btn-deletar-card {
  background: none;
  border: none;
  font-size: 1.4vw;
  cursor: pointer;
}
.btn-deletar-card img {
  width: 1.8vw;
  height: auto;
}
.lista-vazia-feedback {
  display: flex;
  align-items: center;
  gap: 1.5vw;
  border: 1.5px solid rgba(111, 78, 55, 0.2);
  border-radius: 12px;
  padding: 2vw;
  background-color: #eaab0038;
  margin-top: 1vw;
}
.wrapper-icone-vazio {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4.5vw;
  height: 4.5vw;
  background-color: rgba(111, 78, 55, 0.06);
  border-radius: 50%;
}
.wrapper-icone-vazio img {
  width: 2.5vw;
  height: auto;
  opacity: 0.7;
}
.textos-vazio {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}
.titulo-vazio {
  font-size: 1.3vw;
  font-weight: bold;
  color: #444;
  margin: 0 0 0.2vw 0;
}
.subtitulo-vazio {
  font-size: 1.1vw;
  color: #777;
  margin: 0;
}
.bloco-dicas {
  background-color: #FBF7F4;
  border-radius: 14px;
  padding: 1.5vw 2vw;
  display: flex;
  align-items: flex-start;
  gap: 1.5vw;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(111, 78, 55, 0.1);
  margin-bottom: 2vw;
}
.icon-dicas-circle {
  background-color: #C1A38E;
  width: 3.5vw;
  height: 3.5vw;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.estrela-icone {
  font-size: 1.6vw;
  color: #fff;
}
.conteudo-dicas {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}
.conteudo-dicas h3 {
  margin: 0 0 0.5vw 0;
  font-size: 1.3vw;
  color: #1a110b;
  font-weight: bold;
}
.conteudo-dicas ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.4vw;
}
.conteudo-dicas ul li {
  font-size: 1.1vw;
  color: #555555;
  position: relative;
  padding-left: 1.2vw;
}
.conteudo-dicas ul li::before {
  content: "•";
  color: #6F4E37;
  font-weight: bold;
  font-size: 1.4vw;
  position: absolute;
  left: 0;
  top: -0.2vw;
}
.ilustracao-montanhas {
  position: absolute;
  right: 2vw;
  bottom: 0;
  width: 15vw;
  height: 100%;
  background-repeat: no-repeat;
  background-position: bottom right;
  background-size: contain;
  opacity: 0.15;
}
.janela-rolagem::-webkit-scrollbar {
  width: 8px;
}
.janela-rolagem::-webkit-scrollbar-track {
  background: transparent;
  margin: 8px;
}

.janela-rolagem::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
}

.janela-rolagem::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.4);
}
</style>
