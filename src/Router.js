import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ReactComponent as LoadingIcon } from "./assets/loadingIcon.svg";

const HandoutDetails = React.lazy(() => import("./components/HandoutDetails"));
const ProjectDetails = React.lazy(() => import("./components/ProjectDetails"));


function Router() {
  return (
    <div>
      <Suspense fallback={
          <div className="flex justify-center mt-60">
            <LoadingIcon className="suspense-loading-icon" />
          </div>
        }>
        <Routes>
         <Route path="/netflix-details" element={<HandoutDetails />} />
         <Route path="/project-details" element={<ProjectDetails />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default Router;