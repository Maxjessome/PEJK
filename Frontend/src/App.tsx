import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, constructOutline, mapOutline, logInOutline, homeOutline } from 'ionicons/icons';
import Login from './pages/Login';
import Building_Selection from './pages/Building_Selection';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';

import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";



/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <Auth0Provider
    domain="dev-ro0qsq4z.us.auth0.com"
    clientId="lY16manUJRTxvyDP4ztweqYlRdH27EEY"
    redirectUri={window.location.origin}
    >
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/Login">
            <Login />
          </Route>
          <Route exact path="/Building_Selection">
            <Building_Selection />
          </Route>
          <Route exact path="/tab2">
            <Tab2 />
          </Route>
          <Route path="/tab3">
            <Tab3 />
          </Route>
          <Route exact path="/">
            <Redirect to="/Login" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="login" href = "/login">
            <IonIcon icon ={logInOutline} />
            <IonLabel>Login</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Building_Selection" href="/Building_Selection">
            <IonIcon icon={homeOutline} />
            <IonLabel>Building Search</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon icon={mapOutline} />
            <IonLabel>Map</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon icon={constructOutline} />
            <IonLabel>Maitenace</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
  </Auth0Provider>
);

export default App;
