class Order {
  constructor(
    public address: string,
    public number: number,
    public optional: string,
    public paymentOption: string,
    public orderItems: OrderItem[] = []
  ){}
}

class OrderItem {
  constructor(public quantity: number, public menuID: string){}
}

export {Order, OrderItem}
