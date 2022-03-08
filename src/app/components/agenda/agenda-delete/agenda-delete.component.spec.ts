import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaDeleteComponent } from './agenda-delete.component';

describe('AgendaDeleteComponent', () => {
  let component: AgendaDeleteComponent;
  let fixture: ComponentFixture<AgendaDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendaDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
