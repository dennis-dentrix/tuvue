import { OrderData } from "../../../data/orders";

export function CustomerOrders() {
  return (
    <div>
      <h1>All orders</h1>
      <table className="table-fixed text-left border-collapse  w-full px-2 text-xs md:text-base">
        <thead>
          <tr className="border-b border-black gap-2">
            <th>Order by</th>
            <th>Fish type</th>
            <th>Weight</th>
            <th>Location</th>
            <th>Price</th>
            <th>Paid</th>
            <th>Order date</th>
            <th>Date delivered</th>
            <th>status</th>
          </tr>
        </thead>

        <tbody>
          {OrderData.map((order) => (
            <tr
              className={order.delivered ? "text-green" : "text-maroon"}
              key={order.id}
            >
              <td>{order.orderBy}</td>
              <td>{order.fishType}</td>
              <td>{order.weight}grams</td>
              <td>{order.location}</td>
              <td>{order.price}</td>
              <td>
                <input type="checkbox" checked={order.paid} name="paid" id="" />
              </td>

              <td>{order.dateOrdered}</td>
              <td>{order.deliveredOn ? order.deliveredOn : "_"}</td>
              <td>{order.delivered ? "Delivered" : "Processing"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
