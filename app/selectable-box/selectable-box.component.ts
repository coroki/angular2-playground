import {Component, Input, Output, EventEmitter} from "angular2/core"

@Component({
    selector: 'selectable-box',
    templateUrl: 'app/selectable-box/selectable-box.template.html',
    styleUrls: ['app/selectable-box/selectable-box.styles.css']
})
export class SelectableBoxComponent {

    @Input('selected')
    selected: boolean = true;

    @Output('selection-changed')
    changed = new EventEmitter();

    @Input('count')
    count = 0;
}
