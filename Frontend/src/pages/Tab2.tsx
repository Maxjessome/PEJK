import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList, IonItemDivider,} from '@ionic/react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import './Tab2.css';

export const Tab2: React.FC = () => {

  const [text, setText] = useState<string>();
  const [number, setNumber] = useState<number>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>PEJK Map</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        map will go here
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
