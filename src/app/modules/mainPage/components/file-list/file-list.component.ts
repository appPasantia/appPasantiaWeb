import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-list',
  template: `<div id="filePreview">
  <div *ngFor = "let file of fileUpload">
    <img loading="lazy" [src]="file" class="preview"/>
    TODO mostrar un preview  o una imagen pequeña que necesite el usuario ver
  </div>
</div>
`,
  styleUrls: ['./file-list.component.scss']
})
export class FileListComponent implements OnInit {
  @Input() fileUpload: any;

  constructor() { }

  ngOnInit() {
  }

}
