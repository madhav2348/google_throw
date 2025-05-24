import "./Window.css";
import archive from "../assets/archive.svg";
import bell from "../assets/bell.svg";
import bin from "../assets/bin.svg";
import bulb from "../assets/bulb.svg";
import draw from "../assets/draw.svg";
import search from "../assets/search.svg";

import Notes from "./Notes";

import { useState } from "react";

import type { Param } from "./notetype";


export default function Window({ note }: Param) {
  const [sideCollaps, setsideCollapse] = useState(false);
  //   const [title, setTitle] = useState("");
  //   const [text, setStateText] = useState("");
  //   const [allnote, setAllNote] = useState<
  //     { heading?: string; content: string }[]
  //   >([]);

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
          <div className="mainnote">
            <span>PINNED</span>
            <div className="allnotes">
              {note.map((e, key) => (
                <Notes key={key} title={e.title} note={e.content} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
