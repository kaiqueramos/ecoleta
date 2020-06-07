> Cada adversidade, cada fracasso, cada dor de cabeça carrega consigo a semente de um benefício igual ou maior.

> *Napoleon Hill*

![](https://img.shields.io/badge/npm-6.14.4-green)
![](https://img.shields.io/badge/node-12.17.0-darkgreen)
![](https://img.shields.io/badge/sqlite3-4.2.0-yellow)
![](https://img.shields.io/badge/React-3.4.1-blue)
![](https://img.shields.io/badge/React%20Native-4.0.0-blue)
![](https://img.shields.io/badge/Expo-3.21.5-lightgrey)


# Ecoleta
> Um marketplace que conecta pessoas que precisam descartar resíduos com as empresas que os coletam

<p align="center">
  <img src="https://raw.githubusercontent.com/Azhoth/ecoleta/776ff5716ffa69634bc8f04c82fa4e6ea312f95a/capa.svg">
</p>

## Como iniciar o projeto na sua máquina:

### Back End
- Faça o clone do projeto e entre na pasta server
- Baixe todas as dependências na sua máquina usando um dos comandos abaixo:
```
  $ npm i
  $ yarn
```
- Inicíe o arquivo de banco de dados
```
  $ npm run knex:migrate
  $ npm run knex:seed
```

### Front End Web
- Entre na pasta web e instale todas as dependêcias com um dos códigos abaixo:
```
  $ npm i
  $ yarn
```
- Rode um dos seguintes comandos:
```
  $ npm start
  $ yarn start
```
- O React está configurado para a porta 3000 do localhost. Uma janela se abrirá normalmente.

### Mobile
- Entre na pasta mobile e instale todas as dependêcias com um dos códigos abaixo:
```
  $ npm i
  $ yarn
```
- Rode o comando:
```
  $ npm start
```
- Faça a leitura do QRCode com o aplicativo do expo no seu celular.
- Você deve estar conectado na mesma rede, tanto com seu celular, quanto com o computador que roda a aplicação
- Caso não esteja, deve-se fazer um recurso de acesso do tipo 'tunneling'

## Um pouco sobre as tecnologias usadas

Foram tantas.... hehe
Primeiramente, usei no back end o nodejs, e usei algumas libs como axios para leitura da API, o Insomnia para fazer algumas requisições fakes, 
usei o multer para a aplicação poder lidar com upload de arquivos, o banco de dados SQLite, que é leve e não precisa de nenhum
programa para rodar e o celebrate, para poder validar os dados recebidos do front end.

No front end eu usei o React, usando a lib create-react-app, e dentro dela pude usar o leaflet, que lida com mapas e exibição do mesmo,
usei o dropzone, que possibilita receber imagens, recursos de ícones, além dos próprios recursos do react como o useState e o useEffect, 
descobri uns novos, como o changeEvent e o formEvent.

O mobile foi tudo de bom, pois eu nunca tinha feito nada assim antes. Quando cheguei quase no fim, tive que recomeçar do zero pois não
encontrava o bug... mas deu tudo certo. Aprendi que é realmente muito parecido com o React para web, aprendi que os estilos são lidos de forma
diferente, aprendi a usar o Expo, fazer importações de fontes de forma fácil, composição de emails, abrir aplicativos do celular que está
rodando (como o whatsapp), usar mapas, envio de dados para o back end... foi tudo muito bom para minha evolução.

## Quer me ajudar com o projeto?

Faça um fork! Sério, se quiser, fique a vontade. Depois faça um pull request, e vamos crescer juntos!

## Minhas redes

[Linkedin](https://www.linkedin.com/in/kaiqueramos/)

[Email](kaiqueramospessoal@gmail.com) kaiqueramospessoal@gmail.com

## Tem uma empresa?
Se sim, e precisar de algum desenvolvedor em tempo integral, estou disponível! Pode entrar em contato no email acima.

