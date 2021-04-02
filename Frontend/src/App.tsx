import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonSplitPane,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, constructOutline, mapOutline, logInOutline, homeOutline, menuOutline } from 'ionicons/icons';
import Loading from './components/loading';
import ProtectedRoute from './components/private-route';
import Login from './pages/Login';
import Building_Selection from './pages/Building_Selection';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import {Menu} from './components/Menu';
import About_Us from './pages/About_Us';
import Tenent_service_req from './pages/Tenent_service_req';
import Menu_Tab from './pages/Menu_Tab';
import Tenant_services from './pages/Tenant_services';
import { useAuth0 } from "@auth0/auth0-react";


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
import Complete_Job from './pages/Complete_Job';
import Current_Jobs from './pages/Current_Jobs';








const App: React.FC = () => (
  <Auth0Provider
    domain="dev-ro0qsq4z.us.auth0.com"
    clientId="lY16manUJRTxvyDP4ztweqYlRdH27EEY"
    redirectUri={window.location.origin}
    >
  <IonApp>
    <IonReactRouter>
      <Menu/>
        <IonRouterOutlet  id="main">
          <Route path="/Building_Selection" component={Building_Selection} exact={true} />
          <Route path="/About_Us" component={About_Us} exact={true} />
          <Route path="/Tab3" component={Tab3} exact={true} />
          <Route path="/Login" component={Login} exact={true} />
          <Route path="/Tenent_service_req" component={Tenent_service_req} exact={true} />
          <Route path="/Menu_Tab" component={Menu_Tab} exact={true} />
          <Route path="/Tenant_services" component={Tenant_services} exact={true} />
          <ProtectedRoute path="/Complete_Job" component={Complete_Job} exact={true} />
          <ProtectedRoute path="/Current_Jobs" component={Current_Jobs} exact={true} />
          <Route exact path="/" render={() => <Redirect to="/Tab2" />} />
        </IonRouterOutlet>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/Login">
            <Login />
          </Route>
          <Route exact path="/Tab3">
            <Tab3 />
          </Route>
          <Route exact path="/Building_Selection">
            <Building_Selection />
          </Route>
          <Route exact path="/tab2">
            <Tab2 />
          </Route>
          <Route exact path="/About_Us">
            <About_Us />
          </Route>
          <Route exact path="/Tenent_service_req">
            <Tenent_service_req />
          </Route>
          <Route exact path="/Tenant_Services">
            <Tenant_services/>
          </Route>
          <Route exact path="/Menu_Tab">
            <Menu_Tab/>
          </Route>
          <Route exact path="/Complete_Job">
            <Complete_Job/>
          </Route>
          <Route exact path="/Current_Jobs">
            <Current_Jobs/>
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="Building_Selection" href="/Building_Selection">
            <IonIcon icon={homeOutline} />
            <IonLabel>Building Search</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon icon={mapOutline} />
            <IonLabel>Map</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Menu_Tab" href="/Menu_Tab">
            <IonIcon icon={menuOutline} />
            <IonLabel>Menu</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
  </Auth0Provider>
);

export default App;
