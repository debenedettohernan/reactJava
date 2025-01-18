import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory, useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import { add, pencil, close } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { deleteCustomer, saveCustomer, searchCustomers } from './CustomersApi';
const CustomerList: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
  const [clientes, setClientes] = useState<any>([]);
  const history = useHistory();
  useEffect(() => {
    search();

  }, []);
  const search = () => {
  let result = searchCustomers();
    setClientes(result)
  }

  const remove = (id: string) => {
deleteCustomer(id);
search();
  }
  const pruebaLocalStorage = () => {
    const ejemplo = {
      id: 1,
      firstname: 'Hernan',
      lastName: 'Debenedetto',
      email: 'hernan@gmail.com',
      phone: '9999999',
      address: 'sixto laspiur'
    }
 saveCustomer(ejemplo);
  }
  const addCustomer = () => {
    history.push('/page/customer/new');
  }

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
          <IonButton onClick={addCustomer} fill='solid' size='default' slot='' > <IonIcon icon={add} >
          </IonIcon>Agregar Cliente
          </IonButton>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">{name}</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonGrid>
            <IonRow style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>
              <IonCol>Nombre</IonCol>
              <IonCol>Email</IonCol>
              <IonCol>Telefono</IonCol>
              <IonCol>Direccion</IonCol>
              <IonCol>Acciones</IonCol>
            </IonRow>
          </IonGrid>

          <IonGrid>
              {clientes.map((cliente: any) => (
                <IonRow key={cliente.id}>
                  <IonCol>{cliente.firstname + ' ' + cliente.lastName}</IonCol>
                  <IonCol>{cliente.email}</IonCol>
                  <IonCol>{cliente.phone}</IonCol>
                  <IonCol>{cliente.address}</IonCol>
                  <IonCol>
                    <IonButton color={'primary'} fill='clear'>
                      <IonIcon icon={pencil} slot='icon-only' />
                    </IonButton>
                    <IonButton color={'danger'} fill='clear' onClick={() => remove(cliente.id)}>
                      <IonIcon icon={close} slot='icon-only' />
                    </IonButton>
                  </IonCol>
                </IonRow>
              ))}
          </IonGrid>

          {/*           <IonGrid>
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
          </IonGrid> */}
        </IonCard>
        <IonButton onClick={pruebaLocalStorage} color={'danger'} fill='clear'>
                    Prueba local storage
                    </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default CustomerList;
