import { IonContent, IonItem, IonLabel, IonList, IonListHeader, IonSelect, IonSelectOption, IonPage, IonItemDivider, IonTitle, IonToolbar, IonHeader } from '@ionic/react';
import Listing from '../components/Buildings';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Tab1.css';


const Locations = {
  header: 'Location relative to Dalhousie/Smu campus',
  subHeader: 'Place On_Off_Campus'
};

const buildingRent = {
  header: 'Building Rent Cost',
  subHeader: 'Select your rent range'
};

const buildingParking = {
  header: 'Buildings with parking',
  subHeader: 'Select parking options'
};

export const Building_Selection: React.FC = () => {

  const [buildings, setBuildings] = useState<Array<any>>([]);
  const[location, setLocation] = useState<string[]>([]);
  const[rent, setRent] = useState<string[]>([]);
  const[parking, setParking] = useState<string[]>([]);


  useEffect (()=>{
    axios.get('http://localhost:3000/Building').then(res => setBuildings(res.data.data))
  },[])

  return(
    <IonPage>
      <IonContent>
        <IonList>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Building Selection</IonTitle>
            </IonToolbar>
          </IonHeader>

          <IonItem>
            <IonLabel>Location</IonLabel>
            <IonSelect>
              interfaceOptions={location}
              interface="alert"
              multiple={true}
              placeholder="Select Location Option"
              onIonChange={(e: { detail: { value: React.SetStateAction<string[]>; }; }) => setLocation(e.detail.value)}
              value={location}
              <IonSelectOption value="On_Campus">On Campus</IonSelectOption>
              <IonSelectOption value="Off_Camous">Off Campus</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem>
            <IonLabel>Rent</IonLabel>
            <IonSelect>
              interfaceOptions={rent}
              interface="alert"
              multiple={true}
              placeholder="Select Rent range"
              onIonChange={(e: { detail: { value: React.SetStateAction<string[]>; }; }) => setRent(e.detail.value)}
              value={rent}
              <IonSelectOption value="400-500">$400-$500/Month</IonSelectOption>
              <IonSelectOption value="$500+">$500+</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem>
            <IonLabel>Parking</IonLabel>
            <IonSelect>
              interfaceOptions={parking}
              interface="alert"
              multiple={true}
              placeholder="Select Parking Options"
              onIonChange={(e: { detail: { value: React.SetStateAction<string[]>; }; }) => setParking(e.detail.value)}
              value={parking}
              <IonSelectOption value="Included">Included</IonSelectOption>
              <IonSelectOption value="Extra_Cost">Extra Charge</IonSelectOption>
              <IonSelectOption value="No_Parking">No Parking</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItemDivider>Displaying Buildings Based of Your Search Criteria</IonItemDivider>
          <IonItem>Location: {location} </IonItem>
          <IonItem>Rent: {rent} </IonItem>
          <IonItem>Parking: {parking} </IonItem>
        </IonList>
      </IonContent>
    </IonPage>


  );
};


export default Building_Selection;