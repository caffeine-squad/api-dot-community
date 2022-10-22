import 'reflect-metadata'
import { container } from 'tsyringe';
import { Router } from "express";
import { AddressController } from '../controller/AddressController';

const addressRoute = Router();

const addressController = container.resolve<AddressController>(AddressController)
addressRoute.get('/:cep', (req, res) => addressController.get(req,res));

export {addressRoute};
