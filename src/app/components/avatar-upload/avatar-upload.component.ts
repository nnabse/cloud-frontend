import { Component, OnInit } from '@angular/core';
import { SnackbarService } from '@services/notifications/snackbar.service';
import { AvatarError } from '@enums/auth.enums';

@Component({
  selector: 'app-avatar-upload',
  templateUrl: './avatar-upload.component.html',
  styleUrls: ['./avatar-upload.component.scss'],
})
export class AvatarUploadComponent implements OnInit {
  public fileSrc: any;
  public fileName = '';

  public acceptedFileTypes = ['image/jpeg', 'image/png', 'image/gif'];
  public regexAcceptedType = new RegExp(/image\/jpeg|image\/png|image\/gif/);

  constructor(private snack: SnackbarService) {}

  ngOnInit(): void {}

  onFileSelect(event: any) {
    const file = event?.target?.files[0];
    if (!file) return;
    if (!this.regexAcceptedType.test(file.type)) {
      this.snack.openErrorSnackbar(AvatarError.TYPE_NOT_SUPPORTED);
      return;
    }
    if (file.size > 700000) {
      this.snack.openErrorSnackbar(AvatarError.TOO_BIG);
      return;
    }
    this.showFile(file);
  }

  checkAndShowFile(file: any) {
    if (!file) return;
    if (!this.acceptedFileTypes.includes(file.type)) {
      this.snack.openErrorSnackbar(AvatarError.TYPE_NOT_SUPPORTED);
      return;
    }
    if (file.size > 700000) {
      this.snack.openErrorSnackbar(AvatarError.TOO_BIG);
      return;
    }
    this.showFile(file);
  }

  onDrop(event: any) {
    const file = event.dataTransfer.files[0];
    this.checkAndShowFile(file);
  }

  showFile(file: any) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => (this.fileSrc = reader.result);
    this.fileName = file.name;
  }
}
