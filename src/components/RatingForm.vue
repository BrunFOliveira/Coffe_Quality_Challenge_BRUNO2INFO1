<script setup>
import { ref, computed } from 'vue';

const emit = defineEmits(['adicionar-avaliacao']);

const novoCafe = ref({ nome: '', produtor: '', observacoes: '' });
const notas = ref({ aroma: 0, sabor: 0, acidez: 0, corpo: 0, finalizacao: 0 });

const mediaSCA = computed(() => {
  const sanitizar = (num) => {
    const n = parseFloat(num) || 0;
    return Math.min(Math.max(n, 0), 10);
  };

  const somatoria =
    sanitizar(notas.value.aroma) +
    sanitizar(notas.value.sabor) +
    sanitizar(notas.value.acidez) +
    sanitizar(notas.value.corpo) +
    sanitizar(notas.value.finalizacao);

  return (somatoria / 5).toFixed(1);
});

const enviarFormulario = () => {
  if (!novoCafe.value.nome || !novoCafe.value.produtor) {
    alert('Por favor, preencha o nome do café e do produtor!');
    return;
  }

  const agora = new Date();
  const dataFormatada = agora.toLocaleDateString('pt-BR') + ' ' + agora.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

  const dadosNovaAvaliacao = {
    id: 0,
    nomeCafe: novoCafe.value.nome,
    produtor: novoCafe.value.produtor,
    dataAvaliado: dataFormatada,
    mediaSCA: Number(mediaSCA.value),
    criadoPeloUsuario: true
  };

  emit('adicionar-avaliacao', dadosNovaAvaliacao);
  limparFormulario();
};
const limparFormulario = () => {
  novoCafe.value = { nome: '', produtor: '', observacoes: '' };
  notas.value = { aroma: 0, sabor: 0, acidez: 0, corpo: 0, finalizacao: 0 };
};
</script>

<template>
  <section class="formulario">
    <div class="tituloFormulario">
      <img src="/icons/material-symbols_fact-check-rounded(1).svg" alt="">
      <h2>Nova Avaliação</h2>
    </div>
    <form @submit.prevent="enviarFormulario">
      <div class="inputsTexto">
        <div class="inputText-div">
          <label for="NomeCafe">Nome do café</label>
          <input v-model="novoCafe.nome" type="text" id="NomeCafe" placeholder="Ex.: Bourbon Amarelo">
        </div>
        <div class="inputText-div">
          <label for="Produtor">Nome do Produtor</label>
          <input v-model="novoCafe.produtor" type="text" id="Produtor" placeholder="Ex.:Fazenda Boa Vista">
        </div>
      </div>
      <h3 class="titulo-notas">Notas SCA (0 a 10)</h3>
      <div class="notasGrid">
        <div v-for="(valor, chave) in notas" :key="chave" class="inputNota-div">
          <label :for="chave">{{ chave.toUpperCase() }}</label>
          <input v-model.number="notas[chave]" type="number" :id="chave" min="0" max="10" step="0.1">
        </div>
      </div>
      <div class="painelMedia">
        <div class="textosMedia">
          <h4>Média SCA</h4>
          <p>Calculada automaticamente com base nas notas acima</p>
        </div>
        <div class="valorMedia">
          <span>{{ mediaSCA }}</span>
        </div>
      </div>
      <div class="botoesFormulario">
        <button type="button" @click="limparFormulario" class="btn-limpar">Limpar</button>
        <button type="submit" class="btn-salvar">Salvar Avaliação</button>
      </div>
    </form>
  </section>
</template>

<style scoped>
.formulario {
  border: 1.5px solid rgb(0, 0, 0, 0.2);
  margin-top: 2vw;
  box-sizing: border-box;
  padding: 0 1.5vw 1.5vw 1.5vw;
  border-radius: 10px;
}
.formulario h2 {
  font-weight: bolder;
}
.tituloFormulario {
  display: flex;
  align-items: center;
  gap: 1vw;
  border-bottom: 1.5px solid rgb(0, 0, 0, 0.2);
  margin-bottom: 1vw;
  width: 100%;
}
.inputText-div {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.inputsTexto {
  display: flex;
  gap: 1vw;
  margin-bottom: 1.5vw;
}
.inputText-div label {
  margin-bottom: 0.5vw;
  font-weight: bolder;
}
.inputText-div input {
  border-radius: 10px;
  padding: 0.7vw;
  border: 1.5px solid rgb(0, 0, 0, 0.2);
  outline: none;
}
.titulo-notas {
  font-size: 1.2vw;
  font-weight: bold;
  color: #333;
  margin: 1.5vw 0 1vw 0;
}
.notasGrid {
  display: flex;
  gap: 0.8vw;
  margin-bottom: 1.5vw;
}
.inputNota-div {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
}
.inputNota-div label {
  font-size: 0.8vw;
  font-weight: bold;
  color: #666;
  margin-bottom: 0.4vw;
}
.inputNota-div input {
  width: 100%;
  padding: 0.7vw 0;
  text-align: center;
  border-radius: 8px;
  border: 1.5px solid rgb(0, 0, 0, 0.2);
  font-size: 1.2vw;
  font-weight: bold;
  outline: none;
}
.painelMedia {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(111, 78, 55, 0.07);
  padding: 1vw 1.5vw;
  border-radius: 8px;
  margin-bottom: 1.5vw;
}
.textosMedia h4 {
  margin: 0;
  font-size: 1.2vw;
  color: #6F4E37;
}
.textosMedia p {
  margin: 0.2vw 0 0 0;
  font-size: 0.9vw;
  color: #666;
}
.valorMedia span {
  font-size: 2.5vw;
  font-weight: bold;
  color: #6F4E37;
}
.botoesFormulario {
  display: flex;
  justify-content: flex-end; gap: 1vw;
}
.btn-limpar, .btn-salvar {
  padding: 0.7vw 1.5vw;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1vw;
  cursor: pointer;
  transition: all 0.2s ease;
}
.btn-limpar {
  background: none;
  border: 1.5px solid rgb(0, 0, 0, 0.2);
  color: #555;
}
.btn-limpar:hover {
  background-color: #f5f5f5;
}
.btn-salvar {
  background-color: #6F4E37;
  border: none;
  color: #fff;
}
.btn-salvar:hover {
  background-color: rgba(111, 78, 55, 0.9);
}
</style>
