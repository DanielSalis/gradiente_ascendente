## Sobre o modelo
O modelo text-davinci-003 foi desenvolvido para seguir instruções com precisão, mesmo sem exemplos. Foi treinado em dados até junho de 2021, sendo esse mais um motivo que o torna um poderoso modelo recomendado para uma grande gama de casos.

## Sobre temperature
Temperatura é o parâmetro que controla a aleatoriedade das respostas geradas. O valor 0 escolhido torna as respostas mais determinísticas e coerentes, sendo útil buscar respostas precisas e controladas.

## Sobre max_tokens
Token é a menor informação que um modelo consegue compreender, dessa forma, considerando que o número máximo de tokens do modelo selecionado é 4096, somando prompt e saída, foi necessário deteminar um valor que estivesse dentro desse range, com margem para conseguir ler o conteúdo da página. Assim, ficou definido que o valor ideial é 2048.

## Sobre n
Sendo n o número de conclusões do chat, foi definido que o valor ideal para esse parâmetro seria 1, para não atingir o limite máximo de tokens do modelo.