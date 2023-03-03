import React, { useContext } from "react";
import ThemeContext from "./Themecontext";
export default function Toolbar() {
    const theme = useContext(ThemeContext);
    return (
        <div>
            <button style={{ background: theme === 'dark' ? '#333' : '#fff' }}>
                Toggle Theme
            </button>
        </div>
    )
}