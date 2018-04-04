import { Component, OnInit } from '@angular/core';
// import * as Hammer from 'hammerjs';
// global Hammer = Hammer.default;
import * as picassoHammer from 'picasso-plugin-hammer';
import * as picasso from 'picasso.js'
import * as leonardoui from 'leonardo-ui'
import Tooltip from 'tooltip.js'
// import picasso from 'picasso.js';
picasso.use(picassoHammer);
// console.log(picasso)
console.log(Tooltip)

const generateTooltip = (options) => {
    console.log(5555)
    var d = document.getElementById('qdt-tooltip');
    d.innerHTML = `${options.label}: ${options.value}`;
    d.style.width = `200px`;
    d.style.left = `${options.x-100}px`;
    d.style.top = `${options.y-40}px`;
    d.style.visibility = `visible`;
}

@Component({
    selector: 'picasso',
    templateUrl: './picasso.component.html',
    styleUrls: ['./picasso.component.less']
})
export class PicassoComponent implements OnInit {

    constructor() { }
    pic = null;

    ngOnInit() {
        // Tooltip  
        let tooltip;
        var docks = ["top", ["right", "left"], "bottom", ["left", "right"], "right"];
        var tooltipTriggers = Array.prototype.slice.apply(document.querySelectorAll(".tooltip-trigger"));
        tooltipTriggers.forEach(function (element, idx) {
            console.log(777)
            console.log(element)
            var dock = docks[idx];
            element.addEventListener("mouseover", function () {
                var options = {
                    alignTo: element,
                    dock: dock,
                    content: null
                };
                if (idx === 4) {
                    options.content = "<span>This text is bold and italic: <b><i>1337</i></b></span>"
                }
                console.log(options)
                tooltip = leonardoui.tooltip(options);
            });
            element.addEventListener("mouseout", function () {
                if (tooltip) {
                    tooltip.close();
                }
            });
        });
        // Picasso Chart
        const data = [{
            type: "matrix",
            data: [
                ["Month", "Sales"],
                ["Jan", 8357],
                ["Feb", 4610],
                ["Mar", 3720],
                ["Apr", 2961],
                ["May", 1378],
                ["June", 9137],
                ["July", 8802],
                ["Aug", 7707],
                ["Sep", 7894],
                ["Oct", 7221],
                ["Nov", 4432],
                ["Dec", 5403]
            ]
        }];
        const settings = {
            scales: {
                xScale: {
                    data: { field: 'Sales' },
                    invert: false,
                    include: [0]
                },
                yScale: { data: { extract: { field: 'Month' } }, padding: 0.1 },
            },
            components: [{
                type: 'axis',
                dock: 'left',
                scale: 'yScale'
            }, {
                type: 'axis',
                dock: 'bottom',
                scale: 'xScale'
            }, {
                key: 'bars',
                type: 'box',
                displayOrder: 1,
                data: {
                    extract: {
                        field: 'Month',
                        props: {
                            start: 0,
                            end: { field: 'Sales' }
                        }
                    },
                },
                settings: {
                    orientation: "horizontal",
                    major: { scale: 'yScale' },
                    minor: { scale: 'xScale' },
                    box: {
                        fill: "#a0a0a0",
                        strokeWidth: 1,
                        stroke: "rgba(0, 0, 0, 0.2)"
                    }
                },
                brush: {
                    trigger: [{
                        on: 'tap',
                        action: 'toggle',
                        contexts: ['highlight', 'selection', 'tooltip'],
                        propagation: 'stop', // 'stop' => prevent trigger from propagating further than the first shape
                        globalPropagation: 'stop', // 'stop' => prevent trigger of same type to be triggered on other components
                        touchRadius: 24
                    }],
                    consume: [{
                        context: 'highlight',
                        style: {
                            active: {
                                fill: 'red',
                                stroke: '#333',
                                strokeWidth: 2
                            },
                            inactive: {
                                opacity: 0.3
                            }
                        }
                    }]
                }
            },
            {
                type: 'labels',
                displayOrder: 2, // must be larger than the displayOrder for the 'bars' component
                settings: {
                    sources: [{
                        component: 'bars',
                        selector: 'rect', // select all 'rect' shapes from the 'bars' component
                        strategy: {
                            type: 'bar', // the strategy type
                            settings: {
                                direction: function ({ data }) { // data argument is the data bound to the shape in the referenced component
                                    return data && data.end.value > data.start.value ? 'right' : 'left'
                                },
                                fontFamily: 'Helvetica',
                                fontSize: 14,
                                align: 0.5,
                                justify: 1,
                                labels: [{
                                    label({ data }) {
                                        return data ? data.end.label : '';
                                    },
                                    placements: [ // label placements in prio order. Label will be placed in the first place it fits into
                                        { position: 'inside', fill: '#fff' },
                                        { position: 'outside', fill: '#666' }
                                    ]
                                }]
                            }
                        }
                    }]
                }
            }],
            interactions: [
                {
                    type: 'native',
                    key: 'here',
                    enable: function (e) {  // bool or function
                        this.chart /*...*/;
                        return true;
                    },
                    events: {
                        mouseover: function (e) {
                            let label = e.target.attributes.getNamedItem('data-label');
                            let value = e.target.attributes.getNamedItem('data-value')
                            if (label && value) {
                                generateTooltip({
                                    x: e.pageX,
                                    y: e.pageY,
                                    label: label.value,
                                    value: value.value
                                })
                            }
                        },
                        mousemove: function (e) { // key should point to a native event
                            let label = e.target.attributes.getNamedItem('data-label');
                            let value = e.target.attributes.getNamedItem('data-value')
                            if (label && value) {
                                generateTooltip({
                                    x: e.pageX,
                                    y: e.pageY,
                                    label: label.value,
                                    value: value.value
                                })
                                // var options = {
                                //     alignTo: e.target,
                                //     dock: 'top',
                                //     content: 'this is the text'
                                // };
                                // console.log(options)
                                // tooltip = leonardoui.tooltip(options);
                                // let tooltips = new Tooltip(e.target, onPopper, {
                                //     placement: 'top'
                                // });
                            }
                        },
                        mouseout: function (e) {
                            var d = document.getElementById('qdt-tooltip');
                            d.style.visibility = `hidden`;
                        },
                        mousedown: function (e) {
                            if (e.target.attributes.getNamedItem('data-label') && e.target.attributes.getNamedItem('data-value')) {
                                console.log(e.target.attributes.getNamedItem('data-label').value);
                                console.log(e.target.attributes.getNamedItem('data-value').value);
                            }
                        }
                    }
                }
            ]
            // interactions: [{
            //     type: 'hammer',
            //     key: 'hammered',
            //     enable: function() {  // bool or function that runs when interactions are added, not every event loop
            //         this.chart /*...*/;
            //         return true;
            //       },
            //       gestures: [{
            //         type: 'Tap', // required - Point out which hammer recognizer should be used
            //         options: { // optional - Options for hammer Pan recognizer
            //           /**
            //           * Determines if this gestures should be enabled or not, Runs every event loop that Hammer processes
            //           */
            //           enable: function(e) {
            //               console.log(0)
            //               console.log(e)
            //               console.log(e.manager.session.offsetDelta)
            //             //   console.log(this)
            //             this.chart /*...*/;
            //           },
            //           event: 'singletap', // optional - name the event this gestures should trigger; defaults to 'pan' in this case
            //           // Pan options are described here http://hammerjs.github.io/recognizer-pan/
            //         },
            //         recognizeWith: 'singletap', // space-separated list of recognizers that should run simultaneously. The name is the event name specified in the options of the gesture (or the default name)
            //         requireFailure: 'singletap', // space-separated list of recognizers that needs to fail before this one gets recognized. The name is the event name specified in the options of the gesture (or the default name)
            //         events: {
            //           /**
            //           * When hammer recognizes that a pan gesture begins the event specified in
            //           * the options object above with 'start' added is emitted.
            //           */
            //          singletapstart: function(e) {
            //             // handle event for pan start
            //               console.log(1)
            //               console.log(e)
            //           },
            //           /**
            //           * When hammer recognizes a pan gesture the event specified in the options object
            //           * above is emitted.
            //           */
            //          singletap: function(e) {
            //             // handle event for panning
            //               console.log(2)
            //               console.log(e)
            //           },
            //           /**
            //           * When hammer recognizes that a pan gesture ends the event specified in
            //           * the options object above with 'end' added is emitted.
            //           */
            //          singletapend: function(e) {
            //             // handle event for pan end
            //               console.log(3)
            //               console.log(e)
            //           }
            //         }
            //       }]
            // }]
        }

        // Barchart
        // picasso({
        //     renderer: {
        //         prio: ['canvas']
        //     }
        // }).chart({
        if (!this.pic) {
            this.pic =  picasso.chart({
                element: document.querySelector('#barchart'),
                data: data,
                settings: settings
            })
        };
       

        // ScotterPlot
        picasso.chart({
            element: document.querySelector('#scotterplot'),
            settings: {
                scales: {
                    budget: { max: 5000, min: 0 },
                    sales: { max: 11000, min: 3000, invert: true }
                },
                components: [
                    {
                        type: 'axis',
                        scale: 'budget',
                        dock: 'bottom'
                    },
                    {
                        type: 'axis',
                        scale: 'sales',
                        dock: 'left'
                    },
                    {
                        type: 'point',
                        data: [
                            { sales: 7456, margin: 0.3, budget: 4557 },
                            { sales: 5603, margin: 0.7, budget: 2234 },
                            { sales: 8603, margin: 0.6, budget: 4121 },
                            { sales: 4562, margin: 0.4, budget: 1234 },
                            { sales: 9873, margin: 0.9, budget: 3453 },
                        ],
                        settings: {
                            x: { scale: 'budget', fn() { return this.scale(this.data.value.budget); } },
                            y: { scale: 'sales', fn() { return this.scale(this.data.value.sales); } },
                            size() { return this.data.value.margin; },
                        }
                    }
                ]
            }
        });
    };
    ngAfterViewInit() {
        console.log(9)
    }
}
