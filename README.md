# Spotify - Projeto clone

Este sistema se baseia em um projeto de clone do Spotify Full Stack, ou seja, que além de possuir uma interface próxima a do Spotify, ele também apresenta uma conexão com banco de dados por meio de uma API.
Este projeto foi desenvolvido durante a jornada Full Stack da Hashtag Treinamentos, no qual eu tive a oportunidade de melhorar as minhas habilidades no desenvolvimento Full Stack.
Por meio desse projeto, pude aprender ainda mais sobre boas práticas de desenvolvimento e como utilizar ferramentas modernas que são muito utilizadas no mercado atual. 

## ⚙️ Funcionalidades

- **Acessar lista de artistas presentes no banco de dados:** Ao acessar esse sistema, o usuário poderá clicar no link "Mostrar tudo", na seção de artistas, e ter acesso a uma lista de artistas.

- **Acessar informações e músicas de cada artista:** Na tela de artistas, o usuários terá a possibilidade de clicar no ícone de alguma música do artista e até mesmo ouvi-la.

- **Acessar lista de músicas:** Na tela inicial, além de acessar os artistas, o usuário também poderá acessar a lista de músicas ao clicar no link "Mostar tudo" da seção de músicas, tendo acesso a cada uma das músicas.

- **Ouvir música:** Todos os dados utilizados nesse sistema estão presentes no banco de dados, como por exemplo os áudios das músicas, o que torna possível ouvi-las ao clicar em cada música, com sistema de play/pause, além de mudar de música com botões.

## 🛠️ Tecnologias utilizadas

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=blue)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)

- **JavaScript:** Responsável pela interatividade e dinamismo da interface.

- **HTML5:** Linguagem de marcação base para a criação da interface (Presente no React).

- **CSS:** Responsável pela estilização da interface.

- **Vite:** Ferramenta utilizado para criação de projeto em React.js.

- **React.js:** Biblioteca utilizada para a construção de componentes reutilizáveis ​​e interativos da interface.

- **Node.js:** Plataforma de desenvolvimento em JavaScript que permite executar código do lado do servidor.

- **Express.js:** Biblioteca do Node.js responsável pela criação do Servidor do Back-End da aplicação.

- **MongoDB:** Banco de dados NoSQL utilizado para armazenar os dados do sistema.

- **Git:** Controle de versionamento para rastrear alterações e gerenciar o desenvolvimento do projeto de forma colaborativa.

## 💻 Demonstração

Como o sistema ainda não teve o deply realizado,a seguir temos a apresentação de algumas telas dessa aplicação:

![Telas do spotify-clone](https://github.com/user-attachments/assets/ab84f388-9e7d-4cfd-9425-1d8dc0316677)

## 🚀 Como executar?

### Pré-requisitos

- Possuir instalação do Node.js em sua máquina.
   
- Possuir uma IDE que permita a utilização do Node, como por exemplo o VSCode.

### Execução

Este repositório possui tanto a uma pasta do sistema front-end, como também a pasta do sistema back-end. A seguir irei mostrar como rodar o projeto de forma rápida e eficiente. 

- **Clone o repositório na sua máquina local:**

```bash
git clone https://github.com/Walmir07/projeto-spotify-fullstack.git
```

- ### Executar front-end:

- **Ao acessar o diretório na sua IDE, acesse a pasta "front-end" e faça a instalação das dependências:**

```bash
npm install
```
ou apenas
```bash
npm i
```

- **Execute o código:**

```bash
npm run dev
```

- **Por fim, acesse a porta:**

http://localhost:5173

Nesse momento não será possível acessar a página, pois precisamos executar o back-end para que a nossa interface possa receber os dados da requisição da api, a seguir será mostrado como fazer isso.

- ### Executar back-end:

- **Abra um novo terminal.**

- **Acesse e execute o servidor presente na API da pasta back-end:**

```bash
node .\back-end\api\server.js
```
- **Se preferir você poderá acessar a rota do servidor pela porta:**

http://localhost:3000

- **Pronto, agora você terá acesso ao projeto. 😉**

## 📡 API - Rotas disponíveis

- **GET** `/api/artists` → Lista todos os artistas.

- **GET** `/api/songs` → Lista todas as músicas.

## 📜 Licença

Este projeto está sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👤 Autor

- **Walmir Lima** – [@Walmir07](https://github.com/Walmir07)