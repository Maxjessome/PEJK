import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonImg } from "@ionic/react"
import React from "react"
interface ListingProps{
    address : string;
    Unit_ID : number;
    Bedrooms : string;

    image : string;

}
const Unit: React.FC<ListingProps>=({address, Unit_ID, Bedrooms, image})=>{
    
    return(
        <IonCard>
        <IonCardHeader>
        <IonImg src={image}/>
          <IonCardSubtitle>${Unit_ID}/mo</IonCardSubtitle>
          <IonCardTitle>{address}</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          {Bedrooms}
    </IonCardContent>
      </IonCard>

    )
}
export default Unit;