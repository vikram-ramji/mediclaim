import { useClaim } from "../context/ClaimContext";
import { ChevronLeft, ChevronRight, Minus, Plus } from "lucide-react";

const PDFToolbar = () => {
  const { numPages, activePage, jumpToPage, scale, setScale } = useClaim();

  const updateScale = (zoom) => {
    setScale((prev) => {
      const newScale = Math.round((prev + zoom) * 10) / 10;
      return Math.max(0.5, Math.min(newScale, 3.0));
    });
  };

  return (
    <div className="bg-white border-b border-gray-200 flex items-center justify-between p-3">
      <div className="flex items-center gap-2">
        <button
          onClick={() => jumpToPage(Math.max(activePage - 1, 1))}
          disabled={activePage <= 1}
          className="cursor-pointer hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-default"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <span className="text-sm text-gray-600 -mb-0.5">
          Page {activePage} of {numPages}
        </span>
        <button
          onClick={() => jumpToPage(Math.min(activePage + 1, numPages))}
          disabled={activePage >= numPages}
          className="cursor-pointer hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-default"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
      <div className="flex items-center gap-2">
        <button onClick={() => updateScale(-0.1)} className={scale <= 0.5 ? "cursor-default opacity-50" : "cursor-pointer hover:scale-110 active:scale-95"}>
          <Minus className="w-4 h-4" />
        </button>
        <span className="text-sm text-gray-600 -mb-1">
          {Math.round(scale * 100)}%
        </span>
        <button onClick={() => updateScale(0.1)} className={scale >= 3.0 ? "cursor-default opacity-50" : "cursor-pointer hover:scale-110 active:scale-95"}>
          <Plus className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default PDFToolbar;
