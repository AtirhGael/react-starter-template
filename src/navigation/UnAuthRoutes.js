import React from "react";
import { Route, Routes } from "react-router-dom";
import frontendUrl from "../urls/frontendUrl";

function UnAuthRoutes() {
    return (
        <Routes>
            <Route path={frontendUrl.HOME.SELF} element={<div>hello</div>} />
        </Routes>
    );
}

export default UnAuthRoutes;