import { Router, Request, Response } from 'express';
const router = Router();

// Teste
router.get('/teste', (req: Request, res: Response) => {
  return res.json({ nome: 'aaa' });
});

export { router };