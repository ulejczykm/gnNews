import { useSelector, useDispatch } from "react-redux";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import ViewModule from "@mui/icons-material/ViewModule";
import List from "@mui/icons-material/List";
import { RootState } from "store/store";
import {
  GRID,
  LIST,
  setView,
  NewsViewType,
} from "../../store/slices/newsViewSlice";

const buttonIconStyle = {
  bgcolor: "wheat",
  width: 44,
  height: 44,
  borderRadius: "20%",
  padding: "6px",
  "@media (max-width:480px)": {
    width: 32,
    height: 32,
  },
};

const buttonStyle = {
  "@media (max-width:480px)": {
    padding: "4px",
    margin: "6px",
  },
};

export const ToggleMainViewButton = () => {
  const { view } = useSelector((state: RootState) => state.newsView);
  const dispatch = useDispatch();

  const onClickHandle = (buttonType: NewsViewType) => {
    const newView = buttonType === GRID ? GRID : LIST;
    dispatch(setView(newView));
  };

  return (
    <ToggleButtonGroup
      value={view === GRID ? "right" : "left"}
      exclusive
      aria-label="text alignment"
    >
      <ToggleButton
        onClick={() => onClickHandle(LIST)}
        value="left"
        aria-label="center aligned"
        sx={buttonStyle}
      >
        <List sx={buttonIconStyle} />
      </ToggleButton>

      <ToggleButton
        onClick={() => onClickHandle(GRID)}
        value="right"
        aria-label="center aligned"
        sx={buttonStyle}
      >
        <ViewModule sx={buttonIconStyle} />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};
