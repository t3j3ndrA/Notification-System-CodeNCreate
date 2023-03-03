import React from 'react';
import { ThemeContext } from './ThemeContext';

const Toggle = () => {
    const { theme, setTheme } = React.useContext(ThemeContext);

    return (
        <div className="transition duration-500 ease-in-out rounded-full p-2">
            {theme === 'dark' ? (
                <button
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="rounded-full bg-white p-2 cursor-pointer"
                ><img src="https://img.icons8.com/material-outlined/24/undefined/sun--v1.png"/></button>
            ) : (
                    <button
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="rounded-full bg-white p-2 cursor-pointer"
                    ><img src="https://img.icons8.com/ios-glyphs/24/undefined/moon-symbol.png"/></button>
                )}
        </div>
    );
};

export default Toggle;