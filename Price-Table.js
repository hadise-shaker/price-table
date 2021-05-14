$("#addRow").click(function () {
  addItem();
});

function addItem() {
  var itemRow =
    "<tr class='item'>" +
    "<td id='radif'>1</td>" +
    '<td><select name="" id="">select ..<option value="">کالا</option><option value="">خدمات</option></select></td>' +
    '<td><input type="text" name="sharh" id="sharh" placeholder="sharh" class="form-control sharh"/></td>' +
    '<td><input type="text" name="vahed" id="vahed" placeholder="vahed" class="form-control vahed"/></td>' +
    '<td ><input  name="tedad" id="tedad" placeholder="tedad" class="form-control tedad"/></td>' +
    '<td><input  name="mablaq-vahed" id="mablaq-vahed" placeholder="mablaq-vahed" class="form-control mablaq-vahed"/></td></td>' +
    '<td><input  name="takhfif" id="takhfif" placeholder="takhfif" class="form-control takhfif"/></td>' +
    '<td><input  name="maliat" id="maliat" placeholder="maliat" class="form-control maliat"/></td>' +
    '<td><input  name="mablaq-kol" id="mablaq-kol" placeholder="$0.00" class="form-control mablaq-kol"/></td>' +
    "</tr>";
  $("#items_table").append(itemRow);
}
$("table").on("mouseup keyup", "input", () => calculateTotals());

function calculateTotals() {
  const subtotals = $(".item")
    .map((idx, val) => calculateSubtotal(val))
    .get();
  let total = subtotals.reduce((a, v) => a + Number(v), 0);
  $(".total").val(total.toLocaleString() + "ریال");
}

function calculateSubtotal(row) {
  const $row = $(row);
  const inputs = $row.find("input");
  const subtotal =
    inputs[2].value * inputs[3].value + inputs[5].value - inputs[4].value;

  $row.find(".mablaq-kol").val(subtotal.toLocaleString());

  return subtotal;
}

///////////////////////////////////////
