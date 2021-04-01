import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonButton, IonToast, IonMenuButton, IonButtons, IonInput, IonItem, IonLabel, IonSelect, IonSelectOption, IonListHeader } from '@ionic/react';

import axios from 'axios';
import './Tenent_service_req.css';
import React, { useEffect, useState } from 'react';
import { NavButtons } from '../components/NavButtons';
import { text } from 'ionicons/icons';


export const Tenent_service_req: React.FC = () => {
  const[Issues, setIssue] = useState<string[]>([]);
  return (
    <IonPage>
      <IonContent>
        <IonList>
          <IonListHeader>
          <IonToolbar>
              <IonTitle>Make service requests</IonTitle>
                  <IonButtons slot="end">
                  <NavButtons/>
              </IonButtons>
            </IonToolbar>
            </IonListHeader>
          <IonItem>
            <IonLabel>Request type</IonLabel>
            <IonSelect>
              interfaceOptions={Issues}
              interface="alert"
              multiple={true}
              placeholder="Select Location Option"
              onIonChange={(e: { detail: { value: React.SetStateAction<string[]>; }; }) => setIssue(e.detail.value)}
              value={Issues}

              <IonSelectOption value="Heating">Heating Issue</IonSelectOption>
              <IonSelectOption value="Damage">Damage</IonSelectOption>
              <IonSelectOption value="Plumbing">Plumbing Issues</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem>
              <IonLabel position="stacked">Description</IonLabel>
              <IonInput value={text}> </IonInput>
            </IonItem>
          </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tenent_service_req;