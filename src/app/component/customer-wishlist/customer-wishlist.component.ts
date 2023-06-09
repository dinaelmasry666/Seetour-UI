import { WishlistItemComponent } from './../wishlist-item/wishlist-item.component';
import { Component, ViewChild } from '@angular/core';
import { WishList } from 'src/app/Interfaces/wishlist';
import { Title } from '@angular/platform-browser';
import { WishlistService } from 'src/app/Services/wishlist.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
@Component({
  selector: 'app-customer-wishlist',
  templateUrl: './customer-wishlist.component.html',
  styleUrls: ['./customer-wishlist.component.css']
})
export class CustomerWishlistComponent {
  @ViewChild(WishlistItemComponent) WishlistItemComponent!: WishlistItemComponent;
  wishlist: WishList[] | undefined;
  emittedValue:string|undefined;
  user:any;

  constructor(
    private wishlistService: WishlistService,
    private titleService: Title,
    private router: Router,
    private authService: AuthService) { }
  ngOnInit(): void {
    this.user = this.authService.getInterface();
    // if(this.user === 'customer'){
    this.titleService.setTitle("Customer Wishlist");
    this.wishlistService.GetCustomerWishlist().subscribe(
      {
        next: (data) => {
          this.wishlist = data as WishList[];
          console.log(this.wishlist);
        
        },
        error: () => { 
          // this.router.navigateByUrlk('Error');
        }
      }
    )
    // }
  }



}
