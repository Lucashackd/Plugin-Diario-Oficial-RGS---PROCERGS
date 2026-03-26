# Plugin Diario Oficial RGS PROCERGS

Extensão para Microsoft Edge que substitui a nova aba pelo resultado do **Diário Oficial do Estado do RS**, filtrado automaticamente pela entidade **PROCERGS**, com a data de hoje já preenchida.

Em fins de semana, a extensão recua automaticamente para a sexta-feira anterior, já que não há publicações aos sábados e domingos.

---

## Estrutura do projeto

```
diario-oficial-extension/
├── manifest.json   # Configuração da extensão
├── newtab.html     # Página carregada ao abrir nova aba
└── redirect.js     # Lógica de redirecionamento com data dinâmica
```

---

## Como instalar

### 1. Baixe os arquivos

Clone o repositório ou baixe o ZIP e extraia em uma pasta de sua preferência.

```bash
git clone https://github.com/seu-usuario/plugin-diario-oficial-rgs-procergs.git
```

> Se preferir baixar o ZIP: clique em **Code → Download ZIP** no GitHub e extraia a pasta.

### 2. Abra o gerenciador de extensões do Edge

Na barra de endereço do Edge, acesse:

```
edge://extensions
```

### 3. Ative o Modo de desenvolvedor

No canto inferior esquerdo da página, ative a opção **Modo de desenvolvedor**.

![Modo de desenvolvedor](https://i.imgur.com/placeholder.png)

### 4. Carregue a extensão

Clique em **Carregar sem pacote** e selecione a pasta onde os arquivos foram extraídos (a pasta que contém o `manifest.json`).

### 5. Pronto

A extensão está instalada. Abra uma nova aba — ela será redirecionada automaticamente para o Diário Oficial com a data de hoje.

---

## Como funciona

Ao abrir uma nova aba, o Edge carrega o `newtab.html` definido no `manifest.json`. Esse arquivo executa o `redirect.js`, que:

1. Obtém a data atual do sistema
2. Se for sábado ou domingo, recua para a sexta-feira anterior
3. Monta a URL do Diário Oficial com os parâmetros corretos
4. Redireciona a aba automaticamente

A URL gerada segue o padrão:

```
https://www.diariooficial.rs.gov.br/resultado
  ?tipoDiario=DOE
  &entidade=CENTRO DE TECNOLOGIA DA INFORMAÇÃO E COMUNICAÇÃO DO ESTADO DO RGS
  &dataIni=YYYY-MM-DD
  &dataFim=YYYY-MM-DD
  &forceFilter=true
```

---

## Como atualizar

Caso você edite algum arquivo da extensão, basta acessar `edge://extensions` e clicar no ícone de atualizar (🔄) na extensão, ou clicar em **Atualizar** no topo da página.

---

## Compatibilidade

| Navegador | Compatível |
|---|---|
| Microsoft Edge | ✅ |
| Google Chrome | ✅ |
| Firefox | ❌ (usa padrão diferente) |

---

## Licença

Distribuído sob a licença MIT. Sinta-se livre para usar, modificar e distribuir.
