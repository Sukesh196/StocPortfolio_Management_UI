import { Component } from '@angular/core';
import { StockService } from '../services/stock.service';
import { Stock } from '../models/stock';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
  portfolio: Stock[] = [];
  newStockSymbol: string = '';
  newStockQuantity: number = 0;
  totalPortfolioValue: number = 0;

  constructor(private stockService: StockService) {}

  addStock(): void {
    if (!this.newStockSymbol || this.newStockQuantity <= 0) {
      alert('Enter valid stock symbol and quantity');
      return;
    }
  }

  removeStock(index: number): void {
    this.portfolio.splice(index, 1);
    this.calculateTotalValue();
  }

  calculateTotalValue(): void {
    this.totalPortfolioValue = this.portfolio.reduce(
      (sum, stock) => sum + stock.total,
      0
    );
  }
}
