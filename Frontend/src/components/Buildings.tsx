import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonImg, IonHeader } from "@ionic/react"
import React from "react"
interface BuildingProps{
    Building_ID: number;
    Address: string;
    Rent_Cost: number;
    Units_Unit_ID: number;
    Tenant_Tenant_ID: number;
    Postal_Code: string;
    Parking: string;
    Snow_Clearing: string;
    Purchases_Inv: number;
    Heating_Source: string;
    Coin_Op_Washer: string;
    Market_Value: number;
    Appraisal_Date: string;
    Purchase_Price: number;
    On_Off_Campus: string;

}

const Building: React.FC<BuildingProps>=({Building_ID, Address, Rent_Cost, Units_Unit_ID, Tenant_Tenant_ID, Postal_Code, Parking, Snow_Clearing, Purchases_Inv, Heating_Source, Coin_Op_Washer, Market_Value, Appraisal_Date, Purchase_Price, On_Off_Campus})=>{

    return(
        <IonCard>
            <IonHeader>{Address}</IonHeader>
            <IonCardSubtitle>${Rent_Cost}/Month</IonCardSubtitle>
            <IonCardSubtitle>{On_Off_Campus} Campus</IonCardSubtitle>
        </IonCard>
    )

}
export default Building;
