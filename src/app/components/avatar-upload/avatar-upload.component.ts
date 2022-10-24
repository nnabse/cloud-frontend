import { Component, OnInit } from '@angular/core';
import { AvatarError } from '@enums/avatar.enums';
import { AvatarRequirement } from '@enums/auth.enums';
import { AVATAR_SIZE_LIMIT } from '@constants/auth.constants';

import { SnackbarService } from '@services/notifications/snackbar.service';

@Component({
  selector: 'app-avatar-upload',
  templateUrl: './avatar-upload.component.html',
  styleUrls: ['./avatar-upload.component.scss'],
})
export class AvatarUploadComponent implements OnInit {
  public supportedFormats = AvatarRequirement.SUPPORTED_FORMATS;
  public imageSize = AvatarRequirement.FILE_SIZE;
  public fileSrc: any;
  public fileName = '';

  public acceptedFileTypes = ['image/jpeg', 'image/png', 'image/gif'];

  constructor(private snack: SnackbarService) {}

  ngOnInit(): void {}

  onFileSelect(event: any, isDraggedFile: boolean) {
    let file;
    if (isDraggedFile) {
      file = event?.dataTransfer?.files[0];
    } else {
      file = event?.target?.files[0];
    }
    if (!file) return;
    if (!this.acceptedFileTypes.includes(file.type)) {
      this.snack.openErrorSnackbar(AvatarError.TYPE_NOT_SUPPORTED);
      return;
    }
    if (file.size > AVATAR_SIZE_LIMIT) {
      this.snack.openErrorSnackbar(AvatarError.TOO_BIG);
      return;
    }
    this.fileToView(file);
  }

  fileToView(file: any) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => (this.fileSrc = reader.result);
    this.fileName = file.name;
  }
}
