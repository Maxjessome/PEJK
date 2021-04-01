import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList, IonItemDivider, IonButtons,} from '@ionic/react';
import './Tab2.css';
import { Menu } from '../components/Menu';
import { NavButtons } from '../components/NavButtons';

export const about_Us: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
          <IonToolbar>
            <IonTitle>About us</IonTitle>
                <IonButtons slot="end">
                    <NavButtons/>
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
