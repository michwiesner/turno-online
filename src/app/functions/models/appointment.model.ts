import { NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";

export class Appoinment {
    date: NgbDateStruct;
    hour: string;
    pacientName: string;
    dni: number;
    insurance: string;
    insuranceNum: number;
    status: string;
    createdAt: Date;
    contact: string;
    updatedAt?: Date;
}

export class Appoinments {
    date: string;
    appoinments: Appoinment[];
}