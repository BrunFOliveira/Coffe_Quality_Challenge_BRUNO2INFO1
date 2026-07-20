# Material da atividade

## Primeira Tela: Home

### Nesta página usei um arquivo universal *cafes.js* onde armazena a lista de avaliações com seus respectivos dados, usando computed para que fosse possível alterar em tempo real. O computed() aprendi nas aulas de deswebII e globalizar por assim dizer aprendi por uma atividade anterior que envolvia fazer um carrinho de compras para uma livraria, assim como exportá-los e importá-los.

![Imagem da página Home](/public/PrintHome.png)

## Segunda Tela: Avaliações

### Nesta página usei *Math.max* e *Math.min* para impedir que o sistema aceite o usuário de colocar uma avaliação maior que 10 ou menor que 0 em qualquer modalidade das propostas nas quais vi sobre mesmo nas aulas de programação ano passado, assim como Math.floor, Math.ceil, etc. Para formar uma lista com os itens da lista de avaliações em coluna utilizei conceitos de css como display: flex, flex-direction: colunm, no html (template) usei a tag ul e li utilizando a diretiva v-for para gerar os itens conforme já havia sido praticado em uma atividade anterior mencionada antes. Utilizei form para a criação do formulário como boas práticas no html. O id fiz questão de fazer a lógica para o programa achar usando a função map(), que já foi utilizada antes nas aulas antes, somando o maior id + 1, dessa forma seria possível organizar por id em ordem decrescente. 

![Imagem da página Avaliações](/public/PrintAvaliacoes.png)

## Terceira Tela: Ranking

### Não há muito mais o que dizer acho, mas os cards utilizei expansão e encolhimento usando lógica e css assim como era feito com o 'hambúrguer' em versões mobile, então só reciclei o conceito.

![Imagem da página Avaliações](/public/PrintRanking.png)
