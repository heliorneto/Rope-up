# Site Roupe Up (Front-end)

Este repositório é dedicado para os arquivos de código fonte (React/JavaScript) do front-end da página da Rope Up na internet. Para o back-end utilize o repositório: [Rope-up-backend](https://github.com/heliorneto/Rope-up-backend).

## Dependências

O site utiliza a biblioteca React, de JavaScript, por meio da tecnologia Node.js. Além de **instalar o Node.js** no seu sistema, é necessário que você instale as seguintes dependências (utilizando o gerenciador de pacotes *npm*):

- ReactRouter (Possibilita a criação de múltiplas páginas e o redirecionamento entre elas)

Comando de instalação: `react-router-dom`

- ~~React-bootstrap~~

Para **instalar todas as dependências**, basta executar o comando `npm i` no diretório do projeto.

## Favicons

Os ícones de favorito e web-app foram gerados a partir de uma única imagem .png com fundo transparente com um tom cinza claro (que gera melhor contraste em temas claros e escuros). Todas as versões da imagem (escaladas e convertidas no formato de cada plataforma), bem como as configurações (.xml e .json) necessárias. Para gerar esses arquivos foi usado o site [RealFaviconGenerator](https://realfavicongenerator.net/), que gera um pacote (*favicon package*) .zip contendo esses arquivos. O site também pode ser utilizado para verificar a implementação dos *favicons* após o *deploy* do site.

## Organização do código e componentização

A biblioteca React facilita o trabalho em páginas web por meio do processo de "componentização", em que as páginas são dividas entre vários componentes (que funcionam como uma "unidade" na implementação). Sendo assim, o código dessa página segue a "componentização" como boa prática e está dividido em diretórios da maneira que é apresentada a seguir.

### Estrutura de diretórios

A pasta de código fonte (***src***) é dividida nos seguintes sub-diretórios:

- Components (Contém os componentes menores da interface que são divididos por várias páginas do site)
- Pages (Contém os arquivos de código e estilo das páginas que compõem o site)
- Raiz (Contém o código da página principal e do ReactRouter, que permite a mudança de páginas, bem como os estilos aplicáveis a todo o site, isto é, em todas as páginas)

Já a pasta ***public*** contém os arquivos que serão acessados pelo usuário da página (como os ícones da página e arquivos de imagem e vídeo, por exemplo), bem como o arquivo base HTML (em que se modifica o título, ícones, meta-dados e *analytics* para a página, dentre outros). Via de regra, arquivos referenciados pelo atributo `href` do html em algum componente não serão carregados corretamente se não estiverem na pasta ***public***. Subdiretórios podem ser utilizados, tomando como raiz (referência) a pasta public.

### Divisão de componentes

Se um componente será usado por várias páginas, seus arquivos devem ser colocados na pasta ***Components*** em um subdiretório com o nome do componente. Caso contrário, seus arquivos devem ficar no diretório da página que o usa (que, por sua vez, é um subdiretório da pasta ***Pages***).

Após determinar se um componente é específico para uma página ou se é geral, convencionamos nomear o arquivo fonte (JavaScript) e o arquivo de estilo (CSS) com o mesmo nome (que remete ao componente em questão), iniciando sempre com letra maiúscula.

## Padrões de escrita de código

- **Idioma** para nomes de variáveis, funções, classes, componentes, comentários, etc.:
  - Usamos o **inglês** como **único** idioma para nosso código (incluindo comentários e *commits* do git)

### Padrões de nomenclatura

A seguir, são definidos, individualmente, os padrões de nomenclatura que serão utilizados em cada um dos componentes envolvidos no processo de desenvolvimento (como variáveis, funções, arquivos e diretórios):

- **Variáveis e funções:**
  - Seguimos o **padrão do JavaScript** usando o sistema *camelCase* que define o seguinte:
    1. Os nomes se iniciam com letra **minúscula**
    2. Nomes compostos têm o 2º, 3º, ..., n-ésimo nome iniciado com letra maiúscula
  - Exemplo: `var umaVariavelQualuqer = 10;`

- **Classes e componentes (React)**
  - São **iniciados** com letra **maiúscula**, seguindo, então, o sistema *camelCase*
  - Exemplo: `class ClasseQualquer`

- **Arquivos**:
  - Os nomes devem ser escritos com **letra minúscula** e nomes compostos devem ser **separados com underline ('_')**
  - Exemplo: `componente-teste.js`

- **Diretórios**:
  - Os nomes devem se iniciar com **letra maiúscula** e ser, preferencialmente, simples (apenas um nome)
  - Exemplo: `/Home/`

- **Classes e IDs (CSS)**
  - Vamos usar a convenção de nomenclatura do CSS, que define que os nomes devem ser escritos com **letra minúscula** e nomes compostos devem ser **separados por hífen (-)**
  - Exemplo: `.classe1-css #id-componente`

## Uso do git

Aqui são definidos os padrões/regras que devem ser utilizados na operação do repositório git (para criar *commits*, *branches* e fazer *merges*).

- **Nomenclatura e manutenção de *branches*:**
  - Novos *branches* de **funcionalidade** deve ser **criados a partir do *branch development*** e nomeados como `feature-"Nome-da-funcionalidade"`.
  - Quando um *branch* não estiver mais sendo usado (por exemplo, quando uma funcionalidade for concluída), você deve fazer um merge com o *development*, para manter o repositório organizado.
  - *Branches* de **manutenção** (usados para refatorar código) devem ser nomeados como `fix-"Nome-do-problema`, também criados a partir do *develop*
  - *Branches* ***release*** devem ser nomeados de acordo com o **número da versão a ser lançada** o número de versão deverá, a princípio, seguir o seguinte padrão:
    - `(Nº da versão principal).(Número do fix atual, começando do 0)`
    - Uma **tag deverá ser criada no *main*** quando for feito o *merge* do *release-branch*

- **Uso do *branch main*:**
  - O branch *main* é **protegido**, ou seja, **não deve receber commits diretamente**, apenas *merge* dos *release-branches* e *hotfix*

Via de regra, **utilizamos o padrão de trabalho "Git-Flow"** que você pode pesquisar sobre caso tenha alguma dúvida que não está escrita aqui. Uma boa **refêrencia** sobre o git-flow pode ser encontrada [aqui](https://medium.com/trainingcenter/utilizando-o-fluxo-git-flow-e63d5e0d5e04).
