import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  
  private apiUrl = 'http://localhost:8080/api/stocks';

    constructor(private http: HttpClient) {}

    addStock(stock: any) {
        return this.http.post(this.apiUrl, stock);
    }

    removeStock(id: number) {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }

    getAllStocks() {
        return this.http.get(this.apiUrl);
    }

    getTotalValue() {
        return this.http.get(`${this.apiUrl}/value`);
    }
}
