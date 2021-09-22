import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {CartItem} from '../../rest-detail/shopping-cart/cart-item.model'

@Component({
  selector: 'mt-order-items',
  templateUrl: './order-items.component.html'
})
export class OrderItemsComponent implements OnInit {

  @Input() items: CartItem[]

  @Output() increaseQtt = new EventEmitter<CartItem>()
  @Output() decreaseQtt = new EventEmitter<CartItem>()
  @Output() remove = new EventEmitter<CartItem>()

  constructor() { }

  ngOnInit() {
  }

  emitIncreaseQtt(item: CartItem){
    this.increaseQtt.emit(item)
  }

  emitDecreaseQtt(item: CartItem){
    this.decreaseQtt.emit(item)
  }

  emitRemove(item: CartItem){
    this.remove.emit(item)
  }

}
