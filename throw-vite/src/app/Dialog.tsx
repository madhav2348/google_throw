import { useEffect, useRef, useState } from "react";
interface Params {
  title?: string;
  content?: string;
}

export default function Dialog({ title, content }: Params) {
  const noteBoxRef = useRef<HTMLDivElement>(null);
  const [notetitle, setTitle] = useState("");
  const [notetext, setStateText] = useState("");

  useEffect(() => {
    setTitle(title || "");
  }, [title]);
  useEffect(() => {
    setStateText(content || "");
  }, [content]);

  //   useEffect(() => {
  //     const mouseTap = (event: MouseEvent) => {
  //       if (
  //         noteBoxRef.current &&
  //         !noteBoxRef.current.contains(event?.target as Node)
  //       )
  //         if (notetitle || notetext) {
  //           // save data somewhere
  //         }
  //     };
  //     document.addEventListener("click", mouseTap);
  //     return () => {
  //       document.removeEventListener("click", mouseTap);
  //     };
  //   }, [notetitle, notetext]);

  return (
    <dialog>
      <div className="allresult">
        <div className="result" ref={noteBoxRef}>
          <textarea
            value={notetitle}
            id="title"
            name="title"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            value={notetext}
            name="takenote"
            id="takenote"
            placeholder="Take a note..."
            onChange={(e) => setStateText(e.target.value)}
          />
        </div>
      </div>
    </dialog>
  );
}
