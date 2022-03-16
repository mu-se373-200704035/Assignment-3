import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

//components
import Counter from '../components/Counter';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Assignment 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="content">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Assignment 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
        <Counter />
      </IonContent>
    </IonPage>
  );
};

export default Home;
