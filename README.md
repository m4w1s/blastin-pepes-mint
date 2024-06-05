# blastin-pepes-mint
 
## Как запустить
Для работы требуется установленный Node.js v18 или выше (https://nodejs.org/en/download)

Нужно открыть CMD, перейти в папку с софтом и выполнить следующие команды:

Установка зависимостей
```bash
npm install
```

Запуск
```bash
npm start
```

## Формат кошельков в wallets.txt

```txt
privateKey;quantity

// Пример

0x0000001;1
0x0000002;2
```

## Как изменить/добавить другие RPC
В файле main.js сверху есть переменная RPC_URLS с 2 предустановленными RPC.
Там можно добавлять другие RPC, или убрать ненужные.

Для каждого кошелька выбирается рандомный.
```js
const RPC_URLS = [
  'https://rpc.blast.io',
  'https://rpc.ankr.com/blast',
];
```
