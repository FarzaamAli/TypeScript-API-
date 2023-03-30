"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchAPI() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("https://fakestoreapi.com/products");
        const data = yield response.json();
        return data;
    });
}
let table = document.getElementById("table_body");
fetchAPI()
    .then((products) => {
    let counter = 0;
    let tableData = "";
    for (let product of products) {
        tableData = `
            <tr>
                <td>${product.title}</td>
                <td>${product.description}</td>
                <td>$${product.price}</td>
                <td><img src = "${product.image}"/></td>
            </tr>
        `;
        let row = table.insertRow(0);
        row.innerHTML = tableData;
        counter++;
    }
})
    .catch((error) => {
    alert("ERROR OCCURED!");
});
//# sourceMappingURL=app.js.map