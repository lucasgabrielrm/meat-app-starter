import {NgModule, ModuleWithProviders} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import {InputComponent} from './input/input.component'
import {RadioComponent} from './radio/radio.component'
import {RatingComponent} from './rating/rating.component'
import {SnackbarComponent} from './messages/snackbar/snackbar.component'

import {OrderService} from '../order/order.service'
import {ShoppingCartService} from '../rest-detail/shopping-cart/shopping-cart.service'
import {RestaurantsService} from '../restaurants/restaurants.service'
import {NotificationService} from './messages/notification.service'

@NgModule({
  declarations: [InputComponent, RadioComponent, RatingComponent, SnackbarComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [InputComponent, RadioComponent, RatingComponent, SnackbarComponent,
            CommonModule, FormsModule, ReactiveFormsModule]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers:[ShoppingCartService, RestaurantsService, OrderService, NotificationService]
    }
  }
}
