import { useEffect, useRef } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { useClaim } from "../context/ClaimContext";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import PDFToolbar from "./PDFToolbar";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

const PDFViewer = () => {
  const { activePage, jumpToPage, numPages, setNumPages, scale } = useClaim();

  const pageRefs = useRef({});
  const observerRef = useRef(null);

  const isSyncedbyScroll = useRef(false);
  const isProgrammaticScroll = useRef(false);
  const scrollTimeout = useRef(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  useEffect(() => {
    if (isSyncedbyScroll.current) {
      isSyncedbyScroll.current = false;
      return;
    }

    if (pageRefs.current[activePage]) {
      isProgrammaticScroll.current = true;

      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);

      scrollTimeout.current = setTimeout(() => {
        isProgrammaticScroll.current = false;
      }, 800);

      pageRefs.current[activePage].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [activePage]);

  useEffect(() => {
    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (isProgrammaticScroll.current) return;

        const mostVisiblePage = entries.reduce(
          (max, entry) =>
            entry.intersectionRatio > max.intersectionRatio ? entry : max,
          entries[0],
        );

        if (mostVisiblePage && mostVisiblePage.isIntersecting) {
          const pageNum = parseInt(
            mostVisiblePage.target.getAttribute("data-page-number"),
          );
          if (pageNum !== activePage) {
            isSyncedbyScroll.current = true;
            jumpToPage(pageNum);
          }
        }
      },
      { threshold: 0.5 },
    );

    Object.values(pageRefs.current).forEach((ref) => {
      if (ref) observerRef.current.observe(ref);
    });

    return () => {
      observerRef.current?.disconnect();
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, [numPages, activePage, jumpToPage]);

  return (
    <div className="h-full border-2 border-gray-200 rounded-2xl flex flex-col overflow-hidden bg-white">
      <PDFToolbar />
      <div className="overflow-y-auto flex-1 min-h-0 p-4">
        <Document
          file="/final.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
          className="flex flex-col items-center gap-4"
        >
          {Array.from(new Array(numPages), (_el, index) => (
            <div
              key={`page_${index + 1}`}
              data-page-number={index + 1}
              ref={(el) => (pageRefs.current[index + 1] = el)}
            >
              <Page
                pageNumber={index + 1}
                renderTextLayer
                renderAnnotationLayer
                scale={scale}
                width={600}
                className="shadow-xl border border-gray-200"
              />
            </div>
          ))}
        </Document>
      </div>
    </div>
  );
};

export default PDFViewer;
