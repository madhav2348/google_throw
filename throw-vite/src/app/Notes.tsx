import "./Notes.css";
export default function Notes(title: string | "", note: string) {
  return (
    <div className="allresult">
      <div className="result">
        <div className="title">{title ?? ""}</div>
        <div className="note">{note ?? "Empty"}</div>
      </div>
    </div>
  );
}
