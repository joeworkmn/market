$(function() {
   $.datepicker.setDefaults({ dateFormat: 'yy-mm-dd' })

   $(".datefield").datepicker()

})

function initDataTable(selector = '.data-tables') {
   $(selector).dataTable({
      "bJQueryUI": true,
      "aoColumnDefs": [
                       { "bSortable": false, "aTargets": ['not-sortable'] },
                       { "sType": "num-html", "aTargets": ['num-html'] },
                       { "sType": "currency", "aTargets": ['currency-column'] }
                      ]
   })
}
