import express from 'express'
import sequelize from './config/conn.js'
import cors from 'cors'
import usuario from './models/usuarioModel.js'

const app = express()
const port = 3333

app.use(cors())
app.use(express.json())

try {
	await sequelize.authenticate()
	console.log('Conexão com o banco de dados foiii.');
    await sequelize.sync(); 
	console.log("Todos os modelos foram sincronizados com sucesso.");
} catch (error) {
	console.error('Não foi possível conectar ao banco:', error);
}


app.get('/', (req, res) => {
	res.send('rota de teste!');});

    app.listen (port, ()=>{
        console.log(`servidor rolando em http://localhost${port}`)
    })