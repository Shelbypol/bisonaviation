import React from "react";
import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader";

const Headers = () => {

        let width = window.innerWidth;
        if (width > 768) {
            return (
                  <DesktopHeader />
            );
        } else {
            return (
               <MobileHeader />

            );
        }
};

export default Headers