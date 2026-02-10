// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

// TODO: buatlah variabel yang menampung data orders (DONE)
let orders = [];

// TODO: selesaikan fungsi addOrder (DONE)
function addOrder(customerName, items) {
  const orderId = generateUniqueId();
  const totalPrice = items.reduce((total, item) => total + item.price, 0);
  const order = {
    id: orderId,
    customerName: customerName,
    items: items,
    totalPrice: totalPrice,
    status: "Menunggu",
  };

  orders.push(order);
  return order;
}

// TODO: selesaikan fungsi updateOrderStatus  (DONE)
function updateOrderStatus(orderId, status) {
  const order = orders.find((order) => order.id === orderId);
  if (order) {
    order.status = status;
  }
}

// TODO: selesaikan fungsi calculateTotalRevenue dari order yang berstatus Selesai (DONE)
function calculateTotalRevenue() {
  return orders
    .filter((order) => order.status === "Selesai")
    .reduce((total, order) => total + order.totalPrice, 0);
}

// TODO: selesaikan fungsi deleteOrder (DONE)
function deleteOrder(id) {
  orders = orders.filter((order) => order.id !== id);
}

export {
  orders,
  addOrder,
  updateOrderStatus,
  calculateTotalRevenue,
  deleteOrder,
};
