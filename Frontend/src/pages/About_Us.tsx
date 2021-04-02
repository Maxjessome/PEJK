import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList, IonItemDivider, IonButtons, IonBackButton,} from '@ionic/react';
import './Tab2.css';
import { Menu } from '../components/Menu';
import { NavButtons } from '../components/NavButtons';
import { arrowBack } from 'ionicons/icons';

export const about_Us: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
          <IonToolbar>
            <IonTitle>About us</IonTitle>
                <IonButtons slot="end">
                    <NavButtons/>
                </IonButtons>
                <IonButtons slot="start">
                        <IonBackButton color="#ffa200" text="Back" icon={arrowBack} defaultHref="/Menu_Tab" />
                    </IonButtons>
            </IonToolbar>
      </IonHeader>
      <IonContent>
        About us content goes here
      </IonContent>
    </IonPage>
  );
};

export default about_Us;
