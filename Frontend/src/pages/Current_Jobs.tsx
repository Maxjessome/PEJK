import React, { useEffect, useState } from 'react';
import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Open_Jobs from '../components/Current_Job_Cards';
import { arrowBack } from 'ionicons/icons';

const Jobs =[
   { Request_ID :200, Request_type : "Heating", Description : "My heating doesn't work at all :(", Date_requested : 19990315},
   {Request_ID :200, Request_type : "Heating", Description : "My heating doesn't work at all :(", Date_requested : 19990315
}]
//const [Jobs, setRequest] = useState<Array<any>>([]);
//{Jobs.map(Job => (<Open_Jobs Request_ID = {Jobs.Request_ID} Request_type = {Jobs.Request_type} Description = {Jobs.Description} Date_requested ={Jobs.Date_requested}/>))}
export const Current_jobs: React.FC = () => {
    
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Current_Jobs</IonTitle>
                    <IonButtons slot="start">
                        <IonBackButton color="#ffa200" text="Back" icon={arrowBack} defaultHref="/Menu_tab" />
                    </IonButtons>
                </IonToolbar>
                <IonList>
                    {Jobs.map((Job) =><Open_Jobs {...Job}/>)}
                </IonList>
            </IonHeader>
        </IonPage>
    );
};
export default Current_jobs;