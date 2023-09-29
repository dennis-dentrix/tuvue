import { Button } from "../ui/Button";
import { Fire } from "react-bootstrap-icons";

function Order() {
  return (
    <>
      <div className=" px-3 py-2 h-full">
        {/* IF THERE ARE NO ORDERS PLACED THE DISPLAY THE nO ORDERS COMPONNTS INSTEAD OF THE ORDER CARDS */}
        <div className="flex flex-wrap gap-3 ">
          <OrderCard />

          <OrderCard />
          <OrderCard />
        </div>
      </div>
    </>
  );
}

function OrderCard() {
  return (
    // IF ORDER IS PENDING SHADOW AND PENDING TEXT IS MAROON IF ORDER IS FULLFILED THE COLOR IS GREEN
    <div className="bg-white text-green shadow-maroon shadow-sm px-3 py-2 rounded-md flex flex-col gap-6">
      <div className="flex items-end gap-4">
        <div>
          <h1 className="text-lg tracking-wider font-bold">Tilapia</h1>
          {/* ORDER ID */}
          <p className="text-sm text-maroon">#145668</p>
        </div>
        <p className="text-black font-semibold text-sm">kes. 2000</p>
      </div>

      <div className="text-xs">
        {/* ODER DATE */}
        <p>
          {" "}
          Order day: <span>12/11/2023</span>
        </p>
        {/* SELLER NAME */}
        <h3>David Ouma</h3>
      </div>

      <div>
        <p className="text-maroon flex items-center gap-1">
          <Fire />
          <span className="text-sm">Pending...</span>
        </p>
      </div>
    </div>
  );
}

function NoOrders() {
  return (
    <div className=" bg-white flex flex-col items-center place-content-center gap-4">
      <h1>💔You have no orders yet.</h1>
      <div>
        <Button type="primary" nav="/menu">
          Order now
        </Button>{" "}
        to view your orders
      </div>
    </div>
  );
}

export default Order;
