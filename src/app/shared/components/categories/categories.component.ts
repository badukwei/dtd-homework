import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CategoriesType } from '@app/model/categories.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
  @Input() categoryData: CategoriesType = {
    title: '',
    growthRate: '',
    growthAmount: '',
  };
}
