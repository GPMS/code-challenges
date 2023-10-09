// Add JavaScript code here
const ordersDisplay = document.querySelector("[data-orders]");
const orderTemplate = document.querySelector("[data-order-template]");
const subTotalElement = document.querySelector("[data-subtotal]");
const shippingElement = document.querySelector("[data-shipping]");
const totalElement = document.querySelector("[data-total]");
const beverageBtn = document.querySelector("[data-beverage]");

class Order {
  #amount = 1;

  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  changeAmount(change) {
    if (change < 0 && this.#amount == 0) {
      return;
    }
    this.#amount += change;
  }

  getAmount() {
    return this.#amount;
  }
}

const orders = [
  new Order("Brittish Pizza | Medium", 7.99),
  new Order("Pizza Diavola | Medium", 7.99),
];

const shippingCost = 2;

beverageBtn.addEventListener("click", (e) => {
  orders.push(new Order("Coca Cola", 2));
  update();
});

function increase(e) {
  const orderElement = e.target.closest("[data-order]");
  const order = orders[orderElement.dataset.order];
  order.changeAmount(1);
  update();
}

function decrease(e) {
  const orderElement = e.target.closest("[data-order]");
  const order = orders[orderElement.dataset.order];
  order.changeAmount(-1);
  update();
}

function remove(e) {
  const orderElement = e.target.closest("[data-order]");
  const orderIndex = orderElement.dataset.order;
  orders.splice(orderIndex, 1);
  update();
}

function update() {
  ordersDisplay.innerHTML = "";
  let subTotal = 0;
  orders.forEach((order, index) => {
    const price = order.getAmount() * order.price;
    subTotal += price;

    const orderElement = orderTemplate.content.cloneNode(true);
    orderElement.firstElementChild.dataset.order = index;
    orderElement.querySelector("[data-order-name]").innerText = order.name;
    orderElement.querySelector("[data-order-amount]").value = order.getAmount();
    orderElement.querySelector("[data-order-price]").innerText =
      price.toFixed(2);
    orderElement
      .querySelector("[data-increase]")
      .addEventListener("click", increase);
    orderElement
      .querySelector("[data-decrease]")
      .addEventListener("click", decrease);
    orderElement
      .querySelector("[data-remove]")
      .addEventListener("click", remove);
    ordersDisplay.appendChild(orderElement);
  });
  subTotalElement.innerText = `\$ ${subTotal.toFixed(2)}`;
  shippingElement.innerText = `\$ ${shippingCost.toFixed(2)}`;
  totalElement.innerText = `\$ ${(subTotal + shippingCost).toFixed(2)}`;
}

update();
