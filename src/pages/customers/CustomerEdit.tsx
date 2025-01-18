import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonList, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import { add, pencil, close } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { deleteCustomer, saveCustomer, searchCustomers } from './CustomersApi';
const CustomerEdit: React.FC = () => {

  const { name,id } = useParams<{ name: string; id: string }>();
  const [clientes, setClientes] = useState<any>([]);

  useEffect(() => {
    search();

  }, []);
  const search = () => {
/*   let result = searchCustomers();
    setClientes(result) */
  }



  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Gestion de clientes {id}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonCard>
          <IonButton fill='solid' size='default' slot='' > <IonIcon icon={add} >
          </IonIcon>Guardar
          </IonButton>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">{name}</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonList>
          <IonItem>
        <IonInput label="Stacked label" labelPlacement="stacked" placeholder="Enter text"></IonInput>
      </IonItem>
      </IonList>
        </IonCard>
        <IonButton onClick={()=>{}} color={'danger'} fill='clear'>
                    Prueba local storage
                    </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default CustomerEdit;
