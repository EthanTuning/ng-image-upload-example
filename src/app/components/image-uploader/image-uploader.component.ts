import { Component, OnInit } from '@angular/core';

@Component({

  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.css']

})

export class ImageUploaderComponent implements OnInit {

  afuConfig = {
      multiple: false,
      formatsAllowed: '.jpg,.png,.jpeg',
      maxSize: '3',
      uploadAPI:  {
        url: 'https://image-upload-api-test.azurewebsites.net//api/image',
        method: 'POST',
        headers: {

        }
      },
      theme: 'dragNDrop',
      hideProgressBar: true,
      hideResetBtn: true,
      hideSelectBtn: true,
      replaceTexts: {

        selectFileBtn: 'Select Files',
        resetBtn: 'Reset',
        uploadBtn: 'Upload',
        dragNDropBox: 'Drag N Drop',
        attachPinBtn: 'Attach Files...',
        afterUploadMsg_success: 'Successfully Uploaded!',
        afterUploadMsg_error: 'Upload Failed!'
      }
  };

  constructor() { }

  ngOnInit() {
  }

}
