import { Component, OnInit } from '@angular/core';
declare var initSample:any,CKEDITOR:any;
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular';

  ngOnInit(){
    initSample();
  }
  getHtml(){
      alert(CKEDITOR.instances.editor.getData());
  }
  
}
