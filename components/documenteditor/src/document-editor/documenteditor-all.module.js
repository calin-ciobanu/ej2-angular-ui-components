var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentEditorModule } from './documenteditor.module';
import { Print, SfdtExport, WordExport, TextExport, Selection, Search, Editor, EditorHistory, OptionsPane, ContextMenu, ImageResizer, HyperlinkDialog, TableDialog, BookmarkDialog, TableOfContentsDialog, PageSetupDialog, ParagraphDialog, ListDialog, StyleDialog, StylesDialog, BulletsAndNumberingDialog, FontDialog, TablePropertiesDialog, BordersAndShadingDialog, TableOptionsDialog, CellOptionsDialog, SpellChecker, SpellCheckDialog, CollaborativeEditing } from '@syncfusion/ej2-documenteditor';
export var PrintService = { provide: 'DocumentEditorPrint', useValue: Print };
export var SfdtExportService = { provide: 'DocumentEditorSfdtExport', useValue: SfdtExport };
export var WordExportService = { provide: 'DocumentEditorWordExport', useValue: WordExport };
export var TextExportService = { provide: 'DocumentEditorTextExport', useValue: TextExport };
export var SelectionService = { provide: 'DocumentEditorSelection', useValue: Selection };
export var SearchService = { provide: 'DocumentEditorSearch', useValue: Search };
export var EditorService = { provide: 'DocumentEditorEditor', useValue: Editor };
export var EditorHistoryService = { provide: 'DocumentEditorEditorHistory', useValue: EditorHistory };
export var OptionsPaneService = { provide: 'DocumentEditorOptionsPane', useValue: OptionsPane };
export var ContextMenuService = { provide: 'DocumentEditorContextMenu', useValue: ContextMenu };
export var ImageResizerService = { provide: 'DocumentEditorImageResizer', useValue: ImageResizer };
export var HyperlinkDialogService = { provide: 'DocumentEditorHyperlinkDialog', useValue: HyperlinkDialog };
export var TableDialogService = { provide: 'DocumentEditorTableDialog', useValue: TableDialog };
export var BookmarkDialogService = { provide: 'DocumentEditorBookmarkDialog', useValue: BookmarkDialog };
export var TableOfContentsDialogService = { provide: 'DocumentEditorTableOfContentsDialog', useValue: TableOfContentsDialog };
export var PageSetupDialogService = { provide: 'DocumentEditorPageSetupDialog', useValue: PageSetupDialog };
export var ParagraphDialogService = { provide: 'DocumentEditorParagraphDialog', useValue: ParagraphDialog };
export var ListDialogService = { provide: 'DocumentEditorListDialog', useValue: ListDialog };
export var StyleDialogService = { provide: 'DocumentEditorStyleDialog', useValue: StyleDialog };
export var StylesDialogService = { provide: 'DocumentEditorStylesDialog', useValue: StylesDialog };
export var BulletsAndNumberingDialogService = { provide: 'DocumentEditorBulletsAndNumberingDialog', useValue: BulletsAndNumberingDialog };
export var FontDialogService = { provide: 'DocumentEditorFontDialog', useValue: FontDialog };
export var TablePropertiesDialogService = { provide: 'DocumentEditorTablePropertiesDialog', useValue: TablePropertiesDialog };
export var BordersAndShadingDialogService = { provide: 'DocumentEditorBordersAndShadingDialog', useValue: BordersAndShadingDialog };
export var TableOptionsDialogService = { provide: 'DocumentEditorTableOptionsDialog', useValue: TableOptionsDialog };
export var CellOptionsDialogService = { provide: 'DocumentEditorCellOptionsDialog', useValue: CellOptionsDialog };
export var SpellCheckerService = { provide: 'DocumentEditorSpellChecker', useValue: SpellChecker };
export var SpellCheckDialogService = { provide: 'DocumentEditorSpellCheckDialog', useValue: SpellCheckDialog };
export var CollaborativeEditingService = { provide: 'DocumentEditorCollaborativeEditing', useValue: CollaborativeEditing };
/**
 * NgModule definition for the DocumentEditor component with providers.
 */
var DocumentEditorAllModule = /** @class */ (function () {
    function DocumentEditorAllModule() {
    }
    DocumentEditorAllModule = __decorate([
        NgModule({
            imports: [CommonModule, DocumentEditorModule],
            exports: [
                DocumentEditorModule
            ],
            providers: [
                PrintService,
                SfdtExportService,
                WordExportService,
                TextExportService,
                SelectionService,
                SearchService,
                EditorService,
                EditorHistoryService,
                OptionsPaneService,
                ContextMenuService,
                ImageResizerService,
                HyperlinkDialogService,
                TableDialogService,
                BookmarkDialogService,
                TableOfContentsDialogService,
                PageSetupDialogService,
                ParagraphDialogService,
                ListDialogService,
                StyleDialogService,
                StylesDialogService,
                BulletsAndNumberingDialogService,
                FontDialogService,
                TablePropertiesDialogService,
                BordersAndShadingDialogService,
                TableOptionsDialogService,
                CellOptionsDialogService,
                SpellCheckerService,
                SpellCheckDialogService,
                CollaborativeEditingService
            ]
        })
    ], DocumentEditorAllModule);
    return DocumentEditorAllModule;
}());
export { DocumentEditorAllModule };
