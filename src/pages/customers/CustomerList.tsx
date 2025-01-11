import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import { add, pencil } from 'ionicons/icons';
const CustomerList: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Gestion de clientes</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonCard>
          <IonButton fill='solid' slot='end' size='default'> <IonIcon icon={add} >
          </IonIcon>Agregar Cliente
          </IonButton>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">{name}</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonGrid>
            <IonRow>
              <IonCol>Nombre</IonCol>
              <IonCol>Email</IonCol>
              <IonCol>Telefono</IonCol>
              <IonCol>Direccion</IonCol>
              <IonCol>Acciones</IonCol>
            </IonRow>
          </IonGrid>

          <IonGrid>
            <IonRow>
              <IonCol>Hernan Debenedetto</IonCol>
              <IonCol>hernandebe@hotmail.com</IonCol>
              <IonCol>9999999</IonCol>
              <IonCol>sixto laspiur</IonCol>
              <IonCol>Acciones</IonCol>
            </IonRow>
            <IonButton>
              <IonIcon icon={pencil} slot='icon-only'/>
            </IonButton>
          </IonGrid>
          
          <IonGrid>
            <IonRow>
              <IonCol>Hernan Debenedetto</IonCol>
              <IonCol>hernandebe@hotmail.com</IonCol>
              <IonCol>9999999</IonCol>
              <IonCol>sixto laspiur</IonCol>
              <IonCol>Acciones</IonCol>
            </IonRow>
            <IonButton>
              <IonIcon icon={pencil} slot='icon-only'/>
            </IonButton>
          </IonGrid>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default CustomerList;
