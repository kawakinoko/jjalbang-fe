import { Component, OnInit } from '@angular/core';
import { FileSystemFileEntry, UploadEvent, UploadFile } from 'ngx-file-drop';
import { UploaderService } from './uploader.service';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css']
})
export class UploaderComponent implements OnInit {
  constructor(private uploaderService: UploaderService, private route: Router) { }

  upload: Function[] = [];
  fileNameList = [];

  goBackToPage: Subject<void> = new ReplaySubject();
  ngOnInit() {
    this.goBackToPage.debounceTime(3000).subscribe(() => this.route.navigate(['/']));
  }

  public files: UploadFile[] = [];

  public dropped(event: UploadEvent) {
    this.upload = [];
    this.fileNameList = [];
    this.files = event.files;
    for (const droppedFile of event.files) {

      // Is it a file?
      if (droppedFile.fileEntry.isFile && droppedFile.fileEntry.name.toLowerCase().match('^.*\\.(jpg|jpeg|png|gif)$')) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        this.fileNameList.push(droppedFile.relativePath);
        this.upload.push(this.getUploadFileFunc(fileEntry, droppedFile.relativePath));
      } else {
        console.log("only jpg/jpeg/png/gif is available");
      }
    }
  }

  public getUploadFileFunc(fileEntry: FileSystemFileEntry, relativePath: string) {
    return () => {
      fileEntry.file((file: File) => {
        console.log(file);
        this.uploaderService.uploadFile(file, relativePath);
        this.goBackToPage.next();
      })
    }
  }

  public uploadFiles() {
    this.upload.forEach((upload) => upload());
  }

  public fileOver(event){
    console.log(event);
  }

  public fileLeave(event){
    console.log(event);
  }
}
