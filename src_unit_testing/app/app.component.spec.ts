import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'testing'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('welcome to angular');
  });



  it('verify ename and salary', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.ename).toEqual('javeed');
    expect(app.salary).toBeGreaterThan(10000);
  
  });


  it('testing isValid() ', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.isValid()).toBeTrue();

  });



  it('testing h1 tag value', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const e1 = fixture.nativeElement.querySelector('h1');
    expect(e1.innerText).toEqual('Hello friends');
  });
  
});
