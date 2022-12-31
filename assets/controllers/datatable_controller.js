import { Controller } from '@hotwired/stimulus';
import DataTables from "datatables.net-bs5";
import('datatables.net-buttons-bs5');
import('datatables.net-buttons/js/buttons.colVis.min');

/*
* The following line makes this controller "lazy": it won't be downloaded until needed
* See https://github.com/symfony/stimulus-bridge#lazy-controllers
*/
/* stimulusFetch: 'lazy' */


export default class extends Controller {
    static targets = ['table']
    static values = {
        buttons: String,
    }

    connect() {
        super.connect();
        console.assert(this.hasTableTarget, "Missing target 'table'");
        let el = this.tableTarget;
        let setup  = {
            dom: 'Bfrtip',
            buttons: [
                'colvis',
                'copy'
            ]
        }
        let dt = $(el).DataTable(setup);

    }

    // ...
}
