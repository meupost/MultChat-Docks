# MultChat-Docks

Manual do MultChat em português para quem configura a operação ou atende clientes. Aprenda a conectar um canal, organizar a equipe e responder à primeira conversa.

[Primeiros passos](#primeiros-passos) · [Atendimento](#atendimento) · [Problemas comuns](#problemas-comuns) · [Sobre o manual](#sobre-o-manual)

## Primeiros passos

Acesse o painel da sua empresa. Para configurar canais, filas e usuários, use uma conta com as permissões correspondentes. Os canais disponíveis dependem dos módulos liberados para a empresa.

### Organize a equipe e as filas

1. Em **Departamentos**, selecione **Novo departamento** e crie os grupos de atendimento da sua equipe, como Comercial ou Suporte.
2. Em **Usuários**, cadastre os atendentes ou abra o cadastro de quem já tem acesso.
3. Confira o perfil e as filas de cada atendente. Peça a alguém da equipe para entrar e confirmar que consegue abrir **Atendimentos**.

### Conecte o WhatsApp

1. Abra **Conexões** e selecione **Nova conexão**.
2. Escolha o tipo de conexão habilitado para a empresa.
   - **WhatsApp por QR Code**. No celular do número que será conectado, abra **Aparelhos conectados** no WhatsApp e escaneie o código exibido no MultChat.
   - **WhatsApp API Oficial**. Selecione a opção oficial e siga as etapas que o MultChat mostrar para vincular o número da empresa.
3. Abra os detalhes da conexão e confira o status. Revise as filas configuradas para o canal.
4. De outro número, mande uma mensagem de teste para o WhatsApp conectado. Abra **Atendimentos** e confira se a conversa chegou à equipe esperada.

## Atendimento

### Aceite e responda a uma conversa

1. Abra **Atendimentos**.
2. Localize a conversa pelo contato. Confira os filtros e a fila selecionada se ela não aparecer.
3. Se a conversa estiver aguardando atendimento, selecione **Aceitar**.
4. Leia o histórico, escreva no campo de mensagem e envie a resposta.

### Transfira uma conversa

Abra as ações da conversa e selecione **Transferir atendimento**. Escolha a fila ou o atendente de destino nas opções disponíveis e confirme.

### Encerre uma conversa

Quando a solicitação estiver resolvida, selecione **Resolver atendimento**. Se o MultChat solicitar informações sobre o encerramento, preencha os campos exibidos e confirme.

## Problemas comuns

| Situação | O que verificar |
| --- | --- |
| O QR Code expirou. | Abra a conexão novamente e escaneie o código que estiver na tela pelo menu **Aparelhos conectados** do celular. |
| O WhatsApp desconectou. | Abra **Conexões**, selecione o canal e confira o status. Em conexões por QR Code, use a opção de reconectar e faça o pareamento novamente se a tela solicitar. |
| A mensagem de teste não apareceu. | Confira se foi enviada para o número correto, se a conexão está ativa e se os filtros de **Atendimentos** mostram a fila esperada. |
| Uma opção não aparece no meu painel. | Peça ao administrador da empresa para verificar seu perfil, suas filas e os módulos habilitados. |
| Não consigo responder pelo WhatsApp API Oficial. | Confira o aviso na conversa. Se a janela de atendimento estiver encerrada, selecione um modelo de mensagem aprovado para retomar o contato. |

## Sobre o manual

Este repositório reúne os guias de uso do MultChat. O conteúdo é escrito em Markdown e será usado no portal de documentação do Mintlify.

Ao atualizar um guia, reproduza os passos no MultChat, use os nomes que aparecem nas telas e indique quando a ação depende de uma permissão ou de um tipo de conexão. Use dados fictícios nas capturas de tela e nos exemplos.
