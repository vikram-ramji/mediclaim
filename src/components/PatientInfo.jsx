import { Mail, Phone } from "lucide-react";
import Card from "./Card";

const PatientInfo = ({ patientDetails }) => {
  const {
    patient_name,
    patient_dob,
    patient_policy_no,
    patient_email,
    patient_mobile,
  } = patientDetails;
  return (
    <Card className="flex flex-col">
      <span className="text-xs uppercase tracking-wider font-semibold text-gray-500">
        Patient Details
      </span>
      <div className="my-4 flex flex-col gap-1">
        <h2 className="text-2xl font-semibold text-gray-900">{patient_name}</h2>
        <p className="text-sm text-gray-700 tracking-wide">
          DOB: {patient_dob}
        </p>
        <span className="w-fit bg-blue-100 text-blue-800 text-sm tracking-wide font-medium px-2 py-1 mt-2 rounded">
          {patient_policy_no}
        </span>
      </div>
      <div className="flex-1 pt-4 border-t border-gray-200 flex flex-col md:flex-row items-center md:justify-evenly gap-4">
        <span className="flex items-center gap-2">
          <Phone className="w-4 h-4 text-gray-500" /> {patient_mobile}
        </span>
        <span className="flex items-center gap-2">
          <Mail className="w-4 h-4 text-gray-500" /> {patient_email}
        </span>
      </div>
    </Card>
  );
};

export default PatientInfo;
