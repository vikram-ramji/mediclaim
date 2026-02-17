import { useState } from "react";
import { useClaim } from "../context/ClaimContext";
import Card from "./Card";
import { AlertCircle, ChevronRight } from "lucide-react";

const BillCard = ({ bill, items }) => {
  const [open, setOpen] = useState(false);
  const { jumpToPage } = useClaim();

  const nmeCount = items.filter((item) => item.is_nme).length;

  return (
    <Card
      className={`border border-gray-200 rounded-lg hover:shadow-lg ${!open && "hover:bg-gray-50 cursor-pointer"} transition`}
      onClick={() => !open && setOpen(true)}
    >
      <div
        className="w-full flex justify-between items-center cursor-pointer"
        onClick={() => open && setOpen(!open)}
      >
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-bold text-gray-800 flex items-center gap-1">
              Invoice #{bill.invoice_number}
            </h3>

            {nmeCount > 0 && (
              <div className="flex items-center gap-2 px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs border border-red-200">
                <AlertCircle size={14} />
                <span className="-mb-0.5">{nmeCount} Issues Found</span>
              </div>
            )}
          </div>
          <div className="flex items-center gap-4">
            <p className="w-fit text-sm text-gray-500">
              Date: {bill.bill_date}
            </p>
            <button
              className="text-xs text-gray-700 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                jumpToPage(bill.page_number);
              }}
            >
              [ <span className="hover:underline underline-offset-3">Page {bill.page_number}</span> ]
            </button>
          </div>
        </div>
        <div className="text-right">
          <p className="text-lg">${bill.net_amount}</p>
        </div>
      </div>

      {open && (
        <div className="overflow-x-auto mt-4 border rounded-lg">
          <table className="w-full text-sm text-left text-gray-600">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b">
              <tr>
                <th className="px-4 py-2">Item Name</th>
                <th className="px-4 py-2">Category</th>
                <th className="px-4 py-2 text-right">Amount</th>
                <th className="px-4 py-2">Deduction</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr
                  key={index}
                  className={`border-b last:border-0 ${
                    item.is_nme
                      ? "bg-red-50 text-red-700 font-medium"
                      : "bg-white"
                  }`}
                >
                  <td className="px-4 py-2 font-medium">
                    {item.item_name}
                  </td>
                  <td className="px-4 py-2">{item.category}</td>
                  <td className="px-4 py-2 text-right">${item.final_amount}</td>
                  <td className="px-4 py-2 text-xs italic text-gray-500">
                    {item.deduction_reason || "-"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Card>
  );
};

export default BillCard;
