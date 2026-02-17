import { useClaim } from "../context/ClaimContext";
import Card from "./Card";

const DocumentSegments = ({ segmentsData }) => {
  const { activePage, jumpToPage } = useClaim();

  const formatTitle = (title) => {
    return title
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const isActive = (ranges) => {
    return ranges.some(
      (range) => activePage >= range.start && activePage <= range.end,
    );
  };

  return (
    <Card>
      <span className="text-xs uppercase tracking-wider font-semibold text-gray-500">
        Document Segments
      </span>

      <div className="divide-y divide-gray-100 mt-2">
        {Object.entries(segmentsData).map(([key, data]) => (
          <div
            key={key}
            className={`p-3 flex items-center gap-2 ${isActive(data.page_ranges) && "bg-blue-50"}`}
          >
            <h4 className="text-sm font-medium text-gray-700">
              {formatTitle(key)}
            </h4>
            {data.page_ranges.map((range, index) => (
              <button
                key={index}
                className={`min-w-6.5 min-h-6 text-xs px-2 py-1 rounded-md border transition-all cursor-pointer ${isActive([range]) ? "bg-sky-500 text-white border-sky-500" : "bg-gray-50 text-gray-600 border-gray-200"}`}
                onClick={() => jumpToPage(range.start)}
              >
                {range.start === range.end
                  ? `${range.start}`
                  : `${range.start}-${range.end}`}
              </button>
            ))}
          </div>
        ))}
      </div>
    </Card>
  );
};

export default DocumentSegments;
