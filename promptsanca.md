# 🧠 PROMPT — DESENVOLVIMENTO DE SITE (MÍDIA KIT DIGITAL)

Você é um desenvolvedor web sênior especializado em Next.js, React e Tailwind CSS, com forte foco em UI/UX para sites premium de mídia kit, creators e marketing digital.

---

# 📌 CONTEXTO DO PROJETO

Você deve criar um site de mídia kit digital para um perfil de marketing gastronômico chamado:

# “Sanca por Aí”

O objetivo do projeto é transformar um mídia kit em PDF (com aproximadamente 20 páginas) em uma experiência web moderna, responsiva, profissional e interativa.

O site deve funcionar como:

* mídia kit digital
* apresentação comercial
* portfólio de campanhas
* ferramenta de captação de leads comerciais

---

# 📂 FONTE DE DADOS

O conteúdo base está localizado no seguinte caminho local (Windows):

C:\Users\Eduardo Peccinin\Documents\midia kit

⚠️ IMPORTANTE:

* O PDF é a fonte principal e única de verdade.
* Nenhuma informação deve ser inventada.
* Todo o conteúdo do PDF deve ser analisado cuidadosamente.
* As informações devem ser convertidas fielmente para o website.

---

# 🎯 OBJETIVO DO SITE

O site NÃO deve ser uma landing page comum.

O resultado final deve ser um:

> Mídia Kit Digital Interativo baseado diretamente no design e estrutura visual do PDF original.

O site deve apresentar:

* perfil profissional
* métricas
* audiência
* serviços
* campanhas
* informações comerciais
* contato
* sistema de pré-cadastro

---

# 🧠 DIREÇÃO PRINCIPAL (MUITO IMPORTANTE)

# O SITE DEVE REPLICAR O ESTILO VISUAL DO PDF

Cada página do PDF deve ser convertida em uma seção equivalente do site.

O design deve:

* manter a mesma hierarquia visual do PDF
* preservar composição visual
* respeitar tipografia e espaçamentos
* manter aparência editorial/comercial
* transmitir sensação de “PDF interativo premium”

📌 Em outras palavras:

> O site deve parecer uma versão viva e navegável do PDF original.

⚠️ NÃO criar:

* layout genérico de SaaS
* blog
* landing page comum
* dashboard
* estrutura visual aleatória

---

# 🧱 STACK OBRIGATÓRIA

* Next.js (App Router)
* React
* Tailwind CSS
* TypeScript
* Framer Motion (opcional para animações)

---

# 🏗️ ESTRUTURA DO PROJETO

O projeto deve seguir arquitetura organizada e escalável.

Exemplo esperado:

src/
├── app/
├── components/
│   ├── sections/
│   ├── ui/
│   └── layout/
├── data/
├── lib/
├── hooks/
└── styles/

---

# 📄 CONVERSÃO DO PDF EM WEBSITE

O PDF contém aproximadamente 20 páginas.

Cada página deve ser transformada em:

* uma seção web equivalente
* mantendo intenção visual original
* preservando narrativa visual

---

# 🧩 POSSÍVEIS SEÇÕES

As seções devem ser criadas com base no PDF.

Possíveis áreas:

* Hero Section
* Sobre o perfil
* Métricas e números
* Audiência e demografia
* Serviços oferecidos
* Portfólio de campanhas
* Cases de sucesso
* Parceiros e marcas
* Pacotes comerciais
* CTA comercial
* Pré-cadastro
* Contato final

---

# 🎨 DIREÇÃO DE DESIGN

O design deve possuir:

* aparência premium
* estilo editorial
* visual corporativo moderno
* foco em marketing gastronômico
* estética de apresentação comercial

Características obrigatórias:

* tipografia forte
* grids organizados
* espaçamento consistente
* composição semelhante a PDF
* design responsivo
* contraste forte para métricas
* animações suaves e discretas

---

# ⚙️ REQUISITOS TÉCNICOS

* Código limpo
* Componentização reutilizável
* Performance otimizada
* SEO básico
* Mobile-first
* Responsividade total
* Imagens otimizadas
* Estrutura escalável

---

# 📋 SISTEMA DE PRÉ-CADASTRO / CAPTAÇÃO DE LEADS

O site deve possuir um sistema de pré-cadastro para empresas interessadas em:

* gravações
* publis
* campanhas
* parcerias comerciais

O objetivo é modernizar o atendimento atual realizado via WhatsApp.

---

# 🧾 CAMPOS OBRIGATÓRIOS DO FORMULÁRIO

O sistema de pré-cadastro deve solicitar as seguintes informações:

* Nome
* Nome da empresa
* Plano desejado
* Melhores dias para gravação
* Melhores horários para gravação
* Perfil do estabelecimento (@ do Instagram)
* Objetivo da divulgação

---

# 🎯 OBJETIVO DO CAMPO “OBJETIVO DA DIVULGAÇÃO”

O campo “Objetivo da divulgação” deve ajudar a equipe do “Sanca por Aí” a entender a intenção comercial do cliente antes do atendimento.

Exemplos de objetivos:

* Divulgação de inauguração
* Aumentar movimento do estabelecimento
* Divulgação de evento
* Lançamento de produto
* Fortalecimento da marca
* Divulgação sazonal/promocional

O campo pode ser:

* input de texto
  OU
* select/dropdown com opções pré-definidas

Priorizar UX simples e intuitiva.

---

# 📲 FLUXO DO FORMULÁRIO

Após o preenchimento:

* o usuário deve ser redirecionado automaticamente para o WhatsApp
* a mensagem deve ser montada automaticamente com todos os dados preenchidos

Exemplo de mensagem:

Olá! Tenho interesse em uma gravação com o Sanca Por Aí.

Nome:
Empresa:
Plano desejado:
Melhores dias:
Melhores horários:
Instagram do estabelecimento:
Objetivo da divulgação:

---

# ⚠️ IMPORTANTE

NÃO solicitar telefone do usuário.

O próprio WhatsApp já fornecerá:

* número
* nome do contato
* canal direto de continuidade do atendimento

O objetivo é reduzir atrito no preenchimento e aumentar conversão de leads.


---

# 📲 INTEGRAÇÃO COM WHATSAPP

Após o preenchimento, o sistema deve permitir envio direto para o WhatsApp da empresa.

Número oficial:
+55 16 99231-2494

A mensagem deve ser montada automaticamente usando os dados do formulário.

Exemplo de mensagem:

Olá! Tenho interesse em uma gravação com o Sanca Por Aí.

Nome:
Empresa:
Plano desejado:
Melhores dias:
Melhores horários:
Instagram do estabelecimento:

---

# 💬 FLUXO DE ATENDIMENTO ATUAL (REFERÊNCIA)

"Sanca Por Aí agradece seu contato. Aqui é a Thalyta!

Como podemos ajudar?

Caso você queira agendar uma gravação, ou tem interesse em saber mais, encaminhe por favor:

➡️ Seu nome e função no estabelecimento;
➡️ Perfil do seu estabelecimento (@ do Instagram);
➡️ Melhor dia e horário para uma possível gravação;

Caso queira divulgar um evento, por favor, já encaminhar as informações do mesmo.

⚠️ Pedimos sua compreensão para aguardar nosso retorno e passar todos os dados solicitados acima.

Pedimos que, por favor, evitem enviar áudio. A mensagem por escrito facilita a comunicação.

Muito obrigada!
Equipe Sanca Por Aí ☺️"

O formulário deve modernizar e automatizar esse fluxo.

---

# ✨ EXPERIÊNCIA ESPERADA NO FORMULÁRIO

* elegante
* intuitiva
* profissional
* mobile-first
* com validação básica
* CTA forte
* feedback visual após envio

---

# 📩 CONTATOS OFICIAIS

## WhatsApp

+55 16 99231-2494

## Email

[contatosancaporai@gmail.com](mailto:contatosancaporai@gmail.com)

## Instagram

https://www.instagram.com/sancaporai/

---

# ⚙️ IMPLEMENTAÇÃO SUGERIDA

O formulário pode utilizar:

* redirecionamento direto para WhatsApp
  OU
* server actions/API

Priorizar:

* simplicidade
* manutenção fácil
* UX fluida

---

# 📦 BOAS PRÁTICAS OBRIGATÓRIAS

* Não inventar informações
* Preservar fidelidade visual ao PDF
* Separar conteúdo da interface
* Criar componentes reutilizáveis
* Priorizar experiência premium
* Priorizar conversão comercial

---

# 🚀 ENTREGÁVEL FINAL

Gerar:

* projeto completo em Next.js
* estrutura organizada
* componentes reutilizáveis
* layout responsivo
* seções baseadas no PDF
* sistema de pré-cadastro
* integração WhatsApp
* site pronto para produção

---

# 📌 OBJETIVO FINAL

O resultado deve ser:

> Um mídia kit digital premium, fiel ao PDF original, moderno, responsivo, interativo e preparado para conversão comercial.
