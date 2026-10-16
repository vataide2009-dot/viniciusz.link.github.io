import usuario from "../models/usuarioModel.js";

export const criarusuario = async (req, res) => {

	try {
		const { nome, email, senha, reflexoes,aprendizados,conexoes } = request.body;
		const novoUsuario = await usuario.create({ nome, email, senha, reflexoes,aprendizados,conexoes });
		response.status(201).json(novoUsuario);
	} catch (error) {
		response.status(400).json({ message: 'Erro ao criar a tarefa', error: error.message });
	}
};

    