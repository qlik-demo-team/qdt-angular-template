import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { qdtEnigma, qdtCapabilityApp, qdtCompose, QdtViz } from 'qdt-components';

const config = {
    "host": "sense-demo.qlik.com",
    "secure": true,
    "port": 443,
    "prefix": "",
    "identity": "yianni",
    "appId": "133dab5d-8f56-4d40-b3e0-a6b401391bde"
}


@Component({
  selector: 'qdt-component',
  templateUrl: './qdt-component.component.html',
  styleUrls: ['./qdt-component.component.css']
})
export class QdtComponentComponent implements OnInit {

	@Input() Component: string;
  @Input() properties: object;
  @Input() options: object;
  @Input() connection: number;

  // static { qdtCapabilityApp } = QdtComponents;
  // static qdtComponent = new QdtComponents(qConfig.config, qConfig.connections);
  static capabilityApp = qdtCapabilityApp(config);
  static engineApp = qdtEnigma(config);
    
	constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    // QdtComponentComponent.qdtComponent.render(this.Component, this.props, this.elementRef.nativeElement);
    if (this.connection === 1) {
      QdtViz({
        element: this.elementRef.nativeElement,
        app: QdtComponentComponent.capabilityApp,
        options: {
          id: 'a5e0f12c-38f5-4da9-8f3f-0e4566b28398',
          height: 400,
        },
      });
    } else {
      qdtCompose({
        element: this.elementRef.nativeElement,
        component: this.Component,
        app: QdtComponentComponent.engineApp,
        propertie: this.properties,
        options: this.options,
      });
    }
  }

}
