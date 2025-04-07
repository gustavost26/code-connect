# **Code Connect**

**Code Connect** é uma plataforma colaborativa que permite aos usuários criar, publicar e compartilhar suas ideias, experiências e conhecimentos sobre tecnologias específicas. O aplicativo é construído com Next.js, React, Prisma e Postgres com deploy feita na Vercel.

# **Site Online na Vercel**
- **Visite nosso site**: [Code Connect](https://code-connect-x.vercel.app/)

[![listagem.png](https://i.postimg.cc/gkyYv3Sd/listagem.png)](https://postimg.cc/QHtGDKZn)

[![pesquisa.png](https://i.postimg.cc/x8D2mdLc/pesquisa.png)](https://postimg.cc/TL9FMf76)

[![interno.png](https://i.postimg.cc/Cx69D1gS/interno.png)](https://postimg.cc/HrXS1Tnh)

[![erro1.png](https://i.postimg.cc/Pxn3zvFs/erro1.png)](https://postimg.cc/yJny7xHv)

[![erro2.png](https://i.postimg.cc/Jn3TT79y/erro2.png)](https://postimg.cc/Vr6Bvws1)


---


# Índice

- [Visão Geral](#visão-geral)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Uso](#uso)
- [Contrato Inteligente](#contrato-inteligente)
- [Contribuição](#contribuição)
- [Licença](#licença)
- [Contato](#contato)


---


# Visão Geral

O **Code Connect** é uma plataforma colaborativa que permite aos usuários criar, publicar e compartilhar suas ideias, experiências e conhecimentos sobre tecnologias específicas. Por meio de artigos, tutoriais, snippets de código e projetos práticos, a comunidade pode contribuir com conteúdos relevantes, trocar aprendizados e impulsionar o desenvolvimento técnico coletivo. Seja para documentar soluções, explorar novas ferramentas ou simplesmente inspirar outros desenvolvedores, o Code Connect se posiciona como um espaço dinâmico para quem vive e constrói tecnologia.


---


# Funcionalidades

- **Interação com Posts**: Os usuários podem acessar as publicações para visualizar mais detalhes. A navegação entre os posts pode ser feita por meio dos botões "Próxima Página" e "Página Anterior". Também disponibilizamos um campo de pesquisa para que você encontre facilmente o conteúdo desejado.

---


# Tecnologias Utilizadas

- **Next.js 14.2.24**: Framework React para desenvolvimento web.
- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Prisma**: É um ORM moderno para Node.js e TypeScript que facilita o acesso ao banco de dados com segurança e produtividade.
- **Winston**: Biblioteca de log para Node.js que permite registrar e gerenciar logs de forma flexível e personalizável.
- **Docker**: Plataforma que permite criar, empacotar e executar aplicações em containers de forma isolada e portátil.
- **PostgreSQL**: Sistema de banco de dados relacional open source, robusto e avançado, ideal para aplicações que exigem performance e confiabilidade.
- **DBeaver**: Ferramenta gráfica universal para gerenciamento de bancos de dados, compatível com diversos DBs como PostgreSQL, MySQL e Oracle.


---


# Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- **Node.js** (versão 14 ou superior)
- **NPM** (gerenciador de pacotes do Node.js)
- **Docker** (caso queira utilizar conteiner)
- **PostgreSQL** Podes utilizar instalando diretamente na maquina ou no container docker


---


# Instalação
1. Clone o repositório:

```bash
git clone https://github.com/gustavost26/code-connect
```

2. Navegue até o diretório do projeto:

```bash
cd code-connect
```
3. Instale as dependências:

```bash
npm install
```


---


# Uso

## Executando o Projeto Localmente

1. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```
2. Acesse o aplicativo no navegador:

Abra `http://localhost:3000` para ver o aplicativo.

## Interagindo com a Plataforma

A plataforma ainda esta em desenvolvimento, toda interação será detalhada assim que todas as funcionalidades estiverem concluidas.


---


# Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

Passos para contribuir:

1. **Faça um fork do projeto**.

No GitHub, clique em "Fork" no canto superior direito da página do repositório.

2. **Clone o repositório forkado**:

```bash   
git clone https://github.com/seu-usuario/code-connect.git
```
3. **Crie uma nova branch**:

```bash
Copiar código
git checkout -b feature/nova-funcionalidade
```

4. **Commit suas mudanças**:

```bash
git commit -m 'Adiciona nova funcionalidade'
```

5. **Envie para o seu fork no GitHub**:

```bash
git push origin feature/nova-funcionalidade
```

6. **Abra um pull request**:
- No GitHub, vá até o seu fork e clique em "Compare & Pull Request".


---


# Licença
Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para detalhes.


---


# Contato
- **Nome**: Gustavo Silva Teles
- **Email**: gustavost26@gmail.com
- **GitHub**: gustavost26


---


# Agradecimentos
Agradeço ao professor Vinicius Neves, que me inspirou a desenvolver esse projeto.

---


# Notas Adicionais
- **Segurança**: Certifique-se de nunca compartilhar suas chaves privadas. O Code Connect não solicita nem armazena informações privadas dos usuários


---


# Solução de problemas

Se você encontrar problemas ao executar o aplicativo, tente as seguintes etapas:

- **Erros ao Instalar Dependências**:
   - Certifique-se de que está utilizando a versão correta do Node.js e NPM.
   - Exclua a pasta node_modules e o arquivo package-lock.json, e execute npm install novamente.

- **Problemas com Docker**:
   - Verifique se o container foi criado corretamente.
   - Verifique se o container esta ligado.

- **Problemas com Banco de Dados**:
  - Certifique-se de que o banco foi criado.
  - Verifique se a striing de conexão estão com os dados corretos: password, db name, porta de conexão.


---


# Desenvolvimento Futuro

- **Melhorias na Interface**:
   - Melhorar a responsividade em dispositivos móveis.
- **Funcionalidades Avançadas**:
   - Implementar sistema autenticação.
   - CRUD de Posts 
   - Comentários nos posts

---

Esperamos que você aproveite o Code Connect! Se tiver alguma dúvida ou sugestão, não hesite em entrar em contato.