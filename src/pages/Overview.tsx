import GradeChart from "../components/GradeChart";

export default function Overview() {
  return (
    <div className="page">
      <GradeChart />

      <div className="semester-summary">
        <div className="summary-card">
            <div className="summary-top">
            <span className="sem-title">Semester 1</span>
            <div className="gpa-values">
                <span className="sgpa">8.7</span>
                <span className="cgpa">8.7</span>
            </div>
            </div>
            <div className="summary-bottom">
            <span>GP: 161.0 / 185</span>
            <span className="labels">SGPA&nbsp;&nbsp;CGPA</span>
            </div>
        </div>

        <div className="summary-card">
            <div className="summary-top">
            <span className="sem-title">Semester 2</span>
            <div className="gpa-values">
                <span className="sgpa">9.7</span>
                <span className="cgpa">9.2</span>
            </div>
            </div>
            <div className="summary-bottom">
            <span>GP: 198.0 / 205</span>
            <span className="labels">SGPA&nbsp;&nbsp;CGPA</span>
            </div>
        </div>

        <div className="summary-card">
            <div className="summary-top">
            <span className="sem-title">Semester 3</span>
            <div className="gpa-values">
                <span className="sgpa">9.0</span>
                <span className="cgpa">9.1</span>
            </div>
            </div>
            <div className="summary-bottom">
            <span>GP: 207.0 / 230</span>
            <span className="labels">SGPA&nbsp;&nbsp;CGPA</span>
            </div>
        </div>

        <div className="summary-card">
            <div className="summary-top">
            <span className="sem-title">Semester 4</span>
            <div className="gpa-values">
                <span className="sgpa">9.2</span>
                <span className="cgpa">9.1</span>
            </div>
            </div>
            <div className="summary-bottom">
            <span>GP: 183.0 / 200</span>
            <span className="labels">SGPA&nbsp;&nbsp;CGPA</span>
            </div>
        </div>

        <div className="summary-card">
            <div className="summary-top">
            <span className="sem-title">Semester 5</span>
            <div className="gpa-values">
                <span className="sgpa">8.9</span>
                <span className="cgpa">9.0</span>
            </div>
            </div>
            <div className="summary-bottom">
            <span>GP: 205.0 / 200</span>
            <span className="labels">SGPA&nbsp;&nbsp;CGPA</span>
            </div>
        </div>

        <div className="summary-card">
            <div className="summary-top">
            <span className="sem-title">Semester 6</span>
            <div className="gpa-values">
                <span className="sgpa">9.2</span>
                <span className="cgpa">9.0</span>
            </div>
            </div>
            <div className="summary-bottom">
            <span>GP: 211.0 / 230</span>
            <span className="labels">SGPA&nbsp;&nbsp;CGPA</span>
            </div>
        </div>
        </div>
    </div>
  );
}
