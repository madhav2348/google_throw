import "./Notes.css";

interface Params {
  title?: string;
  note?: string ;
}

export default function Notes({ title, note }: Params) {
  return (
    <div className="allresult">
      <div className="result">
        {title?.trim() ?'': <div className="title">{title}</div>}
        {  note?.trim() ? (
          <div className="note">Empty</div>
        ) : (
          <div className="note">{note}</div>
        )}
      </div>
    </div>
  );
}
