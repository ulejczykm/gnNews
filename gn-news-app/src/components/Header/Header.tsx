import { Popup } from "components/Popup/Popup";
import PsychologyAltIcon from "@mui/icons-material/PsychologyAlt";
import "./styles.scss";
import { ToggleMainViewButton } from "components/ToggleMainViewButton";

export const Header = () => {
  return (
    <header className="headerContainer">
      <Popup
        buttonComponent={
          <PsychologyAltIcon sx={{ color: "wheat", width: 44, height: 44 }} />
        }
      >
        test
      </Popup>

      <span className="title">GN NEWS</span>

      <ToggleMainViewButton />
    </header>
  );
};
