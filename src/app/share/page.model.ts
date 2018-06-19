import { FileResource } from './resource.model';

export interface PagedFileResource {
  content: FileResource[];
  page: Page;
}

export interface Page {
  size: number;
  totalElements: number;
  totalPages: number;
  number: number;
}
