<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
<header class="Header-CQC">
  <div class="Titulo">
    <img src="/icons/vscode-icons_file-type-coffeescript.svg" alt="Icone-de-café" class="cafe">
  <h1>
    COFFE QUALITY<br>CHALLENGE
  </h1>
  </div>
  <nav>
    <div class="Home-1">
      <img src="/icons/material-symbols_home-rounded(1).svg" alt="Home" class="Icon-Nav">
      <RouterLink to="/">HOME</RouterLink>
    </div>
    <div class="Avaliacoes-1">
      <img src="/icons/material-symbols_fact-check-rounded(1).svg" alt="Avaliações" class="Icon-Nav">
      <RouterLink to="/avaliacoes">AVALIAÇÕES</RouterLink>
    </div>
    <div>
      <img src="/icons/solar_ranking-bold(1).svg" alt="Ranking" class="Icon-Nav">
      <RouterLink to="/ranking">RANKING</RouterLink>
    </div>
  </nav>
  <img src="/icons/ic_round-account-circle.svg" alt="Perfil" class="Perfil">
</header>
</template>

<style scoped>
header.Header-CQC {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  max-width: 100%;
  align-items: center;
  justify-content: space-between;
  height: 5.5vw;
  border-bottom: 2px solid #f90505;
  display: flex;
}
img.cafe {
  width: 4vw;
  height: auto;
  margin-right: 10px;
}
div.Titulo {
  display: flex;
  margin-left: 1vw;
  height: auto;
}
div.Titulo h1 {
  color: #6F4E37;
  font-size: 2vw;
}
nav {
  display: flex;
  gap: 5vw;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  height: 100%;
}
nav div {
  display: flex;
  align-items: center;
  gap: 0.5vw;
  transition: opacity 0.2s ease;
  height: 100%;
}
nav div:hover {
  opacity: 0.7;
  border-bottom: 2px solid #6F4E37 ;
}
nav a {
  text-decoration: none;
  font-family: sans-serif;
  color: #6F4E37;
  font-weight: bold;
  font-size: 1.5vw;
}
nav img.Icon-Nav {
  width: 2.2vw;
  height: auto;
}
img.Perfil {
  width: 3vw;
  height: auto;
  margin-right: 1vw;
}
</style>
