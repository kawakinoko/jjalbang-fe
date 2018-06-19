import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { FileResource } from '../share/resource.model';
import { saveAs } from 'file-saver';
import { PagedFileResource } from '../share/page.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UploaderService {
  constructor(private http: HttpClient) { }

  public uploadFile(file: File, relativePath: string) {
    const formData = new FormData();
    formData.append(file.name, file, relativePath);
    this.http.post('/api/upload', formData).subscribe(data => console.log(data));
  }

  public downloadFileResource(fileResource: FileResource) {
    const headers = new HttpHeaders().append('Access-Control-Expose-Headers', 'Content-Disposition');
    return this.http.get(fileResource.downloadUrl,{ headers: headers, responseType: 'blob', observe: 'response' })
      .subscribe(res => {
        const attachment = res.headers.get('content-disposition');
        const pattern = /^attachment;\sfilename="(.*)"$/;
        const matched = attachment.match(pattern);
        if (matched[1]) {
          saveAs(res.body, matched[1]);
        }
      });
  }

  public getFileList(page: number, size: number): Observable<PagedFileResource> {
    return this.http.get<PagedFileResource>('/api/list',
      {
        params: new HttpParams()
          .set('page', page.toString(10))
          .set('size', size.toString(10))
      });
  }
}
