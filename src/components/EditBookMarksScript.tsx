import { SaveData, type BookMarktype } from "./LocalStrageScript";
import { BookMarkAdd } from "./BookMarkAddScript";
import { useEffect, useState } from "react";
import "./EditBookMarks.css";

type Props = {
  dic: BookMarktype[];
  setDic: React.Dispatch<React.SetStateAction<BookMarktype[]>>;
  title: string;
  SetContextBool: React.Dispatch<React.SetStateAction<boolean>>;
};
export const EditBookMarks = ({
  dic,
  setDic,
  title,
  SetContextBool,
}: Props) => {
  const [isEdit, setEdit] = useState(false);
  const [newdict, setNewdict] = useState<BookMarktype[]>(dic);
  const RemoveBookMark = () => {
    const newdic = dic.filter((e) => e.title !== title);
    SaveData(newdic);
  };
  const EditBookMarks = () => {
    const newdic = dic.filter((e) => e.title !== title);
    setNewdict(newdic);
    SaveData(newdic);
    setEdit(true);
  };
  return (
    <div className="edit-bookmarks">
      {isEdit === false && (
        <p>
          <button onClick={RemoveBookMark}>削除</button>
          <button onClick={EditBookMarks}>編集</button>
        </p>
      )}
      {isEdit && (
        <BookMarkAdd
          dic={newdict}
          setDic={setNewdict}
          isPopUpVisible={isEdit}
          setPopUpVisible={setEdit}
        />
      )}
    </div>
  );
};
