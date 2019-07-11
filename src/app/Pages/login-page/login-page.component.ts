import { Component, OnChanges, AfterViewInit, ViewChild, ElementRef, ViewContainerRef } from '@angular/core';
import { ServicesService,Users } from 'src/app/services.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
// import { DxDataGridComponent } from 'devextreme-angular';

declare var self: any;
declare var $ : any;
@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
})




export class LoginPageComponent implements AfterViewInit {

    gridUsers : Users[];
    countries: any = [
        {
            name: 'Afghanistan',
            id: 1
        },
        {
            name: 'Afghanistan1',
            id: 2
        },
        {
            name: 'Afghanistan2',
            id: 3
        },
        {
            name: 'Afghanistan3',
            id: 4
        },
        {
            name: 'Afghanistan4',
            id: 5
        },
        {
            name: 'Afghanistan5',
            id: 6
        },

        {
            name: 'Afghanistan6',
            id: 7
        },
        {
            name: 'Afghanistan67',
            id: 8
        },
        {
            name: 'Afghanistan8',
            id: 9
        },

    ]
    state: any = [
        'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'The   Bahamas', 'Bahrain'
    ];
    password: any;
    registrationForm: any = {
        firstName : 'kavish',
        lastName : 'soam',
        emailId : 'kavishsoam1@gmail.com',
        dateOfBirth : '02/04/1996',
        country : 'Afghanistan1',
        city : 'ghaziabad',
        state : 'Algeria',
        password : 'K@vish8171'


    };

    @ViewChild('lgnForm', { static: true }) lgnForm: any;
    @ViewChild('regForm', { static: false }) regForm: any;
    @ViewChild('myDataGrid',{static:false}) myDataGrid: any;

    confirmPassword: any;
    getPassword: any;
    popupVisible = false;
    popupHide : boolean = true;

    constructor(service: ServicesService, private router : Router) { 
        this.gridUsers = service.defaultUser();

    }

    
    ngAfterViewInit() {
        console.log(this.lgnForm);
        this.getPassword = this.lgnForm.password
        console.log(this.getPassword);
    }

    popupForm = [
        {
            itemType: 'group',
            colCount : 1,

            toolbarItems:[
                {
                    text: "Title",
                    location: "before"
                }, {
                    widget: "dxButton",
                    location: "after",
                    options: { 
                        text: "Refresh", 
                        onClick: function(e) { 
                            console.log('hello button refresher');
                         }
                    }
                }
            ]
        }
    ]

    loginForm = [
        {
            itemType: 'group',
            colCount: '2',

            items: [
                {
                    width: 540,
                    "dataField": "firstName",
                    "label": { "text": "FirstName", visible: true },
                    editorOptions: {
                        maxLength: 12,
                        readOnly: false
                    },
                    validationRules:
                        [
                            {
                                type: "stringLength",
                                max: 12,
                                message: "firstname can have only 12 digit"
                            },
                            {
                                type: "pattern",
                                pattern: "^[A-Za-z]+$",
                                message: "input correct firstname"
                            },
                            {
                                type: "required"
                            }
                        ]
                },
                {
                    "dataField": "lastName",
                    "label": { "text": "LastName", visible: true },
                    editorOptions: {
                        maxLength: 12,
                        readOnly: false
                    },
                    validationRules:
                        [
                            {
                                type: "stringLength",
                                max: 12,
                                message: "lastname can have only 12 digit"
                            },
                            {
                                type: "pattern",
                                pattern:  "^[A-Za-z]+$",
                                message: "input correct lastname"
                            },
                            {
                                type: "required"
                            }
                        ]
                }, {
                    "dataField": "emailId",
                    "label": { "text": "EmailId", visible: true },
                    editorOptions: {
                        maxLength: 30,
                        readOnly: false
                    },
                    validationRules:
                        [
                            {
                                type: "required",
                                message: "email is required"
                            },
                            {
                                type: "email",
                                message: "email is invalid"
                            },
                        ]
                },
                {
                    "dataField": "dateOfBirth",
                    "label": { "text": "date of Birth", visible: true },
                    editorType: 'dxDateBox',
                    editorOptions: {
                        type: 'date',
                        displayFormat: 'MM/dd/yyyy',
                        dateSerializationFormat: "yyyy-MM-ddTHH:mm:ssZ"
                    },
                    validationRules:
                        [
                            {
                                type: "required",
                                message: "Date of Birth is required"
                            }
                        ]
                },
                {

                    "dataField": "country",
                    "label": { "text": "Select Country", visible: true },
                    editorType: 'dxSelectBox',
                    editorOptions: {
                        dataSource: this.countries,
                        displayExpr: 'name',
                        valueExpr: 'id',
                        readOnly: false
                    },
                    validationRules:
                        [
                            {
                                type: "required",
                                message: "country is required"
                            }
                        ]
                },
                {
                    "dataField": "city",
                    "label": { "text": "City", visible: true },
                    editorOptions: {
                        maxLength: 20,
                        readOnly: false
                    },
                    validationRules:
                        [
                            {
                                type: "stringLength",
                                max: 45,
                                message: "city can have only 45 digit"
                            },
                            {
                                type: "pattern",
                                pattern:  "^[A-Za-z]+$",
                                message: "input correct City"
                            },
                            {
                                type: "required",
                                message: "city is compulsory"
                            }
                        ]
                },
                {
                    "dataField": "state",
                    "label": { "text": "State", visible: true },
                    editorType: 'dxSelectBox',
                    editorOptions: {
                        dataSource: this.state,
                        readOnly: false
                    },
                    validationRules:
                        [
                            {
                                type: "required",
                                message: "city is compulsory"
                            }
                        ]
                }
            ]
        },
        {
            itemType: 'group',
            colCount: 2,
            items: [
                {

                    "dataField": "password",
                    "label": { "text": "Password", visible: true },

                    editorOptions: {
                        onValueChanged: (e) => {
                            return this.passwordChanges(e)
                        },
                        maxLength: 20,
                        readOnly: false,
                        mode: 'password',
                    },
                    validationRules:
                        [
                            {
                                type: "stringLength",
                                max: 20,
                                message: "password can have only 20 digit"
                            },
                            {
                                type: "pattern",
                                pattern: "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$",
                                message: "input correct password"
                            },
                            {
                                type: "required",
                                message: "password is compulsory"
                            }
                        ]
                },
                {
                    "dataField": "confirmPassword",
                    "label": { "text": "confirm Password", visible: true },
                    editorOptions: {
                        // onValueChanged: (e) => {
                        //     return this.FormChanges(e)
                        // },
                        maxLength: 20,
                        readOnly: false,
                        mode: 'password',
                    },
                    validationRules:
                        [
                            {
                                type: "stringLength",
                                max: 20,
                                message: "password can have only 20 digit"
                            },
                            {
                                type: "pattern",
                                pattern: "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$",
                                message: "input correct password"
                            },
                            {
                                type: "required",
                                message: "password is compulsory"
                            },
                            {
                                type: 'compare',
                                // comparisonType: '===',
                                comparisonTarget: (e) => {
                                    return this.passwordComparison(e)
                                },
                                message: 'password doesnot match',
                                reevaluate: true,
                            }
                        ]
                },
            ]
        }

    ]

    buttonOptions: any = {
        text: 'click me',
    }


    buttonClick() {
        this.popupVisible = true;
        console.log('hello click function!!!');
    }

    passwordComparison(e) {
        return this.getPassword;
    };

    // FormChanges(e){
    //     console.log(e)
    //     this.confirmPassword = e.value
    // }

    passwordChanges(e){
        this.getPassword = e.value
    }

    saveAddSplitFormDetails(){
        console.log(this.registrationForm);
    }

    addSplitFormCancel = (e) => {
        this.regForm.instance.hide();
    }

    filterCancel = (e) => {
        console.log(this.myDataGrid.instance)
        this.myDataGrid.instance.clearFilter();
    }


    appendToolbar = (e) => {
        e.toolbarOptions.items.unshift({
            location : 'before',   
        },{
            location : 'after',
            widget : 'dxButton',

            options:{
                // text: 'refresh',
                icon:'refresh',
                onClick : this.filterCancel.bind(this)
            }
        })
                console.log(e);
    }

    navigateCharts =() =>{
        this.router.navigate(['/charts'])
    }

    navigateChart=(e) =>{
        console.log(e)
  
    }


    
}




//   // if ($("#myBtn").length == 0) {
//     var $customButton = $('<div>').attr("id", "myBtn").dxButton({                           
//         icon: 'doc', //or your custom icon
//         onClick: function(){
//             e.component.clearFilter();
//         }
//     });

//      var toolbar = e.element
//         .find('.dx-toolbar-after');
//      $(toolbar.get(0))
//         .prepend($customButton);
   

// // }

// // e.toolbarOptions.items.unshift({
// //     location: 'before',
// //     template: 'totalGroupCount'
// // }, {
// //         location: 'after',
// //         widget: 'dxButton',
// //         options: {
// //             width: 136,
// //             text: 'Collapse All',
// //             onClick: this.myDataGrid.instance.clearFilter()
// //         }
// //     }, 
// //     {
// //         location: 'after',
// //         widget: 'dxButton',
// //         options: {
// //             icon: 'refresh',
// //             onClick: this.myDataGrid.instance.clearFilter()
// //         }
// //     }
// //     );