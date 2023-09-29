// Importar o arquivo se configuração
const app = require('./app');

// Importar a porta do servidor 
const PORT = app.get('port');

// Testar servidor 
app.listen(PORT, () => console.log(`Running at port ${PORT}`))