import { IonButton, IonMenuButton, IonContent, IonList, IonItem, IonLabel, IonMenuToggle, IonHeader, IonMenu, IonTitle, IonToolbar, IonPage } from "@ionic/react";
import React, { useEffect } from "react";
<<<<<<< HEAD
import './Tab2.css';
import callRoleBasedEndpoint from "../components/external-api"
=======
>>>>>>> 4af8bdb5cba8359149f64c316e7d980d3e60fa9c

export const Menu_Tab: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                <IonTitle>Menu</IonTitle>
                </IonToolbar>
            </IonHeader>
       
            <IonContent>
                <IonButton color="primary" expand="block" fill="solid" routerLink={"/About_Us"} routerDirection="none">
                    About us
                </IonButton>
                <IonButton color="primary" expand="block" fill="solid" routerLink={"/Building_Selection"} routerDirection="none">
                    Building Selection
                </IonButton>
                <IonButton color="primary" expand="block" fill="solid" routerLink={"/Map"} routerDirection="none">
                    Map
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
  export default Menu_Tab;