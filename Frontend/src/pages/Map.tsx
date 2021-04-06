import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList, IonItemDivider, IonButtons,} from '@ionic/react';
import './Tab2.css';

export const Map: React.FC = () => {

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

export default Map;
