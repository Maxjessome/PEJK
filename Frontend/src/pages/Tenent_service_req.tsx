import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonButton, IonToast, IonMenuButton, IonButtons, IonInput, IonItem, IonLabel, IonSelect, IonSelectOption, IonListHeader, IonTextarea, IonBackButton } from '@ionic/react';

import axios from 'axios';
import './Tenent_service_req.css';
import React, { useEffect, useState } from 'react';
import { NavButtons } from '../components/NavButtons';
import { arrowBack } from 'ionicons/icons';



function setText(arg0: any) {
  throw new Error('Function not implemented.');
}
export const Tenent_service_req: React.FC = () => {
  const[Issues, setIssue] = useState<string[]>([]);
  const [text, setText] = useState<string>();
  return (
    <IonPage>
      <IonContent>
          <IonListHeader>
          <IonToolbar>
              <IonTitle>Make service requests</IonTitle>
              <IonButtons slot="start">
                        <IonBackButton color="#ffa200" text="Back" icon={arrowBack} defaultHref="/Tenant_services" />
                    </IonButtons>
            </IonToolbar>
            </IonListHeader>
            <IonItem>
              <IonLabel position="stacked">Request ID</IonLabel>
              <IonTextarea rows={1} cols={10} placeholder="Enter request ID" value={text} onIonChange={e => setText(e.detail.value!)}></IonTextarea>
            </IonItem>
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
              <IonTextarea rows={6} cols={20} placeholder="Enter any notes here..." value={text} onIonChange={e => setText(e.detail.value!)}></IonTextarea>
            </IonItem>
      </IonContent>

    </IonPage>
  );
};

export default Tenent_service_req;

