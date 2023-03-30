async function fetchAPI() {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
}

//making custom type.
type Item = {title:string,description:string,price:number,image:string};

let table:HTMLTableElement = <HTMLTableElement> document.getElementById("table_body");

fetchAPI()
.then((products : Item[])=>{
    let counter : number = 0;
    let tableData = "";
    for(let product of products){
        tableData = `
            <tr>
                <td>${product.title}</td>
                <td>${product.description}</td>
                <td>$${product.price}</td>
                <td><img src = "${product.image}"/></td>
            </tr>
        `;
        let row = table.insertRow(0);
        row.innerHTML=tableData;
        counter++;
    }
})

.catch((error)=>{
    alert("ERROR OCCURED!");
})
