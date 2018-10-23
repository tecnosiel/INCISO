/**
 * prestazioniController - controller
 * Controller del componente
 *
 */

function prestazioniController(
  $scope,
  DTOptionsBuilder,
  DTColumnDefBuilder,
  $compile
) {
  this.tab = 1;

  this.setTab = function(newTab) {
    this.tab = newTab;
  };

  this.isSet = function(tabNum) {
    return this.tab === tabNum;
  };

  //  -------------

  this.dtOptionsTabElencoPrestazioni = DTOptionsBuilder.newOptions()
    .withOption("order", [1, "desc"])
    .withOption("pageLength", 5)
    .withOption("lengthChange", false);

  this.dtColumnTabElencoPrestazioni = [
    // DTColumnDefBuilder.newColumnDef(0).notSortable()
  ];

  //  -------------

  this.dtOptionsTabElencoDatiRelativiAlReddito = DTOptionsBuilder.newOptions()
    .withOption("order", [1, "desc"])
    .withOption("pageLength", 5)
    .withOption("lengthChange", false);

  this.dtColumnTabElencoDatiRelativiAlReddito = [
    // DTColumnDefBuilder.newColumnDef(0).notSortable()
  ];

  //  -------------

  this.dtOptionsTabElencoSospensioni = DTOptionsBuilder.newOptions()
    .withOption("order", [1, "desc"])
    .withOption("pageLength", 5)
    .withOption("lengthChange", false);

  this.dtColumnTabElencoSospensioni = [
    // DTColumnDefBuilder.newColumnDef(0).notSortable()
  ];

  //  -------------

  $scope.vm = {};
  $scope.vm.dtInstance = {};
  $scope.detailInfoElencoPrestazioni = function(anno, event, url) {
    //  definisce la variabile scope che verra ereditata dalla direttiva
    var scope = $scope.$new(true);
    scope.anno = anno;

    var link = angular.element(event.currentTarget),
      icon = link.find(".fa"),
      tr = link.parent().parent(),
      table = $scope.vm.dtInstance.DataTable,
      row = table.row(tr);

    if (row.child.isShown()) {
      // This row is already open - close it
      icon.removeClass("fa-chevron-up").addClass("fa-chevron-down");
      row.child.hide();
      tr.removeClass("shown");
    } else {
      // Open this row
      icon.removeClass("fa-chevron-down").addClass("fa-chevron-up");
      row
        .child(
          $compile(
            "<dettaglio-prestazioni anno = '{{anno}}' url = '" +
              url +
              "' ></dettaglio-prestazioni>"
          )(scope)
        )
        .show();
      tr.addClass("shown");
    }
  };
}
