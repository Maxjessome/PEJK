import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonImg, IonTitle } from "@ionic/react"
import React from "react"
<<<<<<< HEAD
interface UnitsProps{
    Unit_ID: number;
    Laundry: string;
    Utilities: string;
    Bedrooms: number;
    Unit_Name: string;
    Den: string;
    In_Unit_WasherDryer: string;
    LED_Lighting: string; 
    Basement: string; 
    NSPI_Meter: string;
=======
interface ListingProps{
    address : string;
    Unit_ID : number;
    Bedrooms : string;

>>>>>>> 12fcc090f07f328aaa1bd93d4e34c9dc8eded346
    image : string;
    /*rent: string;*/

}
<<<<<<< HEAD
const Unit: React.FC<UnitsProps>=({Unit_ID, Laundry, Utilities, Bedrooms, Unit_Name, Den, In_Unit_WasherDryer, LED_Lighting, Basement, NSPI_Meter, image})=>{
=======
const Unit: React.FC<ListingProps>=({address, Unit_ID, Bedrooms, image})=>{
>>>>>>> 12fcc090f07f328aaa1bd93d4e34c9dc8eded346
    
    return(
        <IonCard>
        <IonCardHeader>
        <IonTitle>Unit Number{Unit_ID}</IonTitle>
        <IonImg src={image}/>
<<<<<<< HEAD
          <IonCardSubtitle>Number of Bedrooms:{Bedrooms}</IonCardSubtitle>
        </IonCardHeader>

       
=======
          <IonCardSubtitle>${Unit_ID}/mo</IonCardSubtitle>
          <IonCardTitle>{address}</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          {Bedrooms}
    </IonCardContent>
>>>>>>> 12fcc090f07f328aaa1bd93d4e34c9dc8eded346
      </IonCard>

    )
}
export default Unit;