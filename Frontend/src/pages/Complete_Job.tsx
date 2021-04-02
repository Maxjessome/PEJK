import React, { useEffect, useState } from 'react';
import { IonBackButton, IonButton, IonButtons, IonCardContent, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import {arrowBack} from 'ionicons/icons';

export const Finish_Job: React.FC = () => {
    return(
        <IonPage>
            <IonContent>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton color="#ffa200" text="Back" icon={arrowBack} defaultHref="/Current_Jobs" />
                    </IonButtons>
                    <IonTitle>Finish Job description</IonTitle>
                </IonToolbar>
            </IonHeader>
            </IonContent>
        </IonPage>
    );
};
export default Finish_Job;