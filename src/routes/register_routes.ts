import { Application, Request, Response } from 'express';
import { RegisterController } from '../controllers/register_controller';

export class RegisterRoutes {

    private register_controller: RegisterController = new RegisterController();

    public route(app: Application) {
        
        app.post('/register', (req: Request, res: Response) => {
            this.register_controller.create_register(req, res);
        });

	      app.get('/test', (req: Request, res: Response) => {
		 res.status(200).json({message: "Get request successfull"});
	      });
	      app.post('/test', (req: Request, res: Response) => {
		 res.status(200).json({message:"Post request successfull"});
	      });	

    }
}