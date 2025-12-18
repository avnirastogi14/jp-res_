export default function Profile() {
  return (
    <div className="page">
      {/* ===== TOP PROFILE CARD ===== */}
      <div className="profile-header">
        <div className="profile-main">
          <h1 className="profile-name">AVNI RASTOGI</h1>

          <div className="profile-meta">
            <span>B.T</span>
            <span>•</span>
            <span>23103028</span>
            <span>•</span>
            <span>23103028@mail.jiit.ac.in</span>
          </div>
        </div>

        <div className="profile-academic">
          <div className="info-row">
            <span>Semester</span>
            <strong>5</strong>
          </div>
          <div className="info-row">
            <span>Section</span>
            <strong>CSE</strong>
          </div>
          <div className="info-row">
            <span>Batch</span>
            <strong>B1</strong>
          </div>
          <div className="info-row">
            <span>Academic Year</span>
            <strong>2324</strong>
          </div>
        </div>
      </div>

      {/* ===== DETAILS CARD ===== */}
      <div className="profile-card">
        <div className="profile-tabs">
          <button className="tab active">Personal</button>
        </div>

        <div className="profile-details">
          <div className="detail-row">
            <span>Date of Birth</span>
            <strong>14-12-2005</strong>
          </div>
          <div className="detail-row">
            <span>Gender</span>
            <strong>F</strong>
          </div>
          <div className="detail-row">
            <span>Blood Group</span>
            <strong>B+</strong>
          </div>
          <div className="detail-row">
            <span>Nationality</span>
            <strong>INDIAN</strong>
          </div>
          <div className="detail-row">
            <span>Category</span>
            <strong>GEN</strong>
          </div>
          <div className="detail-row">
            <span>APAAR ID</span>
            <strong>880702394757</strong>
          </div>
          <div className="detail-row">
            <span>Admission Year</span>
            <strong>2324</strong>
          </div>
          <div className="detail-row">
            <span>Institute Code</span>
            <strong>JIIT</strong>
          </div>
          <div className="detail-row">
            <span>Bank Account No</span>
            <strong>N/A</strong>
          </div>
          <div className="detail-row">
            <span>Bank Name</span>
            <strong>N/A</strong>
          </div>
          <div className="detail-row">
            <span>Father's Designation</span>
            <strong>SELF EMPLOYED</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
