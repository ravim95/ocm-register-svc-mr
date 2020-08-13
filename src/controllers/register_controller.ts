import {Application, Request, Response } from 'express';
import { insufficientParameters, mongoError, successResponse, failureResponse } from '../modules/common/service';
import { IRegister } from '../modules/register/model';
import RegisterService from '../modules/register/service';
import e = require('express');
const axios = require('axios');

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
                	var apiurl = 'https://ocm-registration-svc-mr-dev-mr.sandbox-ocp431-one-89dadfe96916fcd27b299431d0240c37-0000.eu-gb.containers.appdomain.cloud/register';
                	//var apiurl = 'http://localhost:9080/register';
			axios.post(apiurl, register_data)
			    .then((res) => {
				console.log('Body: ', register_data);
				res.json({
				        STATUS: 'SUCCESS',
				        MESSAGE: 'register successfull',
				        register_data
				    });
				//successResponse('register successfull', register_data, res);
			    }).catch((err) => {
				console.error(err);
				res.json({
				        STATUS: 'FAILURE',
				        MESSAGE: 'api call failure',
				        register_data
				    });				
				//failureResponse('api call failure', register_data, res);
			    });                              
                    
                }
            });
    }

}
