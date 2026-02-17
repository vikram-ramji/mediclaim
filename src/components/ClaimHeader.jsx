import Card from "./Card";

const ClaimHeader = ({
  claimId,
  status,
  claimType,
}) => {
  const formatStatus = (status) => {
    switch (status) {
      case "APPROVED":
        return "Approved";
      case "NO_CAMOUNT":
        return "No Claimed Amount";
      case "REJECTED":
        return "Rejected";
      default:
        return status;
    }
  }

  const colorMap = {
    "APPROVED": "bg-green-50 text-green-600 border-green-200",
    "NO_CAMOUNT": "bg-amber-50 text-amber-600 border-amber-200",
    "REJECTED": "bg-red-50 text-red-600 border-red-200",
  }

  return (
    <Card sticky>
      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs uppercase tracking-wider font-semibold text-gray-500">
            Claim ID
          </span>
          <h1 className="text-3xl font-bold tracking-wider">{claimId}</h1>
        </div>
        <div>
          <span className={`text-xs uppercase tracking-wider font-semibold border ${colorMap[status] || 'bg-gray-50 text-gray-600 border-gray-200'} px-2 py-1 rounded`}>
            {formatStatus(status)}
          </span>
          <span className="text-xs uppercase tracking-wider font-semibold bg-blue-50 text-blue-600 border border-blue-200 px-2 py-1 rounded ml-4">
            {claimType}
          </span>
        </div>
      </div>
    </Card>
  );
};

export default ClaimHeader;
