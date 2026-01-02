import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

const API_BASE_BACKEND = environment.apiBookingServiceUrl;

@Injectable({providedIn: 'root'})
export class PdfService {
    private http = inject(HttpClient);

  downloadTicket(orderId: string) {
  return this.http.get(`${API_BASE_BACKEND}/api/v1/tickets/${orderId}/download`, {
    responseType: 'blob',
  });
}
}
