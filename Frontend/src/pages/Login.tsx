import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList, IonItemDivider, IonButton, IonAlert } from '@ionic/react';
import axios from 'axios';
import './Login.css';
import React, { useEffect, useState } from 'react';
import Employee from '../components/Employees';
import { useHistory } from "react-router";

export const Login: React.FC = () => {

    const [text, setText] = useState<string>();
    const [number, setNumber] = useState<number>();
    const [password, setPassword] = useState("")
    const [username, setUserName] = useState("")
    const [showAlert1, setShowAlert1] = useState(false);
    const [showAlert2, setShowAlert2] = useState(false);

    const logIn = () => {
         
      }

    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Login Page</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonItemDivider>Sign in Below</IonItemDivider>
                <IonItem>
                    <IonLabel position="floating">Username</IonLabel>
                    <IonInput value={text}></IonInput>
                </IonItem>

                <IonItem>
                    <IonLabel position="floating">Password</IonLabel>
                    <IonInput value={text}></IonInput>
                </IonItem>
                <IonButton>Log In</IonButton>

                <IonItemDivider>Or Sign Up!</IonItemDivider>

                <IonButton onClick={() => setShowAlert1(true)} expand="block">Sign Up</IonButton>
                <IonAlert
                    isOpen={showAlert1}
                    onDidDismiss={() => setShowAlert1(false)}
                    cssClass = 'my-custom-class'
                    header={'Create PEJK Profile'}
                    subHeader={'Press OK to'}
                    message={'Begin signing up!'}
                    buttons={[
                        {
                            text: 'OK',
                            handler: () => {
                                console.log('Confirm Okay');
                            }
                        },
                        {
                            text: 'Cancel',
                            role: 'cancel',
                            handler: blah => {
                                console.log('Confirm Cancel: blah');
                            }
                        }
                    ]}
                />
            </IonContent>
        </IonPage>
    )

}
export default Login;
