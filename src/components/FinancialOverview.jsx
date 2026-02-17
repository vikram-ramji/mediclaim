import Card from "./Card";
import { formatMoney } from "../utils/formatMoney";

const FinancialOverview = ({
  claimedAmt,
  totalBills,
  discrepancyAmt,
  discrepancyReason,
}) => {
  return (
    <Card>
      <span className="text-xs uppercase tracking-wider font-semibold text-gray-500">
        Financial Overview
      </span>
      <div className="flex flex-col pt-2">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-700">Claimed Amount:</span>
          <span className="font-medium">{formatMoney(claimedAmt)}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-700">Actual Bills:</span>
          <span className="font-medium">{formatMoney(totalBills)}</span>
        </div>
        <div className="flex items-center justify-between">
          <span
            className={`font-medium ${discrepancyAmt > 0 ? "text-red-600" : "text-green-600"}`}
          >
            Discrepancy:
          </span>
          <span
            className={`font-medium text-lg ${discrepancyAmt > 0 ? "text-red-600" : "text-green-600"}`}
          >
            {formatMoney(discrepancyAmt)}
          </span>
        </div>
      </div>
      <div className="border-t border-gray-200 mt-4 pt-4 px-3">
        <p
          className="text-sm text-gray-600 italic line-clamp-4"
          title={discrepancyReason}
        >
          {discrepancyReason}
        </p>
      </div>
    </Card>
  );
};

export default FinancialOverview;
