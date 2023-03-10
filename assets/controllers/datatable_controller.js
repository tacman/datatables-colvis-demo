import { Controller } from '@hotwired/stimulus';
import DataTables from "datatables.net-bs5";
import('datatables.net-select-bs5');
import('datatables.net-responsive-bs5');
import('datatables.net-buttons-bs5');
import('datatables.net-scroller-bs5');
import('datatables.net-buttons/js/buttons.colVis.min');

// /* stimulusFetch: 'lazy' */
export default class extends Controller {
    static targets = ['table']
    static values = {
        buttons: String,
    }

    connect() {
        // super.connect();
        console.assert(this.hasTableTarget, "Missing target 'table'");
        let el = this.tableTarget;
        console.log("Connecting " + this.identifier + ' with ', el);
        this.init(el);
    }

    init(el) {
        let setup  = {
            dom: 'Bfrtip',
            select: true,
            // scrollY:        300,
            // scrollCollapse: true,
            scroller:       true,
            buttons: [
                'colvis',
                'copy'
            ]
        };
        // let dt = $(el).DataTable(setup);
        let dt2 = new DataTables(el, setup);
    }

    // ...
}
