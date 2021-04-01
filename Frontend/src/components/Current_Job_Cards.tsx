import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonImg, IonTitle, IonButton } from "@ionic/react"
import React from "react"

interface Current_job{
    Request_ID : number;
    Request_type : string;
    Description : string;
    //Status : string;
    Date_requested: number;
}
// Date requested : {Date_requested}
//Status : {Status}
const Open_Jobs: React.FC<Current_job> =({Request_ID, Request_type, Description, Date_requested})=>{
    return(
        <IonCard>
            <IonCardHeader>
                <IonTitle>
                    Request_ID: {Request_ID}
                </IonTitle>
            </IonCardHeader>
            <IonCardSubtitle>
                
            </IonCardSubtitle>
            <IonCardContent>
                Request Type : {Request_type}   
                Date requested : {Date_requested}
                Description : 
                {Description}
            </IonCardContent>  
            <IonButton color="primary" expand="block" fill="solid"  routerLink={"/Complete_Job"} routerDirection="none">
                Complete Job
            </IonButton>
        </IonCard>
    )
}
export default Open_Jobs;