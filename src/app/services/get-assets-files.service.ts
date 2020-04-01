import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetAssetsFilesService {
  constructor(private http: HttpClient) { }
  public async getFile(filepath: string): Promise<string> {
    return await this.http.get(
      filepath,
      {responseType: 'text'}
    ).toPromise();
  }
}
