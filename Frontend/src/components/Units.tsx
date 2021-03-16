import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonImg, IonTitle } from "@ionic/react"
import React from "react"
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
    image : string;
    /*rent: string;*/

}
const Unit: React.FC<UnitsProps>=({Unit_ID, Laundry, Utilities, Bedrooms, Unit_Name, Den, In_Unit_WasherDryer, LED_Lighting, Basement, NSPI_Meter, image})=>{
    
    return(
        <IonCard>
        <IonCardHeader>
        <IonTitle>Unit Number{Unit_ID}</IonTitle>
        <IonImg src={image}/>
          <IonCardSubtitle>Number of Bedrooms:{Bedrooms}</IonCardSubtitle>
        </IonCardHeader>

       
      </IonCard>

    )
}
export default Unit;