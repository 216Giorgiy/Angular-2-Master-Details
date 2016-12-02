import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { CategoryComponent }   from './category.component';
import { ProductComponent }   from './product.component';

@NgModule({
    imports: [BrowserModule,FormsModule],
    declarations: [CategoryComponent,ProductComponent],
    bootstrap:[CategoryComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
