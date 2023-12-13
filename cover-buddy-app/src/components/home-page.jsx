import React from "react";
import {BrowserRoute, Routes, Route} from 'react-router-dom';
export default function HomePage(){
    return(
        <BrowserRoute>
            <Routes>
                <Route path=""/>
            </Routes>
        </BrowserRoute>
    )
}