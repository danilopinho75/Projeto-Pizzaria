import { Request, Response } from 'express';
import { CreatCategoryService } from '../../services/category/CreateCategoryService';

class CreateCategoryController {
    async handle(req: Request, res: Response) {
        const { name } = req.body;
        const createCategoryService = new CreatCategoryService();

        const category = await createCategoryService.execute({
            name
        });

        return res.json(category);
    }
}

export { CreateCategoryController }