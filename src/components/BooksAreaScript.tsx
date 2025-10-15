import { useEffect, useState } from "react";
import { GetData, SaveData } from "./LocalStrageScript";
import type { BookMarktype } from "./LocalStrageScript";
import { BookMarkAdd } from "./BookMarkAddScript";
import "./BooksArea.css";

type FolderType = {
  id: string;
  title: string;
  x: number;
  y: number;
  width: number;
  height: number;
  contents: BookMarktype[];
};

export const BooksArea = () => {
  const [isPopUpVisible, setPopUpVisible] = useState(false);
  const [dic, setDic] = useState<BookMarktype[]>(() => GetData());
  const [isContextView, setContextView] = useState(false);
  const [isDestroy, setDestroy] = useState(false);
  const [context, setContext] = useState<BookMarktype>({
    title: "",
    url: "",
    x: 0,
    y: 0,
  });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const data = GetData();
    if (data.length > 0) {
      setDic(data);
    }
  }, [isContextView, isPopUpVisible]);
  useEffect(() => {}, [position]);
  const togglePopUp = () => {
    setPopUpVisible(!isPopUpVisible);
  };
  const toggleContext = (title: string, url: string, x: number, y: number) => {
    setContextView(true);
    console.log("toggleContext");
    setContext({ title: title, url: url, x, y });
  };

  return (
    <div className="books-area">
      <div className="shortcut-info">Ctrl + 左クリックでリンクに飛ぶ</div>
      <ul className="add-button">
        {!isPopUpVisible && !isContextView && (
          <div>
            <button onClick={togglePopUp}>追加</button>
          </div>
        )}
      </ul>
      <div className="circle">
        {dic.map((d, index) => (
          <div
            key={index}
            onClick={(e) => {
              if (e.button === 0 && e.ctrlKey) {
                window.open(d.url, "_blank");
              }
            }}
            onMouseDown={(e) => {
              setDragging(true);
              setOffset({
                x: e.clientX - (d.x || 0),
                y: e.clientY - (d.y || 0),
              });
            }}
            onMouseMove={(e) => {
              if (dragging) {
                const newX = e.clientX - offset.x;
                const newY = e.clientY - offset.y;
                const newDic = [...dic];
                newDic[index] = { ...d, x: newX, y: newY };
                setDic(newDic);
              }
            }}
            onMouseUp={() => {
              setDragging(false);
              SaveData(dic);
            }}
            style={{
              position: "absolute",
              left: d.x || 0,
              top: d.y || 0,
              width: 80,
              height: 80,
              backgroundImage: d.url
                ? `url(https://www.google.com/s2/favicons?domain=${
                    new URL(d.url).hostname
                  }&sz=64)`
                : "none",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: 6,
              cursor: "grab",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
            }}
          >
            <span
              style={{
                fontSize: 12,
                textAlign: "center",
                color: "#000",
                backgroundColor: "rgba(255,255,255,0.7)",
                width: "100%",
                borderRadius: 2,
                padding: "2px 0",
              }}
            >
              {d.title}
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation(); // 親のクリックを防ぐ
                const newDic = dic.filter((_, i) => i !== index);
                setDic(newDic);
                SaveData(newDic);
              }}
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: 20,
                height: 20,
                border: "none",
                padding: 0, // 追加：paddingリセット
                margin: 0, // 追加：marginリセット
                lineHeight: 1, // 追加：行の高さリセット
                borderRadius: "50%",
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                color: "white",
                fontWeight: "bold",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 14,
              }}
            >
              ×
            </button>
          </div>
        ))}
      </div>

      <BookMarkAdd
        dic={dic}
        setDic={setDic}
        isPopUpVisible={isPopUpVisible}
        setPopUpVisible={setPopUpVisible}
      />
    </div>
  );
};
