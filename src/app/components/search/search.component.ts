import { Component, OnInit, ElementRef } from '@angular/core';
import { HighlightJsService } from 'angular2-highlight-js';

@Component({
    selector: 'search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

    constructor(private el: ElementRef, private service: HighlightJsService) { }

    viz1 = {
        type: 'QdtSelectionToolbar',
        props: {
            type: 'QdtSelectionToolbar', height: '300px',
        },
    };
    viz2 = {
        type: 'QdtViz',
        props: {
            type: 'QdtViz', id: 'ycppXj', height: '300px',
        },
    };
    viz3 = {
        type: 'QdtSearch',
        props: {
            cols: ['Case Owner'],
            single: false,
            inverse: false,
            placeholder: 'Search Case Owner',
            tooltipContent: '<h5>SEARCH</h5>Case owner to compare cases.',
        },
    };

    htmlContent = `
        <div class="row">
            <div class="col-md-12">
                <qdt-component [Component]="viz1.type" [props]="viz1.props"></qdt-component>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <qdt-component [Component]="viz3.type" [props]="viz3.props"></qdt-component>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <qdt-component [Component]="viz2.type" [props]="viz2.props"></qdt-component>
            </div>
        </div>
    `;

    jsContent = `
        viz1 = {
            type: 'QdtSelectionToolbar',
            props: {
                type: 'QdtSelectionToolbar', height: '300px',
            },
        };
        viz2 = {
            type: 'QdtViz',
            props: {
                type: 'QdtViz', id: 'ycppXj', height: '300px',
            },
        };
        viz3 = {
            type: 'QdtSearch',
            props: {
                cols: ['Case Owner'],
                single: false,
                inverse: false,
                placeholder: 'Search Case Owner',
                tooltipContent: '<h5>SEARCH</h5>Case owner to compare cases.',
            },
        };
    `;

    ngOnInit() {
    }

}
