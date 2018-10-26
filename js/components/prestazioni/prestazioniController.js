/**
 * prestazioniController - controller
 * Controller del componente
 *
 */

function prestazioniController(
  $scope,
  DTOptionsBuilder,
  DTColumnDefBuilder,
  $uibModal,
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

  this.motiviNegazione = [
    { nome: "Motivo negazione  1", code: "01" },
    { nome: "Motivo negazione  2", code: "02" },
    { nome: "Motivo negazione  3", code: "03" },
    { nome: "Motivo negazione  4", code: "04" },
    { nome: "Motivo negazione  5", code: "05" },
    { nome: "Motivo negazione  6", code: "06" },
    { nome: "Motivo negazione  7", code: "07" },
    { nome: "Motivo negazione  8", code: "08" },
    { nome: "Motivo negazione  9", code: "09" },
    { nome: "Motivo negazione 10", code: "10" },
    { nome: "Motivo negazione 11", code: "11" }

  ];

  this.motiviRevoca = [
    { nome: "Motivo revoca  1", code: "01" },
    { nome: "Motivo revoca  2", code: "02" },
    { nome: "Motivo revoca  3", code: "03" },
    { nome: "Motivo revoca  4", code: "04" },
    { nome: "Motivo revoca  5", code: "05" },
    { nome: "Motivo revoca  6", code: "06" },
    { nome: "Motivo revoca  7", code: "07" },
    { nome: "Motivo revoca  8", code: "08" },
    { nome: "Motivo revoca  9", code: "09" },
    { nome: "Motivo revoca 10", code: "10" },
    { nome: "Motivo revoca 11", code: "11" }

  ];

  this.motiviSospensione = [
    { nome: "Motivo sospensione  1", code: "01" },
    { nome: "Motivo sospensione  2", code: "02" },
    { nome: "Motivo sospensione  3", code: "03" },
    { nome: "Motivo sospensione  4", code: "04" },
    { nome: "Motivo sospensione  5", code: "05" },
    { nome: "Motivo sospensione  6", code: "06" },
    { nome: "Motivo sospensione  7", code: "07" },
    { nome: "Motivo sospensione  8", code: "08" },
    { nome: "Motivo sospensione  9", code: "09" },
    { nome: "Motivo sospensione 10", code: "10" },
    { nome: "Motivo sospensione 11", code: "11" }

  ];

  this.predisponi = function(cTipo) {

    $scope.tipoPredisposizione = cTipo;

    // http://www.marcorpsa.com/ee/t1891.html
    self.modalInstance = $uibModal.open({
      templateUrl: "./../views/modal_predisponi.html",
      controller: "modalPredisponiCtrl",
      size: "lg",
      scope: $scope,
      windowClass: "animated fadeInRightBig"
    });
  };

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
