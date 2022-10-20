import { EUserType } from "../Enums/EUserType";

export function IsAdmin (value: string){
    const eUserType = Object.values(EUserType);
    return eUserType.includes(value as unknown as EUserType.Admin)
}

export function IsDonor (value: string){
    const eUserType = Object.values(EUserType);
    return eUserType.includes(value as unknown as EUserType.Donor)
}

export function IsReceiver (value: string){
    const eUserType = Object.values(EUserType);
    return eUserType.includes(value as unknown as EUserType.Receiver)
}

export function IsOrganization (value: string){
    const eUserType = Object.values(EUserType);
    return eUserType.includes(value as unknown as EUserType.Organization)
}

export default { IsAdmin, IsDonor, IsReceiver, IsOrganization};