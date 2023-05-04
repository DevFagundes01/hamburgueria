import React from "react";

import { Button } from "./styles";
function myButton({children, isGrey}) {
    console.log(isGrey)
    return <Button isGrey={isGrey}>{children}</Button>
}

export default myButton