import { IonButton, IonMenuButton, IonContent, IonList, IonItem, IonLabel, IonMenuToggle, IonHeader, IonMenu, IonTitle, IonToolbar, IonPage } from "@ionic/react";
import React, { useEffect } from "react";
import './Tab2.css';

export const Menu_tab_tenant: React.FC = () => {
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
                    LogOut
                </IonButton>
         </IonContent>
    </IonPage>
    );
  };
  export default Menu_tab_tenant;