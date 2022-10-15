import { Router } from 'express';
import { ComobidityController } from '../controller/comorbidityController';

const comorbidityRoutes = Router();
const comorbidityController = new ComobidityController();

comorbidityRoutes.post('/', comorbidityController.CreateComorbidity);

comorbidityRoutes.get('/', comorbidityController.FindAllComorbidity);

comorbidityRoutes.delete('/:id', comorbidityController.DeletComorbidity);

comorbidityRoutes.put('/:id', comorbidityController.UpdateComorbidity);

export { comorbidityRoutes };
