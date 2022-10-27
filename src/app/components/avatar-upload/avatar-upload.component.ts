import { Component, EventEmitter, Output } from '@angular/core';
import { AvatarError } from '@enums/avatar.enums';
import { AvatarRequirement } from '@enums/auth.enums';
import { AVATAR_SIZE_LIMIT } from '@constants/auth.constants';

import { SnackbarService } from '@services/notifications/snackbar.service';

@Component({
  selector: 'app-avatar-upload',
  templateUrl: './avatar-upload.component.html',
  styleUrls: ['./avatar-upload.component.scss'],
})
export class AvatarUploadComponent {
  @Output() avatarAddingEvent = new EventEmitter<File>();

  public previewAltText = AvatarRequirement.PREVIEW_ALT_TEXT;
  public supportedFormats = AvatarRequirement.SUPPORTED_FORMATS;
  public imageSize = AvatarRequirement.FILE_SIZE;
  public fileSrc: string | ArrayBuffer | null = null;
  public fileName = '';

  public acceptedFileTypes = ['image/jpeg', 'image/png', 'image/gif'];

  constructor(private snack: SnackbarService) {}

  public onFileSelect(event: DragEvent | Event): void {
    let file;
    if ('dataTransfer' in event) {
      file = event.dataTransfer?.files[0];
    } else {
      const fileList = (event.target as HTMLInputElement).files as FileList;
      file = fileList.item(0);
    }
    if (!file) return;
    if (!this.acceptedFileTypes.includes(file.type)) {
      return this.snack.openError(AvatarError.TYPE_NOT_SUPPORTED);
    }
    if (file.size > AVATAR_SIZE_LIMIT) {
      return this.snack.openError(AvatarError.TOO_BIG);
    }
    this.fileToView(file);
  }

  public fileToView(file: File): void {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.fileSrc = reader.result;
      this.avatarAddingEvent.emit(file);
    };
    this.fileName = file.name;
  }
}
