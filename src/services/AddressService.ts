import { baseUrl } from '../config/axios';
import { AddressResponseDTO } from './../models/User';

interface IAddressRequest {
    cep: string,
    logradouro: string,
    complemento: string,
    bairro: string,
    localidade: string,
    uf: string,
    ibge: string,
    gia: string,
    ddd: string,
    siafi: string
}

export default class AddressService {

    async get(cep: string): Promise<AddressResponseDTO> {

        let response: IAddressRequest = JSON.parse(await baseUrl.get(`${cep}/json`));

        const address: AddressResponseDTO = {
            cep: response.cep,
            address: response.logradouro,
            district: response.bairro,
            city: response.localidade,
            uf: response.uf
        }

        return address;
    }
}