let orderForm = document.getElementById("order-form");
let orderTable = document.getElementById("order-table");

orderForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (event.target['dish'].value.length > 3 &&
     event.target['time'].value.length == 5 && 
     event.target['address'].value.length > 5 && 
     event.target['tel'].value.length > 11) {
        let order = {
            dish: event.target['dish'].value,
            time: event.target['time'].value,
            address: event.target['address'].value,
            phone: event.target['tel'].value
        }
      
        event.target.reset();
       createOrder(order);
    }

});




function createOrder(newOrder) {
    let tr = document.createElement("tr");

    let dish = document.createElement("td");
    dish.innerHTML = newOrder.dish;
    let time = document.createElement("td");
    time.innerHTML = newOrder.time;
    let address = document.createElement("td");
    address.innerHTML = newOrder.address;
    let phone = document.createElement("td");
    phone.innerHTML = newOrder.phone;
    let link = document.createElement("td");
    link.append(createLink(newOrder));

    tr.append(dish);
    tr.append(time);
    tr.append(address);
    tr.append(phone);
    tr.append(link);

    orderTable.append(tr);
}

function createLink(newOrder) {
    let text = JSON.stringify(newOrder);
    let download = document.createElement("a");
    download.setAttribute('href', 'data:text/plane;carset = utf-8,'
        + encodeURIComponent(text));
    download.setAttribute('download', 'order.json');
    download.innerHTML = 'link';
    return download;
}






