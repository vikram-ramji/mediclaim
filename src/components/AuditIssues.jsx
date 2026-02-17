import { AlertCircle, AlertTriangle, CircleAlert } from "lucide-react";
import Card from "./Card";
import { formatMoney } from "../utils/formatMoney";
import { useState } from "react";

const AuditIssues = ({
  policyViolations,
  policyRemarks,
  medicalLegibility,
}) => {
  const [showViolations, setShowViolations] = useState(false);
  const [showFlags, setShowflags] = useState(false);
  return (
    <Card>
      <span className="text-xs uppercase tracking-wider font-semibold text-gray-500">
        Audit Issues
      </span>

      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-red-50 p-4 border-l-4 border-red-400 rounded-r-md flex flex-col gap-2">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2 text-red-700 font-medium">
              <AlertCircle size={18} />
              <span className="-mb-0.5">
                Policy Violations ({policyViolations.length})
              </span>
            </div>
            <button
              className="cursor-pointer"
              onClick={() => setShowViolations(!showViolations)}
            >
              <span className="text-sm text-red-600">[ View Details ]</span>
            </button>
          </div>
          {!showViolations && (
            <p className="text-sm text-red-700 max-w-xl italic line-clamp-2">
              {policyRemarks}
            </p>
          )}
          {showViolations && (
            <div className="divide-y divide-red-100">
              {policyViolations.map((violation, idx) => (
                <div
                  key={idx}
                  className="p-4 hover:bg-red-100/50 transition-colors border-b border-red-100 last:border-0"
                >
                  <div className="flex justify-between items-start mb-2">
                    <p className="font-bold text-red-900 text-sm">
                      {violation.item_name}
                    </p>
                    <p className="font-mono font-bold text-red-700 text-sm whitespace-nowrap ml-2">
                      -{formatMoney(violation.amount_impacted)}
                    </p>
                  </div>

                  <div className="bg-red-100/50 rounded p-2 mb-2">
                    <p className="text-xs text-red-800 font-medium mb-1">
                      <span className="text-red-500 uppercase tracking-wide mr-1">
                        Rule:
                      </span>
                      {violation.rule_name}
                    </p>

                    <p className="text-xs text-red-700 italic border-l-2 border-red-300 pl-2">
                      "{violation.violation_details}"
                    </p>
                  </div>

                  <div className="text-xs text-red-700 font-medium flex items-center gap-1.5 mt-2">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <span className="-mb-0.75">{violation.recommendation}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="bg-amber-50 p-4 border-l-4 border-amber-400 rounded-r-md flex flex-col gap-2">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2 text-amber-700 font-medium">
              <AlertTriangle size={18} />
              <span className="-mb-0.75">
                Medical Legibility Flags (
                {medicalLegibility.flagged_items.length})
              </span>
            </div>
            <button
              className="cursor-pointer"
              onClick={() => setShowflags(!showFlags)}
            >
              <span className="text-sm text-amber-600">[ View Details ]</span>
            </button>
          </div>
          {!showFlags && (
            <p className="text-sm text-amber-700 max-w-xl italic line-clamp-2">
              {medicalLegibility.summary}
            </p>
          )}
          {showFlags && (
            <div className="divide-y divide-amber-100">
              {medicalLegibility.flagged_items.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 hover:bg-amber-100/50 transition-colors border-b border-amber-100 last:border-0"
                >
                  <p className="font-bold text-amber-900 text-sm mb-2">
                    {item.item_name}
                  </p>

                  <div className="bg-amber-100/50 rounded p-2 mb-2">
                    <p className="text-xs text-amber-700 border-l-2 border-amber-300 pl-2 py-1">
                      {item.flag_reason}
                    </p>
                  </div>

                  <div className="text-xs text-amber-700 font-medium flex items-center gap-1.5 mt-2">
                    <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                    <span className="-mb-0.75">{item.recommendation}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default AuditIssues;
