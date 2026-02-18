import ClaimDetails from "./components/ClaimDetails";
import PDFViewer from "./components/PDFViewer";

const App = () => {
  return (
    <div className="h-screen bg-gray-100 grid grid-cols-2 p-6 gap-4 font-inter">
      <PDFViewer />
      <ClaimDetails />
    </div>
  );
};

export default App;
