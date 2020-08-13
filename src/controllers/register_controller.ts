import {Application, Request, Response } from 'express';
import { insufficientParameters, mongoError, successResponse, failureResponse } from '../modules/common/service';
import { IRegister } from '../modules/register/model';
import RegisterService from '../modules/register/service';
import e = require('express');

export class RegisterController {

	private register_service: RegisterService = new RegisterService();

    public create_register(req: Request, res: Response) {

	var appnbr = Math.floor(Math.random()*(53453465345-896786)+896786);
	 console.log(appnbr);
            const register_params: IRegister = {
		     appnbr: appnbr.toString(),
		     name: req.body.name,
		     age: req.body.age,
		     gender: req.body.gender,
		     father: req.body.father,
		     mother: req.body.mother,
		     address: req.body.address,
		     grade: req.body.grade,
	  	     entrtest: req.body.entrtest
            };
            this.register_service.createRegister(register_params, (err: any, register_data: IRegister) => {
                if (err) {
                    mongoError(err, res);
                } else {
                    successResponse('register successfull', register_data, res);
                }
            });
    }

}
