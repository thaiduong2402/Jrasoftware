import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreateColumnComponent } from './dialog-create-column.component';

describe('DialogCreateColumnComponent', () => {
  let component: DialogCreateColumnComponent;
  let fixture: ComponentFixture<DialogCreateColumnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogCreateColumnComponent]
    });
    fixture = TestBed.createComponent(DialogCreateColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
