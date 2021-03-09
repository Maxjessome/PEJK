import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonButton, IonToast, IonMenuButton } from '@ionic/react';

import axios from 'axios';
import './Tab3.css';
import React, { useEffect, useState } from 'react';
import Unit from '../components/Units';

const Tab3: React.FC = () => {
  const [units, setUnits] = useState<Array<any>>([]);
  const [saving, setSaving] = useState(false)
  useEffect (()=>{
    axios.get('http://localhost:3000/Units').then(res => setUnits(res.data.data))
  },[])
  const addEmployee = () => {
    setSaving(true)
    axios.get('http://localhost:3000/Employee/add?Employee_ID=4&Name="MaxCarl"&Phone_Num=90220&Address="1414"&Username="maxcarl"&Password="maxcarl"&Maintenance_Job_ID=4').then(()=> setSaving(false))
    
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonToast isOpen={saving} onDidDismiss={() => setSaving(false)} message="Adding" duration = {1000}/>
        <IonButton onClick = {addEmployee}>Add Employee</IonButton>
        <IonList>
          {units.map(unit => (<Unit address = {unit.Unit_Name} Unit_ID = {unit.Unit_ID} Bedrooms = {unit.Bedrooms} image = 'https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c3VucmlzZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'/>
            ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;