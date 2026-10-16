import { Router } from 'express';
import { criarusuario } from '../controllers/usuarioControllers';

const router = Router();

router.post('/usuarios', criarusuario);

export default router;
