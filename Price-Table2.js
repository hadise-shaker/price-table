/* $("#table tbody tr").each(function (i, element) {
  var html = $(this).html();
  if (html != "") {
    var tedad = $(this).find(".tedad").val();
    var mablaq_vahed = $(this).find(".mablaq-vahed").val();

    console.log(
      $(this)
        .find("#mablaq-kol")
        .val(tedad * mablaq_vahed)
    );
  }
}); */
/* $("#addRow").click(function () {
  var i = 1;
  $("#radif").html(i++);
  addItem();
});

function addItem() {
  var itemRow =
    "<tr>" +
    "<td id='radif'>1</td>" +
    '<td><select name="" id="">select ..<option value="">کالا</option><option value="">خدمات</option></select></td>' +
    '<td><input type="text" name="sharh" id="sharh" placeholder="sharh" class="form-control sharh"/></td>' +
    '<td><input type="text" name="vahed" id="vahed" placeholder="vahed" class="form-control vahed"/></td>' +
    '<td ><input type="text" name="tedad" id="tedad" placeholder="tedad" class="form-control tedad"/></td>' +
    '<td><input type="text" name="mablaq-vahed" id="mablaq-vahed" placeholder="mablaq-vahed" class="form-control mablaq-vahed"/></td></td>' +
    '<td><input type="text" name="takhfif" id="takhfif" placeholder="takhfif" class="form-control takhfif"/></td>' +
    '<td><input type="text" name="maliat" id="maliat" placeholder="maliat" class="form-control maliat"/></td>' +
    '<td><input type="text" name="mablaq-kol" id="mablaq-kol" placeholder="mablaq-kol" class="form-control mablaq-kol"/></td>' +
    "</tr>";
  $("#items_table").append(itemRow);
} */
/* $("table").on("mouseup keyup", "input[type=number]", () => calculateTotals());

function calculateTotals() {
  const subtotals = $(".item")
    .map((idx, val) => calculateSubtotal(val))
    .get();
  let total = subtotals.reduce((a, v) => a + Number(v), 0);
  $(".mablaq-kol").text(formatAsCurrency(total));
}

function calculateSubtotal(row) {
  const $row = $(row);
  const inputs = $row.find("input");
  const subtotal =
    inputs[2].value * inputs[3].value + inputs[5].value - inputs[4].value;

  $row.find("td:last").text(formatAsCurrency(subtotal));

  return subtotal;
}
function formatAsCurrency(amount) {
  return `${Number(amount)}`;
} */
///////////////////////////////////////

/* $("#items_table tr").on("keyup change", function () {
  calc();
}); */

/* let lineNo = 2; */
$(document).ready(function () {
  $("#addRow").click(function () {
    $(".mablaq-kol").val("");
    /*     markup =
      "<tr class='item'>" +
      "<td id='radif'>" +
      lineNo +
      "</td>" +
      '<td><select name="" id="">select ..<option value="">کالا</option><option value="">خدمات</option></select></td>' +
      '<td><input type="text" name="sharh" id="sharh" placeholder="sharh" class="form-control sharh"/></td>' +
      '<td><input type="text" name="vahed" id="vahed" placeholder="vahed" class="form-control vahed"/></td>' +
      '<td ><input  name="tedad" id="tedad" placeholder="tedad" class="form-control tedad"/></td>' +
      '<td><input  name="mablaq-vahed" id="mablaq-vahed" placeholder="mablaq-vahed" class="form-control mablaq-vahed"/></td></td>' +
      '<td><input  name="takhfif" id="takhfif" placeholder="takhfif" class="form-control takhfif"/></td>' +
      '<td><input  name="maliat" id="maliat" placeholder="maliat" class="form-control maliat"/></td>' +
      '<td><input  name="mablaq-kol" id="mablaq-kol" placeholder="$0.00" class="form-control mablaq-kol"/></td>' +
      "</tr>";
    tableBody = $("table tbody").find("input").val("");
    tableBody.append(markup);
    lineNo++; */
    const $lastRow = $(".item:last");
    const $newRow = $lastRow.clone();

    $newRow.insertAfter($lastRow);
  });
});

/* $(document).ready(function () {
  $("#addRow").on("click", () => {
    const $lastRow = $(".item:last");
    const $newRow = $lastRow.clone();

    $newRow.find("input").val("");
    $newRow.insertAfter($lastRow);
    calc();
  });
}); */
/* $("#items_table tr").on("keyup change", function () {
  calc();
}); */

$(".items_table").each(function (i, element) {
  /* var html = $(this).html(); */
  $(element).on("keyup change", function () {
    console.log("keyup");
    let total = 0;
    let x = Number($(".mablaq-vahed").val());
    let y = Number($(".tedad").val());
    let a = Number($(".maliat").val());
    let b = Number($(".takhfif").val());
    total = x * y + a - b;

    $(".mablaq-kol").val(total.toLocaleString());

    return total;
  });
});
$(".mablaq-kol").val("");
/* $("#table tbody tr ").each(function (i, element) {
      var html = $(this).html();
      if (html != "") {
        var qty = $(this).find("#tedad").val();
        var price = $(this).find("#mablaq-vahed").val();
        let result = $(this)
          .find("#mablaq-kol")
          .val(qty * price);
        console.log(result);
        /* return result; 
        /* calc_total(); 
      }
    });
  });
   */
/*   $("#maliat").on("keyup change", function () {
    calc_total();
  }); */
/* }); */

/* function calc() {
  $("#table tbody tr td input").each(function (i, element) {
    var html = $(this).html();
    if (html != "") {
      var qty = $(this).find(".tedad").val();
      var price = $(this).find(".mablaq-vahed").val();
      let result = $(this)
        .find(".mablaq-kol")
        .val(qty * price);
      console.log(result); */
/* return result; */
/* calc_total(); */
/*    }
  });
} */
/* calc();
function calc_total() {
  let total = 0;
  $(".mablaq-kol").each(function () {
    total += parseInt($(this).val());
  }); */

/* tax_sum = (total / 100) * $("#maliat").val(); */
/* 	$('#tax_amount').val(tax_sum.toFixed(2));
	$('#total_amount').val((tax_sum+total).toFixed(2)); */
/* } */

/* function calc_total() {
  total = 0;
  $(".total").each(function () {
    total += parseInt($(this).val());
  });
  $(".price").val(total.toFixed(2));
  tax_sum = (total / 100) * $("#tax").val();
  $("#tax_amount").val(tax_sum.toFixed(2));
  $("#total_amount").val((tax_sum + total).toFixed(2));
} */
