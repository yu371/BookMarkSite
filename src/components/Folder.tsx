// import React, { useState } from "react";
// import { SaveData, SaveFolderData } from "./LocalStrageScript";
// import type { FolderType } from "./BooksAreaScript";
// import "./BookMarkAddScript.css";
// import { PopUp } from "./PopUpScript";
// type Props = {
//   dic: FolderType[];
//   setDic: React.Dispatch<React.SetStateAction<FolderType[]>>;
//   isPopUpVisible: boolean;
//   setPopUpVisible: React.Dispatch<React.SetStateAction<boolean>>;
// };
// export const FolderAdd = ({
//   dic,
//   setDic,
//   isPopUpVisible,
//   setPopUpVisible,
// }: Props) => {
//   const [title, setTitle] = useState("");
//   const [isPopUp, setPupUp] = useState(false);
//   let contextMessage = "";
//   contextMessage = "以下の問題があります\n";
//   contextMessage += "・名前の重複\n";
//   contextMessage += "・title または url の未記入\n";

//   const titleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setTitle(e.target.value);
//   };
//   const setdictionary = () => {
//     if (title !== "" && !dic.some((e) => e.title === title)) {
//       const bookMarks = [...dic, { title, x: 200, y: 0, context: [] }];
//       setDic(bookMarks);
//       setTitle("");
//       SaveFolderData(bookMarks);
//       setPopUpVisible(false);
//     } else {
//       setPupUp(true);
//     }
//   };
//   const togglePopUp = () => {
//     setPopUpVisible(!isPopUpVisible);
//   };

//   return (
//     <div className="popup-container">
//       {isPopUpVisible && (
//         <div className="popup">
//           <h3>ブックマーク追加</h3>
//           <input
//             type="text"
//             value={title}
//             onChange={titleChange}
//             placeholder="タイトル"
//           />
//           <div className="buttons">
//             <button onClick={setdictionary}>追加</button>
//             <button onClick={togglePopUp}>閉じる</button>
//             {isPopUp && (
//               <PopUp
//                 context={contextMessage}
//                 isPopUp={isPopUp}
//                 SetPopUp={setPupUp}
//               ></PopUp>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };
