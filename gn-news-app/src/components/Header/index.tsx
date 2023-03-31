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
        <p>test</p>
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
