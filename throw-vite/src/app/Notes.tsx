import "./Notes.css";

interface Params {
  title?: string;
  note: string | undefined;
}

export default function Notes({ title, note }: Params) {
  return (
    <div className="allresult">
      <div className="result">
        {title ?? <div className="title">{title}</div>}
        {(note === undefined && title === undefined) || (!title?.trim() && !note?.trim() )? (
          <div className="note">Empty</div>
        ) : (
          <div className="note">{note}</div>
        )}
      </div>
    </div>
  );
}
