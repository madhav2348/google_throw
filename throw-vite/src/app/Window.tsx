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
export default function Window() {
  return (
    <>
      <div className="nav">
        <div className="navigation">
          <div className="logo">
            <div className="sidebar">
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
              <span>Notes</span>
            </a>
          </div>
          <div className="items">
            <a>
              <img src={bell} alt="" />
              <span>Reminder</span>
            </a>
          </div>
          <div className="items">
            <a>
              <img src={draw} alt="" />
              <span>Edit labels</span>
            </a>
          </div>
          <div className="items">
            <a>
              <img src={archive} alt="" />
              <span>Archieve</span>
            </a>
          </div>
          <div className="items">
            <a>
              <img src={bin} alt="" />
              <span>Bin</span>
            </a>
          </div>
        </div>
        <div>
          <div className="notepad">
            <div className="note-element">
              <div id="note">
                <textarea id="title" name="title" placeholder="Title" />
                <textarea
                  name="takenote"
                  id="takenote"
                  placeholder="Take a note..."
                />
              </div>
            </div>
          </div>
          <div className="mainnote">
            <span>PINNED</span>
            <div className="allnotes">
              {/* <Notes {...{ note: "Empty" }} />
              <Notes {...{ note: "Empty" }} />
              <Notes {...{ note: "Empty" }} />
              <Notes {...{ note: "Empty" }} />
              <Notes {...{ note: "Empty" }} />
              <Notes {...{ note: "Empty" }} /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
