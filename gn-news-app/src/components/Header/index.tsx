import { Popup } from "components/Popup";
import { ToggleMainViewButton } from "components/ToggleMainViewButton";
import PsychologyAltIcon from "@mui/icons-material/PsychologyAlt";
import "./styles.scss";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="headerContainer">
      <Popup
        buttonComponent={
          <PsychologyAltIcon
            sx={{
              color: "wheat",
              width: 44,
              height: 44,
              "@media (max-width:480px)": {
                width: 32,
                height: 32,
              },
            }}
          />
        }
      >
        <p>
          Największą trudność sprawiły mi na pewno testy, ponieważ nie używałem
          ich zawodowo chyba od ponad półtora roku i okazuje się, że dużo rzeczy
          musiałem sobie przypomnieć. A skoro paru rzeczy nie pamiętałem, to
          oznacza, że to był odpowiedni czas na powtórkę materiału :D.
          <br />
          <br />
          Kolejnym wyzawniem był Redux, ponieważ nigdy wcześniej go nie
          używałem, a akurat od jakiegoś czasu zabierałem się za jego naukę :D.
          I dlatego też, że mogłem w końcu nauczyć się Reduxa, zaliczam ten
          element też jako największą frajdę.
        </p>
      </Popup>

      <h1 className="title">
        <Link className="linkTitle" to="/">
          GN NEWS
        </Link>
      </h1>

      <ToggleMainViewButton />
    </header>
  );
};
