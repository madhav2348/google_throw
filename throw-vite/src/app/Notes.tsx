import "./Notes.css";

interface params {
  title?: string;
  note: string | "Empty";
}

const Notes: React.FC<params> = ({ title, note }) => {
  return (
    <div className="allresult">
      <div className="result">
        <div className="title">{title ?? ""}</div>
        <div className="note">{note ?? "Empty"}</div>
      </div>
    </div>
  );
};

export default Notes;
