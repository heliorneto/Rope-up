# Site Ropeup (Front-end)

Este repositório é dedicado para os arquivos de código fonte referentes ao *front-end* do [site da Ropeup](https://www.ropeup.com.br/home) na internet. O *back-end* do site utiliza uma instância do CMS (*Content Management System*) [Directus](https://docs.directus.io/getting-started/introduction/). Um **ambiente de teste que simula essa instância do *backend* pode ser encontrado no repositório [ropeup-cms-test](https://github.com/P3dr0D10100/ropeup-cms-test)**.

## Dependências

O site utiliza a biblioteca React, de JavaScript, por meio da tecnologia Node.js. Além de **instalar o Node.js** no seu sistema, é necessário que você instale as seguintes dependências (utilizando o gerenciador de pacotes *npm*):

- ReactRouter (Possibilita a criação de múltiplas páginas e o redirecionamento entre elas)

Comando de instalação: `npm install react-router-dom`

- Axios (Facilita o envio de requisições http/http(s) no client-side)

Comando de instalação: `npm install axios`

- ReactMarkdown (Converte o markdown com conteúdo de um artigo, vindo do servidor CMS, em HTML)

Comando de instalação: `npm install react-markdown`

- RemarkGFM (Adiciona suporte a mais itens da sintaxe do Markdown)

Comando de instalação: `npm install remark-gfm`

- ReactHelmet (Facilita a alteração do head da página, atuando, por exemplo, para melhorar o SEO)

Comando de instalação: `npm install react-helmet`

Para **instalar/atualizar todas as dependências**, basta executar o comando `npm i` no diretório do projeto.

## Favicons

Os ícones de favorito e web-app foram gerados a partir de uma única imagem do logo, em formato SVG com fundo transparente e um tom cinza claro (que gera melhor contraste em temas claros e escuros). Todas as versões da imagem (escaladas e convertidas no formato de cada plataforma), bem como as configurações (.xml e .json) necessárias foram geradas usando o site [RealFaviconGenerator](https://realfavicongenerator.net/), que gera um pacote .zip de nome (*favicon package*) contendo esses arquivos.

## Organização do código e componentização

A biblioteca React facilita o trabalho em páginas web por meio do processo de "componentização", em que as páginas são dividas entre vários componentes (que funcionam como uma "unidade" na implementação). Sendo assim, o código dessa página segue a "componentização" como boa prática e está dividido em diretórios da maneira que é apresentada a seguir.

### Estrutura de diretórios

A pasta de código fonte (***src***) é dividida nos seguintes sub-diretórios:

- Components (Contém os componentes menores da interface que são divididos por várias páginas do site)
- Fonts (Contém os arquivos de fonte e a configuração CSS para as fontes utilizadas no site)
- hooks (Contém *React Hooks* customizados para o nosso site)
  - No momento, apenas o hook *use_media*, que habilita os *breakpoints* da responsividade em JavaScript está definido.
- meta (Contém a configuração do *React Helmet* que é utilizada para gerar e setar os metadados do nosso site)
- Pages (Contém os arquivos de código e estilo das páginas que compõem o site)

A Raiz da pasta *src* contém o código principal, isto é, aquele que é utilizado para a geração de todas as páginas (*index.js* e *app.js*), um arquivo de CSS global (isto é, definição estilos que se aplicam a todas as páginas), um arquivo com as configurações de acesso do servidor CMS (*cms_config.js*) além do arquivo *routes.js* que permite configurar as rotas do nosso site, geradas pelo *ReactRouter*.

Já a pasta ***public*** contém os arquivos que serão acessados pelos usuários da página (como os ícones da página e arquivos de imagem e vídeo, por exemplo), bem como o arquivo base HTML que pode ser utilizado para configurações globais de metadados, como ícones e o título da página). Via de regra, **arquivos referenciados pelo atributo `href` do html em algum componente/página não serão carregados corretamente se não estiverem na pasta *public*.** Subdiretórios podem ser utilizados e tomam como raiz (referência) a pasta *public*.

### Divisão de componentes

Se **um código deve ser compartilhado por várias páginas**, então você deve **definir um componente**.  Os arquivos de um componente devem ser colocados em uma pasta com o mesmo nome deste, dentro da pasta pasta ***Components***.

Por outro lado, se seu **código define ou é utilizado apenas por uma página**, então você deve **definir uma página**. Os arquivos de uma página devem ser colocados na pasta *Pages* em uma pasta com o nome da página a ser definida.

Após determinar se o seu código representa um componente ou uma página, convencionamos que os **arquivos CSS e JavaScript devem ter o mesmo nome, que é o nome escolhido para a página/componente** que utiliza esse código.

## Padrões de escrita de código

- **Idioma** para nomes de variáveis, funções, classes, componentes, comentários, etc.:
  - Usamos o **inglês** como **único** idioma para nosso código (incluindo comentários e *commits* do git)

### Padrões de nomenclatura

A seguir, são definidos, individualmente, os padrões de nomenclatura que serão utilizados em cada um dos componentes envolvidos no processo de desenvolvimento (como variáveis, funções, arquivos e diretórios):

- **Variáveis e funções:**
  - Seguimos o **padrão do JavaScript** usando o sistema *camelCase* que define o seguinte:
    1. Os nomes se iniciam com letra **minúscula**
    2. Nomes compostos têm o 2º, 3º, ..., n-ésimo nome iniciado com letra maiúscula
  - Exemplo: `var someExampleVariable = 10;`

- **Classes e componentes (React)**
  - São **iniciados** com letra **maiúscula**, seguindo, então, o sistema *camelCase*
  - Exemplo: `class SomeClass`
    - Esta regra **também se aplica a funções que definem componentes**.
    - Exemplo: `function SomeComponent(props) { ... }`

- **Arquivos**:
  - Os nomes devem ser escritos com **letra minúscula** e nomes compostos devem ser **separados com underline ('_')**
  - Exemplo: `test_component.js`

- **Diretórios**:
  - Os nomes devem se iniciar com **letra maiúscula** e ser, preferencialmente, simples (apenas um nome)
  - Exemplo: `/Home/`

- **Classes e IDs (CSS)**
  - Vamos usar a convenção de nomenclatura do CSS, que define que os nomes devem ser escritos com **letra minúscula** e nomes compostos devem ser **separados por hífen (-)**
  - Exemplo: `.css-class1 #component-id`
  - Em **componentes**, damos **preferência ao uso de classes**, uma vez que um componente pode ter mais de uma ocorrência em uma mesma página e a **presença de IDs repetidos é uma péssima prática do HTML** que pode gerar problemas em alguns navegadores (uma vez que espera-se que os IDs sejam únicos).

## Uso do *git* e fluxo de trabalho *Git Flow*

Aqui são definidos os padrões/regras que devem ser utilizados na operação do repositório git (para criar *commits*, *branches* e fazer *merges*).

### Criação de *commits*

- Tente criar o **maior número de *commits* possível**, desde que estes ainda **façam sentido**.
  - O objetivo aqui é **fragmentar o seu trabalho** de modo que possíveis **erros em qualquer ponto possam ser facilmente revertidos**.
- Crie **mensagens de *commit*** que **façam sentido para todos**
  - Isso facilita a nossa comunicação, além de servir como referência para você mesmo no futuro, se precisar reverter algo que deu errado.
- Utilize o **inglês como idioma das mensagens** de *commit*.
- **Nunca envie um *commit* diretamente para o *branch main***, uma vez que isso viola o fluxo de trabalho do *Git Flow*, que é explicado em seguida.

### Nomenclatura e manutenção de *branches*

- Novos *branches* de **funcionalidade** devem ser **criados a partir do *branch develop*** e nomeados como `feature-"Nome-da-funcionalidade"`.
- *Branches* de **correção/refatoração** (usados para gerar grandes modificações em código existente) devem ser nomeados como `(fix/refactor)-"Nome-do-componente/página a ser alterado"` e **também devem criados a partir do *develop***.
- *Branches* ***release* contém código a ser testado** (dado como concluído em termos de novas funcionalidades) devem ser **nomeados de acordo com o número da versão a ser lançada** o número de versão deverá, a princípio, seguir o seguinte padrão:
  - `(Nº da versão principal).(Número do fix atual, começando do 0)`
  - Uma **tag deverá ser criada no *main* quando for feito o *merge*** de um *release-branch*
- Quando uma **funcionalidade ou correção for concluída**, você deverá **criar um *pull request* para o repositório *develop***. Este *pull request* deverá ser **revisado e aceito pelo *Scrum Master* do site**.
  - **Nunca dê merge em um brach diretamente**. Você sempre deve usar o sistema de *pull request* e aguardar a revisão do seu trabalho.
- Quando um ***branch* não estiver mais sendo usado** (por exemplo, quando o *pull request* é aceito ou uma funcionalidade é descontinuada), você deve **excluir este *branch*** para manter o repositório atualizado.

### Uso do *branch main*

- O *branch* ***main* é considerado "protegido"**, isto é, **não deve receber *commits* diretamente**, apenas *merge* ou *pull-request* vindo dos *release-branches* e *hotfix*

### *Branch hotfix*

- O ***branch hotfix***, assim como o *main* e o *develop* é um *branch* fixo, isto é, **não deverá ser excluído**.
- **Sempre que o *main* for atualizado**, isto é, quando uma nova versão for lançada, **um merge deverá ser feito com o *branch hotfix***, de modo que este esteja sempre atualizado em relação ao *main*.
- O **propósito do *branch hotfix*** é trabalhar em **pequenas correções de erros** encontrados **após o lançamento**
- Assim que **uma quantidade razoável de correções forem feitas ou se uma correção urgente for terminada, um *merge/pull request* pode ser feito diretamente para o *main***.
  - Isto quer dizer que os ***merges* com a *main* podem ser feitos sob demanda**.
- Sempre que um ***merge* da *hotfix* for feito, uma nova *tag* deve ser criada na *main* aumentado o número secundário da versão atual (indicando uma correção)**.
  - Por exemplo, se a versão atual é a `v1.0` e um merge foi feito, uma nova *tag release* deve ser criada com o número `v1.1` descrevendo o que foi corrigido

### Referência do *Git Flow*

Via de regra, **utilizamos o fluxo de trabalho conhecido como "Git-Flow"**. Caso tenha alguma dúvida que não foi esclarecida neste arquivo, uma boa **referência sobre o *Git Flow* pode ser encontrada [aqui](https://medium.com/trainingcenter/utilizando-o-fluxo-git-flow-e63d5e0d5e04)**.
