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
  const sortBedrooms = () => {
    
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
<<<<<<< HEAD
          {units.map(unit => (<Unit Unit_ID = {unit.Unit_ID} Laundry = {unit.Laundry} Utilities = {unit.Utilities} Bedrooms = {unit.Bedrooms} Unit_Name = {unit.Unit_Name} Den = {unit.Den} In_Unit_WasherDryer = {unit.In_Unit_WasherDryer} LED_Lighting = {unit.LED_Lighting} Basement = {unit.Basement} NSPI_Meter = {unit.NSPI_Meter} image = 'https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c3VucmlzZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'/>
=======
          {units.map(unit => (<Unit address = {unit.Unit_Name} Unit_ID = {unit.Unit_ID} Bedrooms = {unit.Bedrooms} image = 'https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c3VucmlzZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'/>
>>>>>>> 12fcc090f07f328aaa1bd93d4e34c9dc8eded346
            ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;