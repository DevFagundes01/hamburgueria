import React from "react";

import { Button } from "./styles";
function myButton({children, isGrey}) {
    console.log(isGrey)
    return <Button isBlack={isGrey}>{children}</Button>
}

export default myButton