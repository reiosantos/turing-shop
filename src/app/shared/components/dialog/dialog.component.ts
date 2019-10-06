import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { ComponentType } from '@angular/cdk/overlay';

@Component({
  selector: 'vc-dialog',
  template: '',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  @Input() component: ComponentType<any>;
  @Input() title: string;
  @Output() openDialogChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() handler?: (data: any, action?: string, attribute?: string, qty?: number) => any;
  @Input() dataObject: object|null;

  dialogRef: MatDialogRef<any>;

  constructor(
    private matDialog: MatDialog
  ) { }

  ngOnInit() {
  }

  @Input()
  set openDialog(value: boolean) {
    this.close();
    if (value) {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.data = {
        title: this.title,
        handler: this.handler,
        dataObject: this.dataObject,
        dialogCloseRef: this.close
      };
      dialogConfig.autoFocus = true;
      dialogConfig.closeOnNavigation = false;
      dialogConfig.hasBackdrop = true;
      dialogConfig.width = 'auto';
      dialogConfig.height = 'auto';
      dialogConfig.minWidth = '30%';
      dialogConfig.maxWidth = '50%';
      dialogConfig.maxHeight = '60%';
      this.dialogRef = this.matDialog.open(this.component, dialogConfig);
      this.dialogRef.beforeClosed().subscribe(() => {
        this.openDialogChange.emit(false);
      });
      return;
    }
  }

  close = () => {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }
}
