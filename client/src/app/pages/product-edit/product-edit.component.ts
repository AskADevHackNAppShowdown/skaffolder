/* 
* Generated by
* 
*      _____ _          __  __      _     _
*     / ____| |        / _|/ _|    | |   | |
*    | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __
*     \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
*     ____) |   < (_| | | | || (_) | | (_| |  __/ |
*    |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_|
*
* The code generator that works in many programming languages
*
*			https://www.skaffolder.com
*
*
* You can generate the code from the command-line
*       https://npmjs.com/package/skaffolder-cli
*
*       npm install -g skaffodler-cli
*
*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
*
* To remove this comment please upgrade your plan here: 
*      https://app.skaffolder.com/#!/upgrade
*
* Or get up to 70% discount sharing your unique link:
*       https://beta.skaffolder.com/#!/register?friend=5ce1adcf63897a72058db532
*
* You will get 10% discount for each one of your friends
* 
*/
// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { ProductService } from '../../services/product.service';
import { OrderService } from '../../services/order.service';
import { CategoryService } from '../../services/category.service';
// Import Models
import { Product } from '../../domain/estore_db/product';
import { Order } from '../../domain/estore_db/order';
import { Category } from '../../domain/estore_db/category';

// START - USED SERVICES
/**
* OrderService.findBy_products
*	@description CRUD ACTION findBy_products
*	@param Objectid key Id della risorsa _products da cercare
*
* ProductService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id 
*
* CategoryService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Product
 */
@Component({
    selector: 'app-product-edit',
    templateUrl: 'product-edit.component.html',
    styleUrls: ['product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
    item: Product;
    list_products: Product[];
    listCategory: Category[];
    externalOrder: Order[];
    model: Product;
    formValid: Boolean;

    constructor(
    private productService: ProductService,
    private orderService: OrderService,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Product();
        this.externalOrder = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.productService.get(id).subscribe(item => this.item = item);
                this.orderService.findBy_products(id).subscribe(list => this.externalOrder = list);
            }
            // Get relations
            this.categoryService.list().subscribe(list => this.listCategory = list);
        });
    }


    /**
     * Save Product
     *
     * @param {boolean} formValid Form validity check
     * @param Product item Product to save
     */
    save(formValid: boolean, item: Product): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.productService.update(item).subscribe(data => this.goBack());
            } else {
                this.productService.create(item).subscribe(data => this.goBack());
            } 
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }


}



