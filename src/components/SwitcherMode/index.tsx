import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useDispatch } from "react-redux";
import { setTheme } from "@redux/slices/themeReducer";
import { THEMES } from "@utils/constatns";
import { MaterialUISwitch } from "./style";
import { useEffect, useState } from "react";

export const SwitcherMode = () => {
    const [checked, setChecked] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        const modeTheme = localStorage.getItem("modeTheme");
        setChecked(modeTheme === THEMES.DARK ? true : false);
    }, []);

    const toggleMode = (e) => {
        console.log(e.target.checked, "target");
        dispatch(setTheme(e.target.checked));
        setChecked(e.target.checked);
        if (e.target.checked) {
            localStorage.setItem("modeTheme", THEMES.DARK);
        } else {
            localStorage.setItem("modeTheme", THEMES.LIGHT);
        }
    };
    return (
        <FormGroup>
            <FormControlLabel
                control={
                    <MaterialUISwitch
                        sx={{ m: 1 }}
                        onChange={toggleMode}
                        checked={checked}
                        defaultChecked
                    />
                }
                label={""}
            />
        </FormGroup>
    );
};
