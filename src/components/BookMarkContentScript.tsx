import { useState } from "react";
import type { BookMarktype } from "./LocalStrageScript";
import "./BookMarkContent.css";
import { SaveData } from "./LocalStrageScript";
import { BookMarkAdd } from "./BookMarkAddScript";
type Props = {
  title: string;
  url: string;
  dic: BookMarktype[];
  setDic: React.Dispatch<React.SetStateAction<BookMarktype[]>>;
  SetContextBool: React.Dispatch<React.SetStateAction<boolean>>;
};

export const BookMarkContent = ({
  title,
  url,
  dic,
  setDic,
  SetContextBool,
}: Props) => {
  const [newdict, setNewdict] = useState<BookMarktype[]>(dic);
  const RemoveBookMark = () => {
    const newdic = dic.filter((e) => e.title !== title);
    SaveData(newdic);
    SetContextBool(false);
  };
  const EditBookMarks = () => {
    const newdic = dic.filter((e) => e.title !== title);
    setNewdict(newdic);
    setEditView(true);
  };
  const [isEditView, setEditView] = useState(false);
  return (
    <div className="bookmark-content">
      <div className="bookmark-buttons">
        <button onClick={() => SetContextBool(false)}>BACK</button>
      </div>
      <div className="bookmark-header">
        <span className="bookmark-title">{title}</span>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="bookmark-link"
        >
          Visit
        </a>
      </div>
      <div>
        {isEditView === false && (
          <p className="edit-bookmarks">
            <button onClick={RemoveBookMark}>削除</button>
            <button onClick={EditBookMarks}>編集</button>
          </p>
        )}
        {isEditView && (
          <BookMarkAdd
            dic={newdict}
            setDic={setNewdict}
            isPopUpVisible={isEditView}
            setPopUpVisible={setEditView}
          />
        )}
      </div>
    </div>
  );
};
