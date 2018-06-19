import { Component, OnInit } from '@angular/core';
import { FileResource } from '../share/resource.model';
import { UploaderService } from '../uploader/uploader.service';

@Component({
  selector: 'app-imageframe',
  templateUrl: './imageframe.component.html',
  styleUrls: ['./imageframe.component.css']
})
export class ImageframeComponent implements OnInit {
  throttle = 300;
  scrollDistance = 1;

  currentPage = 0;
  nextPage = 0;
  size = 16;

  images: FileResource[] = [];
  constructor(private uploaderService: UploaderService) {
    this.getAdditionalPage();
  }

  ngOnInit() {
  }

  onScrollDown (ev) {
    console.log('scrolled down!!', ev);
    if (this.currentPage < this.nextPage) {
      this.getAdditionalPage();
    }
  }

  downloadFile(fileResource: FileResource) {
    this.uploaderService.downloadFileResource(fileResource);
  }

  getAdditionalPage() {
    this.uploaderService.getFileList(this.nextPage, this.size).subscribe((pagedFileResource) => {
      console.log(pagedFileResource);
      this.images = this.images.concat(pagedFileResource.content);
      this.currentPage = pagedFileResource.page.number;
      if (pagedFileResource.page.totalPages > this.currentPage + 1) {
        this.nextPage = this.currentPage + 1;
      }
    });
  }
}
