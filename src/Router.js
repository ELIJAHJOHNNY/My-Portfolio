import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ReactComponent as LoadingIcon } from "./assets/loadingIcon.svg";

const HandoutDetails = React.lazy(() => import("./components/HandoutDetails"));


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
        </Routes>
      </Suspense>
    </div>
  )
}

export default Router;