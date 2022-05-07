import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';
import {Shipping, shipping} from '../../assets/shipping';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items = this.cartService.getItems();
  shipping = shipping;
  totalPrice: number = 0;
  shippingPrice: number = 0;

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''});

  constructor(private cartService: CartService,
  private formBuilder: FormBuilder,) {}

  onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.totalPrice = 0;
    this.checkoutForm.reset();
  }

  ngOnInit(): void {
    this.getTotalPrice();
  }

  getTotalPrice(): void {
    this.totalPrice = 0;
    this.items.forEach(item => {
      this.totalPrice += item.price;
    });
    this.totalPrice += this.shippingPrice;
  }

  setShippingPrice(newPrice: number): void {
    this.shippingPrice = newPrice;
    this.getTotalPrice();
  }

  thankUser(): void {
    window.alert("Thank you for shopping with us!");
  }

}
