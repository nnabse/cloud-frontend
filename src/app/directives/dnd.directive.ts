import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appDnd]',
})
export class DndDirective {
  @Output() fileDropped = new EventEmitter<any>();
  @HostListener('dragover', ['$event']) onDragOver(event: any) {
    event.preventDefault();
  }

  @HostListener('dragleave', ['$event']) onDragLeave(event: any) {
    event.preventDefault();
  }

  @HostListener('drop', ['$event']) public onDrop(event: DragEvent) {
    event.preventDefault();
    if (event?.dataTransfer?.files?.length) {
      this.fileDropped.emit(event);
    }
  }
}
