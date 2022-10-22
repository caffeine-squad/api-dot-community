import { baseUrl } from './../config/axios';
import { Request, Response } from "express";
import { autoInjectable } from 'tsyringe';
import AddressService from '../services/AddressService';

@autoInjectable()
export class AddressController {
    constructor(private addressService: AddressService) {}

    async get(request: Request, response: Response){
        try {
            const {cep} = request.params
            const address = await this.addressService.get(cep)
            response.status(200).json(address)

        } catch (error: any) {
            const {message} = error
            response.status(400).json(message)
        }
    }
}