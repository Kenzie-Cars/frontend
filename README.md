> # **Motors Shop**

- > ### Para visualizar o projeto no VSCode:

  1- Deve ter instalado:

  - Npm ou Yarn
  - VSCode

  2- Faça o clone do reposítório na sua máquina clicando no botão verde escrito <>Code e selecionando a opção de sua escolha e copie o conteúdo.

  3- No terminal do seu computador digite o comando `git clone opção_que_copiou_acima` aperte enter e aguarde finalizar.

  4- Digite o comando `cd frontend` e aperte enter

  5- Digite `code .` e aperte enter e a pasta será aberta no VSCode

  6- No terminal do VSCode digite: `npm install` ou `yarn` e aperte enter para instalar as dependencias.

  7- No terminal do VSCode digite: `npm run dev` ou `yarn dev` e aperte enter para iniciar a aplicação.

  8- Segurando a tecla "ctrl" clique no link que foi informado no terminal após a execução do comando acima.

  9- Pode utilizar a aplicação. De acordo com as informações abaixo.

  ***

- > ### Para visualizar o projeto direto no navegador:
  - Pode clicar nesse [link](https://kenzie-kars-frontend.vercel.app/)

---

</br>

> ### Abaixo estão as informações que você precisa saber para usar a plataforma localmente ou através do link:

</br>

> ### Página Inicial

- Na página inicial, você pode visualizar todos os anúncios de veículos publicados no site.

- Cada anúncio exibe uma foto do veículo, a descrição, o preço, o nome do anunciante, a quilometragem, o ano e se é uma boa oferta.

- Se você estiver interessado em ver mais informações sobre um veículo em particular, clique no anúncio para ser direcionado para a página de detalhes do veículo.

</br>

> ### Página de Detalhes do Veículo

- A página de detalhes do veículo contém todas as informações que já tem no anúncio da página inicial, uma parte com os comentários feitos sobre o veículo, tem acesso a mais fotos do veículo e também pode acessar todos os anúncios daquele anunciante.

- Se você estiver logado na plataforma, poderá comentar sobre o veículo e até mesmo clicar em "comprar" para iniciar o processo de compra.

- Se você não estiver logado, será necessário criar uma conta ou fazer login antes de poder comprar ou comentar.

</br>

> ### Página do Anunciante

- Cada anunciante tem uma página que pode ser acessada através do menu de navegação, onde você pode:

  - Criar novos anúncios

  - Ver todos os seus anúncios que em cada card terão:

    - Uma tag Ativo ou Inativo

    - Um botão de editar que abrirá um modal para atualizar as informações daquele anúncio em específico ou deletar

    - Um botão de ver detalhes que leva para a página de detalhamento do anúncio.

- Se o usuário não estiver logado ou estiver logado mas não for o anunciante daqueles carros, ele verá:

  - Apenas os anúncios que estiverem ativos, mas sem nenhuma tag

  - Se clicar em algum card ele será direcionado para a página de detalhamento daquele anúncio.

</br>

> ### Cadastro, Login e Recuperação de Senha

- #### **Cadastro**:

  - Se você ainda não tem uma conta, pode criar uma na página de cadastro.

  - Você precisará fornecer os dados do formulário:
    - Apenas o complemento do endereço não é obrigatório
    - Deve selecionar se é comprador ou anunciante
    - A senha deve conter no mínimo:
    - Uma letra maiúscula
    - Uma letra minúscula
    - Um número
    - Um caractere especial
    - 8 dígitos

  <br></br>

- #### **Login**

  - Se você já tiver uma conta, basta fazer login na página de login utilizando seu email e senha cadastrados na plataforma.

  <br></br>

- #### **Recuperação de senha**

  - Se você esquecer sua senha, poderá redefini-lá clicando em esqueci minha senha que fica na página de login

  - Ao clicar você será redirecionado para outra página onde deverá informar seu email cadastrado, em alguns segundos receberá um email com um link

  - Ao clicar no link recebido será redirecionado para a página de recuperação de senha onde deve informar uma nova senha e confirma-lá.

</br>

> ### Filtro de Busca

- Na página inicial, você encontrará um filtro de busca que pode ser usado para encontrar um veículo específico. Nele você pode:

  - Filtrar por marca
  - Modelo
  - Ano
  - Quilometragem
  - Cor
  - Preço
  - Combústivel
  - Ou também pode combinar os filtros

  <br></br>

- Depois de aplicar os filtros, os resultados serão atualizados automaticamente para exibir apenas os veículos que correspondem aos seus critérios.

</br>

> ### Menu de Navegação e Footer

- #### **Menu**:

  - Para todos os usuários cadastrados ao clicar em seu nome abrirá um menu com 3 opções:

    - Editar Perfil:
      - Ao clicar abrirá um modal para editar seus dados
    - Editar Endereço:
      - Ao clicar abrirá um modal para editar seu endereço
    - Sair:
      - Ao clicar será realizado o logout da aplicação.

  - Se for anunciante terá uma opção a mais chamada Meus Anúncios:

    - Ao clicar será redirecionado para a página com todos os seus anúncios.

  - Ao clicar na logo Motors Shop será redirecionado para a página inicial.

- #### **Footer**:
  - No Footer ao clicar no ícone ^ ele volta para o topo da página.
