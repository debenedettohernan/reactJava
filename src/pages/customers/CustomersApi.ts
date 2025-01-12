export function searchCustomers() {
    if (!localStorage['customers']) {
        localStorage['customers'] = '[]';
    }
  let customer =localStorage['customers'];
  customer = JSON.parse(customer);
    return customer;
}
export function addCustomer(customer: any) {
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

export function deleteCustomer(customerId: string) {
  return fetch(`https://api.example.com/customers/${customerId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  });
}