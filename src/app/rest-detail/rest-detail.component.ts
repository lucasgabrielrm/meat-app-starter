import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { RestaurantsService } from '../restaurants/restaurants.service'
import { Restaurant } from '../restaurants/restaurant/restaurant.model'

@Component({
  selector: 'mt-rest-detail',
  templateUrl: './rest-detail.component.html'
})
export class RestDetailComponent implements OnInit {

  restaurant: Restaurant

  constructor(private restaurantsService: RestaurantsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.restaurantsService.restaurantByID(this.route.snapshot.params['id'])
      .subscribe(restaurant => this.restaurant = restaurant)
  }

}
