import './Tenent_service_req.css';
import React, { useEffect, useState } from 'react';
import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import P_reqs from '../components/Past_requests';
import { arrowBack } from 'ionicons/icons';

/*
This will go under the button when the backend is set up
<IonList>
        {request.map(requests => (<P_Reqs Unit_ID = {unit.Unit_ID} Laundry = {unit.Laundry} Utilities = {unit.Utilities} Bedrooms = {unit.Bedrooms} Unit_Name = {unit.Unit_Name} Den = {unit.Den} In_Unit_WasherDryer = {unit.In_Unit_WasherDryer} LED_Lighting = {unit.LED_Lighting} Basement = {unit.Basement} NSPI_Meter = {unit.NSPI_Meter} image = 'https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c3VucmlzZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80' Monthly_Rent = {unit.Monthy_Rent}/>))}
</IonList>
*/            
//const [request, setRequest] = useState<Array<any>>([]);
export const Tenant_services: React.FC = () => {
    return(
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle>Tenant Services</IonTitle>
                <IonButtons slot="start">
                        <IonBackButton color="#ffa200" text="Back" icon={arrowBack} defaultHref="/Menu_Tab" />
                    </IonButtons>
            </IonToolbar>
        </IonHeader>

        <IonContent>
            <IonButton color="primary" expand="block" fill="solid"  routerLink={"/Tenent_service_req"} routerDirection="none">
                Make new Resquest
            </IonButton>
        </IonContent>
    </IonPage>
    );
};
export default Tenant_services;