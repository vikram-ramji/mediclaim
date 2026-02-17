import BillCard from "./BillCard";
import Card from "./Card";

const BillsSection = ({ bills }) => {
  return (
    <Card>
      <span className="text-xs uppercase tracking-wider font-semibold text-gray-500">
        Medical Bills ({bills.length})
      </span>
      <div className="mt-2 flex flex-col gap-4">
        {bills.map((bill, idx) => (
          <BillCard bill={bill.bill} items={bill.items} key={idx} />
        ))}
      </div>
    </Card>
  );
};

export default BillsSection;
