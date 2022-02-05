import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesLisDetailstComponent } from './recipes-lis-detailst.component';

describe('RecipesLisDetailstComponent', () => {
  let component: RecipesLisDetailstComponent;
  let fixture: ComponentFixture<RecipesLisDetailstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipesLisDetailstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesLisDetailstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
