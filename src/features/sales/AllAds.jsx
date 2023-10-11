import { Pen, Trash } from "react-bootstrap-icons";

export default function AllAds() {
  return (
    <div>
      <h1 className="text-lg mb-2 text-green">My products</h1>

      <>
        <table className="table-fixed text-left border-collapse  w-full px-2">
          <thead>
            <tr className="border-b border-black">
              <th>Fish type</th>
              <th>Target weight(grams)</th>
              <th>Sold (grams)</th>
              <th>Unit price</th>
              <th></th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            <tr className="py-2">
              <td>Sardines</td>
              <td>5000</td>
              <td>1000</td>
              <td>250</td>
              <td>
                <button className="flex gap-1  items-center text-green">
                  <Pen />
                  Edit
                </button>
              </td>
              <td>
                <button className="flex gap-1 items-center text-maroon">
                  <Trash />
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </>
    </div>
  );
}
