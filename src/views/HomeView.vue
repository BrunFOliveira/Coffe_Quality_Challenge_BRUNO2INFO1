<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

const totalAvaliacoes = ref(12);
const maiorNota = ref(9.3);
const tipoCafe = ref('Bourbon Amarelo');
const localizacao = ref('Fazenda Boa Vista');
const ultimaAvaliacao = ref(8.7);
const nomeAvaliado = ref('Arara');
const data = ref('25/05/2024 ' + '14:32');
</script>

<template>
  <main>
    <section class="Banner">
      <div class="divSection">
        <img src="/public/icons/cafePNG.svg" alt="">
      <div class="div-Banner">
        <h2>Campeonato de Avaliação<br>de Qualidade de Café</h2>
        <span></span>
        <p>Analise, compare e descubra os melhores<br> cafés especiais</p>
      </div>
      </div>
    </section>
    <section class="Lista">
      <ul>
        <li>
          <div class="imgDiv">
            <img src="/icons/grupoDePessoas.svg" alt="" class="pessoas">
          </div>
          <div>
            <h3>Total de cafés avaliados</h3>
            <span class="numeroTotal">{{ totalAvaliacoes }}</span>
            <p>Cafés</p>
          </div>
        </li>
        <li>
          <img src="/icons/trofeu.svg" alt="" class="trofeu">
          <div>
            <h3>Café com maior nota</h3>
          <span class="numeroAvaliacao">{{ maiorNota }}</span>
          <span class="tipoCafé">{{ tipoCafe }}</span>
            <span class="localização">{{ localizacao }}</span>
          </div>
        </li>
        <li>
          <img src="/icons/relogio.svg" alt="" class="relogio">
          <div>
            <h3>Última avaliação</h3>
          <span class="ultimaAvaliacao">{{ ultimaAvaliacao }}</span>
          <span class="nomeAvaliado">{{ nomeAvaliado }}</span>
          <span class="data">{{ data }}</span>
          </div>
        </li>
      </ul>
      <div class="btnAvaliacoes">
        <RouterLink to="/avaliacoes">
        <img src="/icons/clipboard.svg" alt="" >
        <span>Ver avaliações</span>
      </RouterLink>
      </div>
      <div class="aviso">
        <img src="/public/icons/megafone.svg" alt="">
        <div>
          <h2>Participe e faça a diferença!</h2>
          <p>Cada avalição ajuda a reconhecer o trabalho dos produtores<br> e a valorizar o café de qualidade</p>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
main {
  margin-top: 3.7vw;
  padding-top: 1.5vw;
}
section.Banner {
  margin: 1.5vw 0.5vw;
  background-color: rgba(111, 78, 55, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3vw 2vw;
  border-radius: 12px;
}
section.Banner div.divSection {
  display: flex;
  gap: 5vw;
}
section.Banner div.div-Banner {
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
section.Banner div.div-Banner h2 {
  font-weight: bolder;
  font-size: 3vw;
}
section.Banner span {
  border-bottom: 3px solid rgba(111, 78, 55, 0.7);
  margin: 1.5vw 0;
  width: 3vw;
  display: block;
}
section.Banner p {
  font-size: 2vw;
}
section.Banner img {
  width: 14vw;
  height: auto;
}

/* === Lista === */

section.Lista {
  justify-content: center;
}
section.Lista ul {
  list-style: none;
  display: flex;
  align-items: stretch;
  gap: 2vw;
  justify-content: center;
  padding: 0;
  margin: 0;
}
section.Lista ul li {
  border: 1.5px solid rgb(0, 0, 0, 0.3);
  border-radius: 10px;
  width: 31%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2vw;
  padding: 20px 25px;
  box-sizing: border-box;
}
.numeroTotal,
.numeroAvaliacao,
.ultimaAvaliacao {
  font-size: 2vw;
}
.numeroTotal {
  color: #D96900;
}
.numeroAvaliacao {
  color: #02940E;
}
.ultimaAvaliacao {
  color: #0032CA;
}
section.Lista ul li div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
section.Lista {
  justify-content: center;
}
section.Lista ul li img {
  width: 3vw;
  height: auto;
  padding: 40px;
  border-radius: 100px;
}
img.pessoas {
  background-color: rgb(255, 153, 0, 0.15);
}
img.trofeu {
  background-color: rgba(0, 212, 18, 0.15);
}
img.relogio {
  background-color: rgba(0, 46, 212, 0.15);
}
div.btnAvaliacoes {
  margin-top: 74px;
  justify-content: center;
  align-items: center;
  display: flex;
  background-color: #6F4E37;
  width: fit-content;
  padding: 1vw 2vw;
  border-radius: 8px;
  margin: 1vw auto;
  margin-right: auto;
  margin-left: auto;
}
div.btnAvaliacoes a{
  text-decoration: none;
  color: #fff;
  display: flex;
  align-items: center;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 1.2vw;
  gap: 0.8vw;
}
div.btnAvaliacoes:hover {
  background-color: #4c3424;
}
.numeroTotal,
.numeroAvaliacao,
.tipoCafé,
.ultimaAvaliacao,
.nomeAvaliado {
  margin-bottom: 1vw;
}
.numeroTotal,
.numeroAvaliacao,
.tipoCafé,
.ultimaAvaliacao,
.nomeAvaliado {
  font-weight: bolder;
}
div.aviso {
  background-color: rgba(111, 78, 55, 0.1);;
  display: flex;
  align-items: flex-start;
  gap: 2vw;
  box-sizing: border-box;
  padding-bottom: 10px;
  border-radius: 10px;
}
div.aviso img {
  width: 3vw;
  height: auto;
  margin-left: 10px;
  margin-top: 10px;
}
div.aviso p {
  font-family: sans-serif;
  font-size: 1.1vw;
  color: #555555;
  line-height: 1.4;
  margin: 0;
}
div.aviso h2 {
  color: #6F4E37;
}
</style>
