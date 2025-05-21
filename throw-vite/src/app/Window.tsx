import "./Window.css";
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
            <div className="button">
              <img id="input-search" src="" alt="" />
            </div>
            <input type="text" id="search-text" placeholder="Search" />
          </div>
        </div>
      </div>
      <div className="all-main">
        <div className="sidebar">
          <div className="items">
            <a>
              <img src="" alt="" />
              <span></span>
            </a>
          </div>
        </div>
        <div className="notepad">
          <div className="note-element">
            <div id="note">
              <input type="text" id="title" name="title" placeholder="Title"/>
              <textarea
                name="takenote"
                id="takenote"
                placeholder="Take a note..."
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
