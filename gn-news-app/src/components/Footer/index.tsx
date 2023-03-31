import "./styles.scss";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import type { DateTimeFormatOptions } from "intl";
import { RootState } from "store/store";

const timeOptions: DateTimeFormatOptions = {
  hour12: false,
  hour: "2-digit",
  minute: "2-digit",
};

export const Footer = () => {
  const [time, setTime] = useState<Date>(new Date());
  const numberOfArticles = useSelector(
    (state: RootState) => state.articlesNumber
  );

  // mógłbym również ustawić interwał co sekundę, ale ustawianie stanu co sekundę nie jest wydajne
  useEffect(() => {
    const timerID = setInterval(() => {
      setTime(new Date());
    }, 60000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  return (
    <footer className="footerContainer">
      <span>Ilość artykułow na stronie: {numberOfArticles.articlesNumber}</span>
      <span>{time.toLocaleTimeString([], timeOptions)}</span>
    </footer>
  );
};
