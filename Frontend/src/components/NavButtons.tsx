import { IonButton, IonMenuButton, IonContent, IonList, IonItem, IonLabel, IonMenuToggle, IonHeader, IonMenu, IonTitle, IonToolbar } from "@ionic/react";
import React, { useEffect } from "react";

export const NavButtons = () => {
   const [mQuery, setMQuery] = React.useState<any>({
    matches: window.innerWidth > 12000 ? true : false,
  });

  useEffect(() => {
    let mediaQuery = window.matchMedia("(min-width: 12000px)");
    mediaQuery.addListener(setMQuery);

    return () => mediaQuery.removeListener(setMQuery);}, []);
  console.log(mQuery.matches);
  

  return (
    <div>
    {mQuery && !mQuery.matches ? (
      <IonMenuButton />
    ) : (
        <>
          <IonButton routerLink={"/About_Us"}>About us </IonButton>
          <IonButton routerLink={"/Tab2"}>Map</IonButton>
          <IonButton routerLink={"/Login"}>Login </IonButton>
          <IonButton routerLink={"/Tenent_service_req"}>Service request </IonButton>
      </>
       )}
  </div>
   
      
  
  );
};