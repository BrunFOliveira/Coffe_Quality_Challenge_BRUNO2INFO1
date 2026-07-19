<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <main class="container-erro">
    <div class="card-404">
      <h1 class="codigo-erro">404</h1>
      <h2 class="titulo-erro">Café não encontrado</h2>
      <p class="descricao-erro">
        Parece que você tentou acessar uma página que não existe no Campeonato Coffee Quality Challenge.
      </p>
      <div class="wrapper-ilustracao">
        <img src="/icons/cafePNG.svg" alt="Xícara de café fumegante" class="img-cafe">
      </div>
      <div class="grupo-botoes">
        <RouterLink to="/" class="btn-inicio">
          Voltar ao Início
        </RouterLink>
        <RouterLink to="/ranking" class="btn-ranking">
          Ver Ranking
        </RouterLink>
      </div>
      <small class="codigo-tecnico">Código do erro: Página não encontrada.</small>
    </div>
  </main>
</template>

<style scoped>
.container-erro {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #FAF6F2;
  font-family: sans-serif;
  padding: 2vw;
  box-sizing: border-box;
  margin-top: 3.7vw;
}
.card-404 {
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.04);
  padding: 4vw;
  max-width: 550px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.codigo-erro {
  font-size: 5.5vw;
  font-weight: bold;
  color: #8C6246;
  margin: 0;
  line-height: 1;
}
.titulo-erro {
  font-size: 1.8vw;
  font-weight: bold;
  color: #1a110b;
  margin: 1.5vw 0 1vw 0;
}
.descricao-erro {
  font-size: 1.1vw;
  color: #666666;
  max-width: 420px;
  margin: 0 auto 2vw auto;
  line-height: 1.4;
}
.wrapper-ilustracao {
  margin-bottom: 2.5vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.img-cafe {
  width: 6vw;
  min-width: 70px;
  height: auto;
}
.grupo-botoes {
  display: flex;
  gap: 1vw;
  margin-bottom: 2.5vw;
}
.btn-inicio, .btn-ranking {
  text-decoration: none;
  font-size: 1vw;
  font-weight: 500;
  padding: 0.8vw 1.8vw;
  border-radius: 8px;
  transition: background-color 0.2s, transform 0.1s;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.btn-inicio {
  background-color: #7A533A;
  color: #ffffff;
}
.btn-inicio:hover {
  background-color: #65432E;
}
.btn-ranking {
  background-color: #F3F1EE;
  color: #1a110b;
  border: 1px solid rgba(0, 0, 0, 0.05);
}
.btn-ranking:hover {
  background-color: #E8E5E0;
}
.codigo-tecnico {
  font-size: 0.9vw;
  color: #A5A5A5;
}
</style>
