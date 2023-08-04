import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBacklogComponent } from './detail-backlog.component';

describe('DetailBacklogComponent', () => {
  let component: DetailBacklogComponent;
  let fixture: ComponentFixture<DetailBacklogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailBacklogComponent]
    });
    fixture = TestBed.createComponent(DetailBacklogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
