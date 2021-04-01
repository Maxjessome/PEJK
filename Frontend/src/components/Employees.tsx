import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonImg } from "@ionic/react"
import React from "react"
interface EmployeeProps{
    Employee_ID :  number;
    Name : string;
    Phone_Num : number;
    Address : string;    
    Maintenance_Job_ID : number;
}
const Employee: React.FC<EmployeeProps>=({Employee_ID, Name, Phone_Num, Address, Maintenance_Job_ID})=>{

    return(
        <IonCard>
        <IonCardHeader>
        <IonCardTitle>{Name}</IonCardTitle>
          <IonCardSubtitle>{Employee_ID}</IonCardSubtitle>
          <IonCardSubtitle>{Phone_Num}</IonCardSubtitle>
          <IonCardSubtitle>{Address}</IonCardSubtitle>
        </IonCardHeader>

      </IonCard>

    )

}
export default Employee;