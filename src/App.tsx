import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SwipeIcon from "@mui/icons-material/Swipe";
import { Paper } from "@mui/material";
import { useState } from "react";
import Discovering from "./components/Discovering";
import My from "./components/My";

export default function SimpleBottomNavigation() {
  const [value, setValue] = useState<"discovering" | "my">("discovering");

  return (
    <Box>
      {value === "discovering" ? <Discovering /> : <My />}
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            value="discovering"
            label="发现"
            icon={<SwipeIcon />}
          />
          <BottomNavigationAction
            value="my"
            label="我的"
            icon={<AccountCircleIcon />}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
