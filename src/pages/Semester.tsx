const subjects = [
  { name: "Computer Organisation and Architecture", code: "15B11CI313", grade: "A", credits: 4 },
  { name: "Introduction to Big Data and Data Analytics", code: "20B12CS333", grade: "A", credits: 3 },
  { name: "Minor Project", code: "20B13HS311", grade: "B+", credits: 2 },
  { name: "Computer Organisation and Architecture Lab", code: "15B17CI373", grade: "A", credits: 1 },
  { name: "Open Source Software Lab", code: "15B17CI575", grade: "B+", credits: 1 },
  { name: "Operating Systems and Systems Programming", code: "15B11CI412", grade: "A", credits: 1 },
  { name: "Engineering Materials and Technology", code: "20B12PH311", grade: "A", credits: 3 },
  { name: "Consumer Behaviour", code: "25B12HS311", grade: "A+", credits: 3 },
  { name: "Operating Systems and Systems Programming Lab", code: "15B17CI472", grade: "B+", credits: 4 },
  { name: "Information Security Lab", code: "15B17CI576", grade: "A", credits: 1 },
];

export default function Semester() {
  return (
    <div className="page">
      <div className="semester-header">
        <h3>2025ODDSEM</h3>
      </div>


      <div className="subject-grid">
        {subjects.map((s) => (
          <div className="subject-card" key={s.code}>
            <div className="subject-header">
              <h4>{s.name}</h4>
              <span className={`grade ${s.grade.replace("+", "plus")}`}>
                {s.grade}
              </span>
            </div>

            <div className="subject-meta">
              <span className="code">{s.code}</span>
              <span className="credits">{s.credits} Credits</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
