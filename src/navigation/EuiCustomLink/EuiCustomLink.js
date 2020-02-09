import React from "react";
import { useHistory } from "react-router";
import { EuiLink } from "@elastic/eui";

import "./EuiCustomLink.css";

// Original source: https://github.com/elastic/eui/blob/master/wiki/react-router.md
// Most of the content of this files are from https://github.com/elastic/eui/pull/1976.
const isModifiedEvent = event =>
  !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);

const isLeftClickEvent = event => event.button === 0;

export default function EuiCustomLink({ to, selected, ...props }) {
  // This is the key!
  const history = useHistory();

  function onClick(event) {
    if (event.defaultPrevented) {
      return;
    }

    // If target prop is set (e.g. to "_blank"), let browser handle link.
    if (event.target.getAttribute("target")) {
      return;
    }

    if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
      return;
    }

    // Prevent regular link behavior, which causes a browser refresh.
    event.preventDefault();

    // Push the route to the history.
    history.push(to);
  }
  
  return <EuiLink {...props} href={to} onClick={onClick} />;
}
