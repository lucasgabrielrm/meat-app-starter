import {CartItem} from './cart-item.model'
import {MenuItem} from '../menu-item/menu-item.model'

export class ShoppingCartService {

  items: CartItem[] = []

  clear(){
    this.items = []
  }

  addItem(item:MenuItem){
    let foundItem = this.items.find((mItem)=> mItem.menuItem.id == item.id)
    if (foundItem) {
      this.increaseQtt(foundItem)
    } else {
      this.items.push(new CartItem(item))
    }
  }

  removeItem(item:any){
    this.items.splice(this.items.indexOf(item), 1)
  }

  increaseQtt(item: CartItem){
    item.quantity = item.quantity + 1
  }

  decreaseQtt(item: CartItem){
    item.quantity = item.quantity - 1
    if (item.quantity === 0){
      this.removeItem(item)
    }
  }

  total(): number{
    return this.items
      .map(item => item.value())
      .reduce((prev, value)=> prev + value, 0)
  }
}