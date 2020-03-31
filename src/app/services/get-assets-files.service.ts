import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GetAssetsFilesService {
  constructor(private http: HttpClient) { }
  public getAllSampleFiles() {
    this.http.get('assets/codeSample/good/and.ml', {responseType: 'text'})
      .subscribe(data => console.log(data));
  }
}
