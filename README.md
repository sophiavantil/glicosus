<h1 align="center"> GlicoSUS - Monitoramento de Glicemia </h1>

# Índice

- [Título](#Título)
- [Índice](#índice)
- [Descrição do Projeto](#descrição-do-projeto)
- [Funcionalidades](#funcionalidades)
- [Status do Projeto](#status-do-projeto)
- [Acesso ao Projeto](#acesso-ao-projeto)
- [Integração com Inteligência Artificial (Simulada)](#integracao-com-ia-(simulada))
- [Acesso ao servidor](#acesso-ao-servidor)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Equipe e Professores](#equipe-e-professores)

# Descrição do Projeto

GlicoSUS é uma aplicação web desenvolvida como projeto final de curso da Escola da Nuvem, criada para auxiliar pacientes no monitoramento da glicemia.

O projeto permite:
- Registrar valores de glicemia com data, hora e observações.
- Registrar refeições e detalhar os alimentos consumidos.
- Registrar sintomas com intensidade e observações adicionais.
- Visualizar um histórico completo de todos os registros.

O layout utiliza as cores do SUS e foi desenvolvido com foco em usabilidade e clareza.

# Funcionalidades

- Login com CPF ou Cartão SUS (simulação)
- Menu inicial com cards para cada funcionalidade
- Registro de glicemia, alimentação e sintomas
- Histórico de registros com visualização detalhada

# Status do Projeto

- Protótipo funcional ✅
- Não conectado a banco de dados real ⚠️
- Não integrado a APIs do SUS ⚠️
- Interface responsiva e amigável ✅
- Funcionalidades de login e navegação implementadas com LocalStorage ✅

# Acesso ao Projeto

1. Clone o repositório:
`` https://github.com/sophiavantil/glicosus.git ``

2. Abra ``login.html`` no navegador.
3. Faça login com CPF ou Cartão SUS fictício.
4. Use o menu para registrar glicemia, alimentação ou sintomas.
5. Visualize o histórico de registros.

# Integração com Inteligência Artificial (Simulada)

O projeto GlicoSUS possui uma IA simulada para gerar alertas e recomendações inteligentes com base nos registros do usuário (glicemia, alimentação e sintomas). Essa IA não é real, mas sim um protótipo que simula respostas inteligentes de forma segura, apenas para fins educativos e demonstrativos.

Funcionalidades da IA simulada:
- Alertas de glicemia baixa ou alta.
- Sugestões simples de alimentação saudável.
- Recomendações baseadas na intensidade de sintomas.
- Mensagens seguras que não substituem orientação médica.

Uso opcional do Compromise:
Para tornar a análise de texto mais inteligente, é possível utilizar a biblioteca Compromise. Ela permite identificar palavras-chave em descrições de alimentos ou sintomas, gerando recomendações automáticas sem precisar escrever manualmente todas as palavras no código.
- No terminal, dentro da pasta do projeto, execute:
`` npm install compromise ``

# Acesso ao servidor

1. Pré-requisitos
- Node.js instalado (versão recomendada: >=16).
- Terminal ou prompt de comando.
- Projeto clonado na sua máquina.

2. Instalar dependências
No terminal, navegue até a pasta do projeto e execute:
`` npm install `` 

3. Iniciar o servidor
Ainda na pasta do projeto, execute:
`` npm start `` 

Você verá uma mensagem no terminal:
`` Servidor rodando na porta 3000 ``
Isso significa que o servidor está pronto para receber requisições.

4. Teste

- Abra o navegador e acesse as páginas do projeto.
- Preencha o formulário com os dados desejados.
- Clique em Salvar Registro.
- Um alerta ou recomendação será exibido automaticamente, simulando a resposta de uma IA inteligente

Para interromper o servidor, pressione ``Ctrl + C`` no terminal.

# Tecnologias Utilizadas

- **HTML5** – Estrutura das páginas
- **CSS3** – Estilização e layout
- **JavaScript** – Lógica de login, navegação e manipulação de dados

<img width="48" height="48" src="https://img.icons8.com/color/48/html-5--v1.png" alt="html-5--v1"/> <img width="48" height="48" src="https://img.icons8.com/fluency/48/css3.png" alt="css3"/>  <img width="48" height="48" src="https://img.icons8.com/color/48/javascript--v1.png" alt="javascript--v1"/>

# Equipe e Professores

Integrantes do Projeto:
- Guilherme Santoro
- Madalena Almeida
- Rafael Xavier
- Sophia Vantil
- Vanessa Fermino

Professores:
- Carlo Seixas - Módulo RE/Start
- Bruno Marques - Módulo de Inteligência Artificial
