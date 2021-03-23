import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonRippleEffect, IonItemDivider, IonButton, IonAlert } from '@ionic/react';
import './Login.css';
import { useAuth0 } from "@auth0/auth0-react";


const Profile: React.FC = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
  
    if (isLoading) {
      return <div>Loading ...</div>;
    }
  
    return (
      isAuthenticated ? (
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ): <></>
    );
  };


  
export const Login: React.FC = () => {

    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();


    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Login Page</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonItemDivider>Welcome to PEJK Real Estate</IonItemDivider>
                    <IonButton className="ion-activatable ripple-parent" onClick={() => loginWithRedirect()}>Log In/Sign Up<IonRippleEffect></IonRippleEffect></IonButton>
                    <Profile/>

                    <IonButton className="ion-activatable ripple-parent" onClick={() => logout({ returnTo: window.location.origin })}>
                    Log Out<IonRippleEffect></IonRippleEffect>
                    </IonButton>
            </IonContent>
        </IonPage>
    )

}
export default Login;
