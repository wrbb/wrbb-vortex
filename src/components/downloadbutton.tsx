import { IconButton } from "theme-ui";
import { theme } from "../theme";
import { Link } from "react-router-dom";
import { useState } from "react";

interface DownloadButtonProps {
  url: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ url }) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  return (
    <Link
      to={url}
      download
      target="_blank"
      onMouseDown={() => setIsClicked(true)}
      onMouseUp={() => setIsClicked(false)}
      onMouseLeave={() => setIsClicked(false)}
    >
      <IconButton
        aria-label="download show recording"
        sx={{
          backgroundColor: theme.colors?.primary,
          borderRadius: "50%",
          height: [36, 24],
          width: [36, 24],
          cursor: "pointer",
          ":hover": {
            backgroundColor: isClicked
              ? theme.colors?.muted
              : theme.colors?.primary,
            opacity: isClicked ? "100%" : "90%",
          },
        }}
      >
        <svg
          fill={`${theme.colors?.background}`}
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          id="download"
        >
          <path d="M20,15a1,1,0,0,0-1,1V20a.22.22,0,0,1-.15.05H5.14C5.06,20,5,20,5,20V16a1,1,0,0,0-2,0v4a2.08,2.08,0,0,0,2.14,2H18.86A2.08,2.08,0,0,0,21,20V16A1,1,0,0,0,20,15Z"></path>
          <path d="M11.29,16.71a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l4-4a1,1,0,0,0-1.42-1.42L13,13.59V3a1,1,0,0,0-2,0V13.59l-2.29-2.3a1,1,0,1,0-1.42,1.42Z"></path>
        </svg>
      </IconButton>
    </Link>
  );
};

export default DownloadButton;
