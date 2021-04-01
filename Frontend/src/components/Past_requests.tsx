import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonImg, IonTitle } from "@ionic/react"
import React from "react"

interface Past_reqs{
    Request_ID : number;
    Request_type : string;
    Description : string;
    Status : string;
    Date_requested: Date;
    Date_completed : Date;
}

const P_reqs: React.FC<Past_reqs> =({Request_ID, Request_type, Description, Date_requested, Date_completed, Status})=>{
    return(
        <IonCard>
            <IonCardHeader>
                <IonTitle>
                    Request_ID: {Request_ID}
                </IonTitle>
                <IonCardSubtitle>
                    Status : {Status}
                </IonCardSubtitle>
                <IonCardContent>
                    Request Type : {Request_type}
                    Date requested : {Date_requested}
                    Description : 
                    {Description}
                    Date completed : {Date_completed}
                </IonCardContent>
            </IonCardHeader>
        </IonCard>
    )
}
export default P_reqs;