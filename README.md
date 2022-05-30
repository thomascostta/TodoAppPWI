<h1 align="center">
  ToDo PWI App :iphone:
</h1>

<div align="center"></div>
  
<p align="center">
  <a href="#overview-book">Overview</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#video-tv">Video</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#how-to-use-toolbox">How to use</a>&nbsp;&nbsp;&nbsp;
</p>

---------------------------

## Overview :book:
  
### Segue as respostas:

Manutenibilidade e extensibilidade? Arquitetura e Design?
- Utilizei os princípios do conceito SOLID, principalmente das 2 primeiras letras, do Single Responsibility (Princípio da Responsabilidade Única), deixando os componentes isolados facilitando assim a realização de testes, reusabilidade e caso aparece algum bug, fica mais fácil para isolar e achar o problema e o segundo conceito do Open/Closed (Princípio do Aberto/Fechado), que deve ser capaz de estender um comportamento do componente, sem modificá-lo. Utilizei a lib Redux na versão mais recente Toolkit para fazer o gerenciamento de estado, deixando o hook useState apenas estado local e o Redux para estado global. No projeto criei uma pasta `commom` com componentes reutilizáveis em diversos locais do app, pasta `component` com seus respectivos componentes, pasta `page` deixando a Home que futuramente pode ser ampliada/implantada outras pages ou utilizando o React-Navigation caso queira e a pasta `Redux` com o gerenciamento de estado. 
- 

### Libs utilizadas: 
  - Redux Toolkit
  - react-native-vector-icons
  - react-native-modal
  
---------------------------

## Video :tv:

https://user-images.githubusercontent.com/82541529/167948125-b93ff516-79d6-40f1-964c-27ef33309614.mp4


---------------------------

# How to use :toolbox:

## Clone this repository
```bash
$ https://github.com/thomascostta/TodoAppPWI.git
```
## Go into the repository
```bash
$ cd ToDoListPWI
```
## Install the dependencies
`npm i` or `yarn`

## Start your Metro server:
```bash
npx react-native start
```

## Run :iphone:
Run the application (Android)
```bash
$ react-native run-android
```
Run the application (iOS)
```bash
$ react-native run-ios --simulator="iPhone XS Max"
```

## :handshake:

[![Linkedin Badge](https://img.shields.io/badge/-Thomas-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/tgmarinho/)](https://www.linkedin.com/in/thomasjeffcosta/) 
[![Gmail Badge](https://img.shields.io/badge/-thomas.jeffcosta@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:thomas.jeffcosta@gmail.com)](mailto:thomas.jeffcosta@gmail.com)

