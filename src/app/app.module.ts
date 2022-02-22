import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { ProductsComponent } from "./products/products.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatTooltipModule } from "@angular/material/tooltip";
import { ProductItemComponent } from './product-item/product-item.component';
import { HeaderComponent } from './header/header.component';
import { ProductsFormComponent } from './products-form/products-form.component';

@NgModule({
  declarations: [AppComponent, ProductsComponent, ProductItemComponent, HeaderComponent, ProductsFormComponent],
  imports: [
    BrowserModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTooltipModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
