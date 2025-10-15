import React, { useState } from "react";
import { SaveData } from "./LocalStrageScript";
import type { BookMarktype } from "./LocalStrageScript";
import "./BookMarkAddScript.css";
import { PopUp } from "./PopUpScript";
type Props = {
  dic: BookMarktype[];
  setDic: React.Dispatch<React.SetStateAction<BookMarktype[]>>;
  isPopUpVisible: boolean;
  setPopUpVisible: React.Dispatch<React.SetStateAction<boolean>>;
};
export const BookMarkAdd = ({
  dic,
  setDic,
  isPopUpVisible,
  setPopUpVisible,
}: Props) => {
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [isPopUp, setPupUp] = useState(false);

  const urlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };
  const titleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const setdictionary = () => {
    if (title !== "" && url !== "" && !dic.some((e) => e.title === title)) {
      const bookMarks = [...dic, { title, url, x: 400, y: 400 }];
      setDic(bookMarks);
      SaveData(bookMarks);
      setTitle("");
      setUrl("");
      setPopUpVisible(false);
    } else {
      setPupUp(true);
    }
  };
  const togglePopUp = () => {
    setPopUpVisible(!isPopUpVisible);
  };

  return (
    <div className="popup-container">
      {isPopUpVisible && (
        <div className="popup">
          <h3>ブックマークを追加</h3>
          <input
            type="text"
            value={title}
            onChange={titleChange}
            placeholder="タイトル"
          />
          <input
            type="text"
            value={url}
            onChange={urlChange}
            placeholder="URL"
          />
          <div className="buttons">
            <button onClick={setdictionary}>追加</button>
            <button onClick={togglePopUp}>閉じる</button>
            {isPopUp && (
              <PopUp
                isPopUp={isPopUp}
                SetPopUp={setPupUp}
              ></PopUp>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
