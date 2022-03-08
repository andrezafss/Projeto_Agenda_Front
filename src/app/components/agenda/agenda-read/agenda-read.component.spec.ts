import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaReadComponent } from './agenda-read.component';

describe('AgendaReadComponent', () => {
  let component: AgendaReadComponent;
  let fixture: ComponentFixture<AgendaReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendaReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
