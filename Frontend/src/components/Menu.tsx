import {
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonMenuToggle,
    IonItem,
    IonLabel,
  } from "@ionic/react";
  import React from "react";
  
  export const Menu = () => {
    return (
      <IonMenu side="end" contentId="main">
        <IonHeader>
          <IonToolbar color="light">
            <IonTitle>MENU</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonMenuToggle auto-hide="false">
              <IonItem button routerLink={"/Building_Selection"} routerDirection="none">
                <IonLabel>Building Selection</IonLabel>
              </IonItem>
            </IonMenuToggle>
            <IonMenuToggle auto-hide="false">
              <IonItem button routerLink={"/About_Us"} routerDirection="none">
                <IonLabel>About us</IonLabel>
              </IonItem>
              <IonItem button routerLink={"/Login"} routerDirection="none">
                <IonLabel>Logout</IonLabel>
              </IonItem>
            </IonMenuToggle>
          </IonList>
        </IonContent>
      </IonMenu>
    );
  };