import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

const DEFAULT_BASE64_SRC =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII=';

@Component({
  selector: 'app-ui-uploadable',
  templateUrl: './ui-uploadable.component.html',
  styleUrls: ['./ui-uploadable.component.scss'],
})
export class UiUploadableComponent implements OnChanges {
  protected static id = 0;
  id: string;
  @Input() accept = 'image/*';
  @Input() multiple = true;
  @Input() src = DEFAULT_BASE64_SRC;
  @Output() files = new EventEmitter<any>();
  @ViewChild('form') form: ElementRef;
  constructor() {
    this.id = `zp-ui-uploadable--${++UiUploadableComponent.id}`;
  }
  onChange($event) {
    const { files } = $event.target;
    this.files.emit(Array.from(files));
    this.form.nativeElement.reset();
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.src.currentValue) {
      this.src = changes.src.currentValue;
    } else {
      this.src = DEFAULT_BASE64_SRC;
    }
  }
}
