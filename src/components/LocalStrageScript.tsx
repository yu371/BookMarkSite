export type BookMarktype = {
  title: string;
  url: string;
  x: number;
  y: number;
};

export const SaveData = (bookMarks: BookMarktype[]) => {
  localStorage.setItem("BM", JSON.stringify(bookMarks));
};
export const GetData = () => {
  const data = localStorage.getItem("BM") as string;
  if (!data) return [];
  try {
    return JSON.parse(data) as BookMarktype[];
  } catch {
    return [];
  }
};
// import type { FolderType } from "./BooksAreaScript";
// export const SaveFolderData = (bookMarks: FolderType[]) => {
//   localStorage.setItem("FR", JSON.stringify(bookMarks));
// };
// export const GetFolderData = () => {
//   const data = localStorage.getItem("FR") as string;
//   if (!data) return [];
//   try {
//     return JSON.parse(data) as FolderType[];
//   } catch {
//     return [];
//   }
// };
