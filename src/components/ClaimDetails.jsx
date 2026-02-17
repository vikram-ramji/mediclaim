import ClaimHeader from "./ClaimHeader";
import data from "../assets/data.json";
import PatientInfo from "./PatientInfo";
import FinancialOverview from "./FinancialOverview";
import AuditIssues from "./AuditIssues";
import BillsSection from "./BillsSection";
import DocumentSegments from "./DocumentSegments";

const ClaimDetails = () => {
  const { claim_id, status, claim_type, audit_analysis, edited_data, segments } = data;

  const {
    original_claimed_amount,
    original_total_of_bills,
    discrepancy_amount,
    discrepancy_reason,
    policy_violations,
    policy_remarks,
    medical_legibility,
  } = audit_analysis;
  return (
    <div className="h-full flex flex-col gap-4 overflow-hidden">
      <ClaimHeader claimId={claim_id} status={status} claimType={claim_type} />
      <div className="flex-1 overflow-y-auto flex flex-col gap-4 min-h-0">
        <div className="grid grid-cols-2 gap-4">
          <PatientInfo
            patientDetails={edited_data.patient_summary.patient_details}
          />
          <FinancialOverview
            claimedAmt={original_claimed_amount}
            totalBills={original_total_of_bills}
            discrepancyAmt={discrepancy_amount}
            discrepancyReason={discrepancy_reason}
          />
        </div>
        <AuditIssues
          policyViolations={policy_violations}
          policyRemarks={policy_remarks}
          medicalLegibility={medical_legibility}
        />
        <BillsSection bills={edited_data.nme_analysis.bills}/>
        <DocumentSegments segmentsData={segments.aggregated_segments} />
      </div>
    </div>
  );
};

export default ClaimDetails;
