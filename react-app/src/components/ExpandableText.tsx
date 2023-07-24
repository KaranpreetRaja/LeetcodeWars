import { useState } from "react";

type Props = {
  text: string;
};

export default function ExpandableText({ text }: Props) {
  let [displayText, setDisplayText] = useState({
    expanded: false,
    text: text.substring(0, 100) + "...",
  });

  const onClick = () => {
    setDisplayText({
      expanded: true,
      text: text,
    });
  };

  return (
    <div>
      <p>{displayText.text}</p>
      {!displayText.expanded && <button onClick={onClick}>Expand</button>}
    </div>
  );
}
