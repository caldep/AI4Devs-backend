import { Router } from 'express';
import { getCandidatesByPositionController } from '../presentation/controllers/positionController';

const router = Router();
router.get('/position/:id/candidates', getCandidatesByPositionController);

export default router;
