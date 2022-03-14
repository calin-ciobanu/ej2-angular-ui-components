var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentEditorContainerModule } from './documenteditorcontainer.module';
import { Toolbar } from '@syncfusion/ej2-documenteditor';
export var ToolbarService = { provide: 'DocumentEditorToolbar', useValue: Toolbar };
/**
 * NgModule definition for the DocumentEditorContainer component with providers.
 */
var DocumentEditorContainerAllModule = /** @class */ (function () {
    function DocumentEditorContainerAllModule() {
    }
    DocumentEditorContainerAllModule = __decorate([
        NgModule({
            imports: [CommonModule, DocumentEditorContainerModule],
            exports: [
                DocumentEditorContainerModule
            ],
            providers: [
                ToolbarService
            ]
        })
    ], DocumentEditorContainerAllModule);
    return DocumentEditorContainerAllModule;
}());
export { DocumentEditorContainerAllModule };
