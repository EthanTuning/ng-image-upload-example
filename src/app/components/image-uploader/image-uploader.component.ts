import { Component, OnInit } from '@angular/core';

@Component({

  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.css']

})

export class ImageUploaderComponent implements OnInit {

  afuConfig = {

      multiple: false,
      formatsAllowed: '.jpg,.png',
      maxSize: '1',
      uploadAPI:  {

        url: 'https://example-file-upload-api',
        headers: {

          'Content-Type' : 'text/plain;charset=UTF-8'

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
        afterUploadMsg_success: 'Successfully Uploaded !',
        afterUploadMsg_error: 'Upload Failed !'

      }

  };

  constructor() { }

  ngOnInit() {
  }

}
