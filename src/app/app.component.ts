import { Component } from '@angular/core';
import { ServicesService,Users } from './services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  formValChange(e: any) {
    throw new Error("Method not implemented.");
  }
  onPartChanged(e: any, value: any) {
    throw new Error("Method not implemented.");
  }
  toggleTerminalOperator(value: any, instance: any) {
    throw new Error("Method not implemented.");
  }
  title = 'devKavish';
  data : any;
  onlyNumber: any;
  originAirportApi: any;
  splitDetailsFormData: any;
  destinationAirportApi: any;
  splitForm: any;
  inputElement: any;
  constructor(service : ServicesService){
    // this.data = service.defaultUser();
  }

  formdata = [
    {
        itemType: 'group',
        colCount: 2,
        items: [
            {
                itemType: 'group',
                items: [
                    {
                        itemType: "group", 
                        colCount: 4, 
                        cssClass: "mawb-group", 
                        items: [
                            { 
                                "dataField": "carrierId", 
                                "label": { "text": "MAWB#" },
                                "editorType": "dxSelectBox", 
                                "editorOptions": 
                                { 
                                    "dataSource": "api/stcore/carriers/dynamic?StaticFilter.MotCodes=AIR", 
                                    displayExpr: "code", 
                                    valueExpr: "id", 
                                    searchMode: "startswith", 
                                    readOnly: true, 
                                    sort: [{ selector: "code", desc: false }], 
                                    "width": 50, 
                                    maxLength: 3, 
                                    showDropDownButton: false, 
                                    showClearButton: false, 
                                    placeholder: "" 
                                }, 
                                validationRules: 
                                [
                                    { 
                                        type: "required" 
                                    }
                                ], 
                                remoteOperations: true 
                            },
                            { 
                                "dataField": "mawbNumber", 
                                "label": { "visible": false }, 
                                cssClass: "mt-auto no-padding", 
                                "colSpan": 3, 
                                "editorOptions": 
                                { 
                                    maxLength: 8, 
                                    onKeyPress: this.onlyNumber, 
                                    readOnly: true 
                                },  
                                validationRules: 
                                [
                                    { 
                                        type: "stringLength", 
                                        min: 8, 
                                        max: 8, 
                                        message: "MAWB# must have 8 digit" 
                                    }, 
                                    { 
                                        type: "pattern", 
                                        pattern: "^\\d+$", 
                                        message: "MAWB# must have 8 digit" 
                                    }, 
                                    { 
                                        type: "required" 
                                    }
                                ] 
                            }
                        ]
                    },
                    {
                        dataField: "arrivalAirport",
                        label: { text: "Arrival Airport " },
                        editorType: "dxSelectBox",
                        remoteOperations: true,
                        editorOptions: {
                            dataSource: this.originAirportApi,
                            displayExpr: "threeLetterCode",
                            valueExpr: "id",
                            searchMode: "startswith",
                            sort: [{ selector: "threeLetterCode", desc: false }],
                            onValueChanged: (e) => {
                                this.formValChange(e)
                            }
                        },
                        validationRules: [{
                            type: "required"
                        }]
                    },
                    {
                        dataField: "arrivalDate",
                        label: { text: "Arrival Date " },
                        editorType: "dxDateBox",
                        editorOptions: {
                            type: "date",
                            displayFormat: "MM/dd/yyyy",
                            dateSerializationFormat: "yyyy-MM-ddTHH:mm:ssx",
                            onValueChanged: (e) => {
                                this.formValChange(e)
                                const value = this.splitDetailsFormData.departureDate;
                                e.component.option('min', value);
                            }
                        },
                        cssClass: 'padding-top-18',
                        validationRules: [{
                            type: "required"
                        }]
                    },
                    {
                        dataField: "flightNumber",
                        editorType: "dxTextBox",
                        label: { text: "Flight#" },
                        editorOptions: { valueChangeEvent: 'change keyup', onValueChanged: this.formValChange },
                        validationRules: [{
                            type: "required"
                        }]
                    },
                    {
                        itemType: "group", colCount: 4, items: [
                            {
                                "dataField": "boardedWeight", "colSpan": 3,
                                validationRules: [{ type: "required" }],
                                editorOptions: { min: 0, readOnly: "true", valueChangeEvent: 'change keyup', onValueChanged: this.formValChange, showSpinButtons: false }
                            },
                            { "dataField": "weightUomId", "editorType": "dxSelectBox", "label": { "visible": false }, "cssClass": "mt-auto no-padding", "editorOptions": { "dataSource": "api/stcore/weightuoms/dynamic", "valueExpr": "id", displayExpr: "twoLetterCode", "width": 100, min: 0, readOnly: "true" }, validationRules: [{ type: "required" }] }
                            // { "dataField": "weightUomId", "editorType": "dxSelectBox", "label": { "visible": false }, "cssClass": "mt-auto no-padding", "editorOptions": { "dataSource": "assets/demo/data/weight.json", "valueExpr": "id", displayExpr: "twoLetterCode", "width": 100, min: 0, readOnly: "true" }, validationRules: [{ type: "required" }] }
                        ]
                    }

                ],
            },
            {
                itemType: 'group',
                items: [
                    {
                        dataField: "part",
                        label: { text: "Part" },
                        editorType: "dxSelectBox",
                        remoteOperations: true,
                        editorOptions: {
                            dataSource: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
                            valueChangeEvent: 'change keyup',
                            onValueChanged: (e) => { this.onPartChanged(e, e.value) },
                            onInput: (e) => {
                                this.splitDetailsFormData.part = e.component.option('text');
                                this.formValChange(e);
                            }
                        },
                        validationRules: [{
                            type: "required"
                        }, {
                            type: 'pattern',
                            pattern: '^[A-Za-z]+$',
                            message: "Part field can have values from A to Z.",
                        }]
                    },
                    {
                        dataField: "departureAirport",
                        label: { text: "Departure Airport" },
                        editorType: "dxSelectBox",
                        remoteOperations: true,
                        editorOptions: {
                            dataSource: this.destinationAirportApi,
                            displayExpr: "threeLetterCode",
                            valueExpr: "id",
                            // readOnly: true
                            searchMode: "startswith",
                            onValueChanged: this.formValChange
                        },
                        validationRules: [{
                            type: "required"
                        }]
                    },
                    {
                        dataField: "isTerminalOperatorCTOFirms",
                        label: {
                            text: "Terminal Operator",
                            location: "left"
                        },
                        editorType: "dxRadioGroup",
                        editorOptions: {
                            items: [
                                "Carriers",
                                "Firms"
                            ],
                            layout: "horizontal",
                            onValueChanged: (e) => {
                                this.toggleTerminalOperator(e.value, this.splitForm.form.instance);
                                this.formValChange(e)
                            }
                        }
                    },
                    {
                        dataField: "terminalOperator",
                        label: { visible: false },
                        editorType: "dxSelectBox",
                        remoteOperations: true,
                        editorOptions: {
                            dataSource: "api/stcore/carriers/dynamic?StaticFilter.MotCodes=AIR",
                            displayExpr: "nameWithTwoLetterCode",
                            valueExpr: "id",
                            showDropDownButton: false,
                            showClearButton: false,
                            searchMode: "startswith",
                            sort: [{ selector: "nameWithTwoLetterCode", desc: false }],
                            onValueChanged: this.formValChange

                        },
                        validationRules: [{
                            type: "required"
                        }]
                    },
                    {
                        dataField: "terminalOperatorFirms",
                        label: { visible: false },
                        editorType: "dxSelectBox",
                        remoteOperations: true,
                        editorOptions: {
                            dataSource: "api/staticcustoms/firmslocationscodes/dynamic",
                            displayExpr: "name",
                            valueExpr: "code",
                            showDropDownButton: false,
                            showClearButton: false,
                            searchMode: "startswith",
                            sort: [{ selector: "name", desc: false }],
                            onValueChanged: this.formValChange
                        },
                        validationRules: [{
                            type: "custom",
                            validationCallback: (e) => {
                                if (this.splitDetailsFormData.isTerminalOperatorCTOFirms !== "Firms")
                                    return true;
                                return !!e.value;
                            },
                            reevaluate: true,
                            message: "Required"
                        }]
                    },
                    // {
                    //     dataField: "entryNumber",
                    //     label: { text: "Entry Number" },
                    //     validationRules: [{
                    //         type: "required"
                    //     }]
                    // },
                    {
                        dataField: "boardedPieces",
                        label: { text: "Boarded Quantity" },
                        editorType: "dxNumberBox",
                        validationRules: [{
                            type: "required"
                        }],
                        editorOptions: {
                            valueChangeEvent: 'change keydown',
                            min: "0", format: "###0",
                            showSpinButtons: false,
                            onValueChanged: (e) => {
                                let calculatedValue = (+this.splitDetailsFormData.totalWeight) / (+this.splitDetailsFormData.totalQuantity) * (+e.value)
                                this.splitDetailsFormData.boardedWeight = calculatedValue.toFixed(2)
                                this.formValChange(e)
                            },
                            onInput: this.inputElement

                        }
                    },
                    // {
                    //     itemType: "group", colCount: 4, items: [
                    //         { "dataField": "boardedWeight", "colSpan": 3, validationRules: [{ type: "required" }], editorOptions: { min: 0, readOnly: "true" } },
                    //         { "dataField": "weightUomId", "editorType": "dxSelectBox", "label": { "visible": false }, "cssClass": "mt-auto no-padding", "editorOptions": { "dataSource": "api/stcore/weightuoms/dynamic", "valueExpr": "id", displayExpr: "twoLetterCode", "width": 100, min: 0, readOnly: "true" }, validationRules: [{ type: "required" }] }
                    //         // { "dataField": "weightUomId", "editorType": "dxSelectBox", "label": { "visible": false }, "cssClass": "mt-auto no-padding", "editorOptions": { "dataSource": "assets/demo/data/weight.json", "valueExpr": "id", displayExpr: "twoLetterCode", "width": 100, min: 0, readOnly: "true" }, validationRules: [{ type: "required" }] }
                    //     ]
                    // }
                ]
            }
        ]
    },

]

  customizer(item){
    // console.log(item)
    if (item.dataField === "firstName" || item.dataField === "lastName") {
      item.validationRules = [{
          type: "required",
          message: "The value is required"
      }, {
          type: "pattern",
          pattern: "^[a-zA-Z]+$",
          message: "The value should not contain digits"
      }]
  }

}


}
