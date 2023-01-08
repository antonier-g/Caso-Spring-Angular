import { Enterprise } from "./enterprise"
export class Departament {
    id: number;
    create_by: String;
    create_date: Date;
    modified_by: String;
    modified_date: Date;
    status: String;
    description: String;
    name: String;
    phone: String;
    enterprise: Enterprise;
}
