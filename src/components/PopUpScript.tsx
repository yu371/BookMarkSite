import "./ PopUp.css";
type Props = {
  isPopUp: boolean;
  SetPopUp: React.Dispatch<React.SetStateAction<boolean>>;
};

export const PopUp = ({ SetPopUp }: Props) => {
  return (
    <div className="popup-overlay" onClick={() => SetPopUp(false)}>
      <div
        className="popup-content"
        onClick={(e) => e.stopPropagation()} // overlayクリックで閉じるようにするため
      >
        <button className="popup-close" onClick={() => SetPopUp(false)}>
          ×
        </button>
        <p>タイトル,URLのどちらかが未記入です。</p>
        <p>または、タイトルが重複しています。</p>
      </div>
    </div>
  );
};
