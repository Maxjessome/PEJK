import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonImg, IonTitle } from "@ionic/react"
import React from "react"
interface BuildingProps{
    Address: string;
    Units_Unit_ID: number;
    Monthly_Rent: number;
}
const Building_card: React.FC<BuildingProps>=({Address,Units_Unit_ID, Monthly_Rent})=>{
    
    return(
        <IonCard>
        <IonCardHeader>
        <IonTitle>Address{Address}</IonTitle>
          <IonCardSubtitle>Units/Bedrooms{Units_Unit_ID}</IonCardSubtitle>
          <IonCardContent>Rent:{Monthly_Rent}</IonCardContent>
        </IonCardHeader>

       
      </IonCard>

    )
}
export default Building_card;