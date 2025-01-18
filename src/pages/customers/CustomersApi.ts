export function searchCustomers() {
    if (!localStorage['customers']) {
        localStorage['customers'] = '[]';
    }
  let customer =localStorage['customers'];
  customer = JSON.parse(customer);
    return customer;
}
export function saveCustomer(customer: any) {
let customers = searchCustomers();
customers.push(customer);
localStorage['customers'] = JSON.stringify(customers);
}

export function updateCustomer(customer: any) {
  return fetch("https://api.example.com/customers", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(customer)
  });
}

export function deleteCustomer(customer: string)  {
  let customers = searchCustomers();
  customers.splice(customers.findIndex((customers: any) => customers.id === customer), 1);
  localStorage['customers'] = JSON.stringify(customers);
  }