import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { changeTheme } from '../features/theme/themeSlice'

export default function ThemeBtn() {
    const theme = useSelector(state => state.theme.themeMode);
    const dispatch = useDispatch();


    const onChangebnt = (e) => {
        const darkModeStatus = e.currentTarget.checked;
        if (darkModeStatus) {
            dispatch(changeTheme("dark"));

        } else {
            dispatch(changeTheme("light"));

        }

    }
    useEffect(() => {
        document.querySelector('html').classList.remove("light", "dark");
        document.querySelector('html').classList.add(theme);

    }, [theme])




    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input
                value=""
                type="checkbox"
                onChange={onChangebnt}
                checked={theme === "dark"}
                className="sr-only peer"

            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900">Dark Mode</span>
        </label>
    );
}