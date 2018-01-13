import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {environment} from '../environments/environment';
import {Reading} from './reading';

@Injectable()
export class ReadingService {

  constructor(private http: HttpClient) {
  }

  getReadings(category: string, code: string, start: string, end: string): Observable<Reading[]> {
    const params = new HttpParams();

    if (category) {
      params.set('cat', category);
    }
    if (code) {
      params.set('code', code);
    }
    if (start) {
      params.set('start', start);
    }
    if (end) {
      params.set('end', end);
    }

    return this.http.get(`${environment.apiUrl}/reading`, {params: params})
      .map((list: any[]) => {
        return list.map(arr => {
          return {
            code: arr[0],
            value: parseFloat(arr[1]),
            epoch: arr[2],
            received: arr[3]
          };
        });
      });
  }
}
