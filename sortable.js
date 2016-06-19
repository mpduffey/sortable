"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Sortable = (function () {
    function Sortable(elem) {
        this.changeOrder = new core_1.EventEmitter();
        this.elem = elem;
    }
    Sortable.prototype.ngAfterContentInit = function () {
        var _this = this;
        $(this.elem.nativeElement).sortable({
            handle: ".handle",
            containment: "parent",
            opacity: 0.5,
            scroll: true,
            update: function (event, ui) {
                console.log("moved from: " + _this.starting_position + " to " + ui.item.index());
                _this.changeOrder.emit({
                    startIndex: _this.starting_position,
                    endIndex: ui.item.index()
                });
            },
            start: function (event, ui) {
                _this.starting_position = ui.item.index();
            }
        });
    };
    __decorate([
        core_1.Input('sortable'), 
        __metadata('design:type', Object)
    ], Sortable.prototype, "sortableArray", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], Sortable.prototype, "changeOrder", void 0);
    Sortable = __decorate([
        core_1.Directive({
            selector: '[sortable]',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], Sortable);
    return Sortable;
}());
exports.Sortable = Sortable;
//# sourceMappingURL=sortable.js.map