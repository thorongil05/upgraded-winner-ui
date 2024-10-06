import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Player } from '../player';

@Injectable({
  providedIn: 'root',
})
export class ValidationService {
  private readonly url: string = 'http://localhost:8080/v1/startings/validate';

  constructor(private readonly httpClient: HttpClient) {}

  validate(startingEleven: Player[], bench: Player[]) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    console.log('Sending validation request');
    return this.httpClient.post(
      this.url,
      {
        startingEleven: startingEleven,
        bench: bench,
      },
      {
        headers: headers,
        responseType: 'json',
      }
    );
  }
}
