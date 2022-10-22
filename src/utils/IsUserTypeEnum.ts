import { EUserType } from "../enums/EUserType";

export function IsAdmin (value: string){
    return value == EUserType.Admin;
}

export function IsDonor (value: string){
    return value == EUserType.Donor;
}

export function IsReceiver (value: string){
    return value == EUserType.Receiver;
}

export function IsOrganization (value: string){
    return value == EUserType.Organization;
}

export default { IsAdmin, IsDonor, IsReceiver, IsOrganization};