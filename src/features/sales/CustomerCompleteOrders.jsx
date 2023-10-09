import { OrderData } from "../../../data/orders";

export function CustomerCompleteOrders() {
  return (
    <div>
      <h1>Complete orders</h1>
      <table className="table-fixed text-left border-collapse  w-full px-2">
        <thead>
          <tr className="border border-black">
            <th>Order by</th>
            <th>Fish type</th>
            <th>Weight</th>
            <th>Location</th>
            <th>Price</th>
            <th>Paid</th>
            <th>Order date</th>
            <th>Delivery date</th>
          </tr>
        </thead>

        <tbody>
          {OrderData.map((order) => {
            return (
              <>
                {order.delivered && (
                  <tr className="text-black" key={order.id}>
                    <td>{order.orderBy}</td>
                    <td>{order.fishType}</td>
                    <td>{order.weight} grams</td>
                    <td>{order.location}</td>
                    <td>{order.price}</td>
                    <td>
                      <input
                        type="checkbox"
                        checked={order.paid}
                        name="paid"
                        id=""
                      />
                    </td>
                    <td>{order.dateOrdered}</td>
                    <td>{order.deliveredOn}</td>
                  </tr>
                )}
              </>
            );
          })}

          <tr className="text-black">
            <td>Tamu foods</td>
            <td>Tilapia</td>
            <td>12kg</td>
            <td>Nairobi</td>
            <td>12000</td>
            <td>
              <input type="checkbox" checked name="paid" id="" />
            </td>
            <td>01/10/2023</td>
            <td>04/10/2023</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
