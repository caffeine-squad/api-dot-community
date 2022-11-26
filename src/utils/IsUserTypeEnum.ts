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

export function Exclude<User, Key extends keyof User>(
    user: User,
    keys: Key[]
  ): User {
    for (let key of keys) {
      delete user[key]
    }
    return user
  }

export default { IsAdmin, IsDonor, IsReceiver, IsOrganization, Exclude};