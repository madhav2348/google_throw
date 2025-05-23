import "./Window.css";
import archive from "../assets/archive.svg";
import bell from "../assets/bell.svg";
import bin from "../assets/bin.svg";
import bulb from "../assets/bulb.svg";
import draw from "../assets/draw.svg";
import image from "../assets/image.svg";
import search from "../assets/search.svg";
import check from "../assets/check.svg";
import Notes from "./Notes";
import { useEffect, useRef, useState } from "react";
export default function Window() {
  const noteTitle = useRef<HTMLTextAreaElement>(null);
  const noteInput = useRef<HTMLDivElement>(null);
  const noteText = useRef<HTMLTextAreaElement>(null);

  const [noteCollapse, setNoteCollapse] = useState(false);
  const [sideCollaps, setsideCollapse] = useState(false);
  const [title, setTitle] = useState("");
  const [text, setStateText] = useState("");
  const [allnote, setAllNote] = useState<
    { heading?: string; content: string }[]
  >([
    { heading: "Shopping", content: "Buy milk and bread" },
    { heading: "", content: "  " },
    { content: "Quick idea: Start blog" },
  ]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        noteInput.current &&
        !noteInput.current.contains(event.target as Node)
      ) {
        if (title || text) {
       
          setAllNote((note) => [...note, { heading: title, content: text }]);
          // console.log(allnote);
        }
        setTitle("");
        setStateText("");
        setNoteCollapse(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [title, text]);

  return (
    <>
      <div className="nav">
        <div className="navigation">
          <div className="logo">
            <div
              className="sidebar"
              onClick={() => {
                setsideCollapse(!sideCollaps);
              }}
            >
              <svg focusable="false" viewBox="0 0 24 24">
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
              </svg>
            </div>
            <img src="" alt="" id="img-logo" />
            <div className="text-logo">Throw</div>
          </div>
        </div>
        <div className="searchbar">
          <div className="search">
            <img id="input-search" src={search} alt="" />
            <input type="text" id="search-text" placeholder="Search" />
          </div>
        </div>
      </div>
      <div className="all-main">
        <div className="sidebaritems">
          <div className="items">
            <a>
              <img src={bulb} alt="" />
              {!sideCollaps === false ? <span>Notes</span> : ""}
            </a>
          </div>
          <div className="items">
            <a>
              <img src={bell} alt="" />
              {!sideCollaps === false ? <span>Reminder</span> : ""}
            </a>
          </div>
          <div className="items">
            <a>
              <img src={draw} alt="" />
              {!sideCollaps === false ? <span>Edit labels</span> : ""}
            </a>
          </div>
          <div className="items">
            <a>
              <img src={archive} alt="" />
              {!sideCollaps === false ? <span>Archieve</span> : ""}
            </a>
          </div>
          <div className="items">
            <a>
              <img src={bin} alt="" />
              {!sideCollaps === false ? <span>Bin</span> : ""}
            </a>
          </div>
        </div>
        <div>
          <div className="notepad">
            <div className="note-element">
              <div
                ref={noteInput}
                id="note"
                
              >
                {noteCollapse === true ? (
                  <textarea
                    value={title}
                    ref={noteTitle}
                    id="title"
                    name="title"
                    placeholder="Title"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                ) : (
                  ""
                )}
                <div className="text-and-check">


                <textarea
                  value={text}
                  ref={noteText}
                  name="takenote"
                  id="takenote"
                  placeholder="Take a note..."
                  onChange={(e) => setStateText(e.target.value)}
                 onClick={() => setNoteCollapse(true)}
                />
                <div className="check"><img  src={check} alt="" /></div>
                </div>
              </div>
            </div>
          </div>
          <div className="mainnote">
            <span>PINNED</span>
            <div className="allnotes">
              {allnote.map((e, key) => (
                <Notes key={key} title={e.heading} note={e.content} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
