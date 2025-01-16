import React, { useEffect, useState } from "react";
import filteredContext from "./filteredContext";

export default function filteredProvider({ children }) {
  return <filteredContext.provider>{children}</filteredContext.provider>;
}
