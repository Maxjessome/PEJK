import { IonButton, IonMenuButton, IonContent, IonList, IonItem, IonLabel, IonMenuToggle, IonHeader, IonMenu, IonTitle, IonToolbar, IonPage } from "@ionic/react";
import React, { useEffect } from "react";
import './Tab2.css';
import callRoleBasedEndpoint from "../components/external-api"

export const Menu_Tab: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                <IonTitle>Menu</IonTitle>
                </IonToolbar>
            </IonHeader>
       
            <IonContent>
                <IonButton color="warning" expand="block" fill="solid" routerLink={"/About_Us"} routerDirection="none">
                    About us
                </IonButton>
                <IonButton color="primary" expand="block" fill="solid" routerLink={"/Building_Selection"} routerDirection="none">
                    Building Selection
                </IonButton>
                <IonButton color="primary" expand="block" fill="solid"  routerLink={"/Tenant_services"} routerDirection="none">
                    Tenant Services
                </IonButton>
                <IonButton color="primary" expand="block" fill="solid"  routerLink={"/Login"} routerDirection="none">
                    Logout
                </IonButton>
                <IonButton color="primary" expand="block" fill="solid"  routerLink={"/Current_Jobs"} routerDirection="none" onClick = {callRoleBasedEndpoint}>
                    Current Jobs
                </IonButton>
                <IonButton color="primary" expand="block" fill="solid"  routerLink={"/Tab3"} routerDirection="none">
                tab 3
                </IonButton>
            </IonContent>
    </IonPage>
    );
  };
  export default Menu_Tab