import { Component, OnInit, ElementRef, Input } from '@angular/core';
import {
  qdtEnigma, qdtCapabilityApp, qdtCompose, QdtViz,
} from 'qdt-components';

const identity = Math.random().toString(32).substr(2, 8);

const config = {
  host: 'sense-demo.qlik.com',
  secure: true,
  port: 443,
  prefix: '',
  appId: '133dab5d-8f56-4d40-b3e0-a6b401391bde',
  identity,
};

@Component({
  selector: 'qdt-component',
  template: `Loading...`,
  styles: []
})

export class QdtComponentsComponent implements OnInit {

	@Input() component: any;
  @Input() properties: any;
  @Input() options: any;
  @Input() connection: number = 1;

  constructor(private elementRef: ElementRef) { }
  
  static engineApiAppPromise = qdtEnigma(config);
  static capabilityApiAppPromise = qdtCapabilityApp(config);

  async init() {
    const { component, properties, options, connection} = this;
    if (connection === 1) {
      const app = await QdtComponentsComponent.capabilityApiAppPromise;
      QdtViz({
        element: this.elementRef.nativeElement,
        app,
        options,
      });
    } else {
      const app = await QdtComponentsComponent.engineApiAppPromise;
      qdtCompose({
        element: this.elementRef.nativeElement,
        component,
        app,
        properties,
        options,
      });
    }
  }

  ngOnInit() {
    this.init();
  }

}
