import { IconButton } from "theme-ui";
import { theme } from "../theme";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";

interface CopyButtonProps {
  url: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ url }) => {
  const [checked, setChecked] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const onCopy = () => {
    setChecked(true);
    setTimeout(() => {
      setChecked(false);
    }, 2000);
  };

  return (
    <CopyToClipboard text={url} onCopy={onCopy}>
      <IconButton
        aria-label="copy show recording link"
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
        onMouseDown={() => setIsClicked(true)}
        onMouseUp={() => setIsClicked(false)}
        onMouseLeave={() => setIsClicked(false)}
      >
        {checked ? (
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill=""
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20.6097 5.20743C21.0475 5.54416 21.1294 6.17201 20.7926 6.60976L10.7926 19.6098C10.6172 19.8378 10.352 19.9793 10.0648 19.9979C9.77765 20.0166 9.49637 19.9106 9.29289 19.7072L4.29289 14.7072C3.90237 14.3166 3.90237 13.6835 4.29289 13.2929C4.68342 12.9024 5.31658 12.9024 5.70711 13.2929L9.90178 17.4876L19.2074 5.39034C19.5441 4.95258 20.172 4.87069 20.6097 5.20743Z"
              fill={`${theme.colors?.background}`}
            />
          </svg>
        ) : (
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 15C4.06812 15 3.60218 15 3.23463 14.8478C2.74458 14.6448 2.35523 14.2554 2.15224 13.7654C2 13.3978 2 12.9319 2 12V5.2C2 4.0799 2 3.51984 2.21799 3.09202C2.40973 2.71569 2.71569 2.40973 3.09202 2.21799C3.51984 2 4.0799 2 5.2 2H12C12.9319 2 13.3978 2 13.7654 2.15224C14.2554 2.35523 14.6448 2.74458 14.8478 3.23463C15 3.60218 15 4.06812 15 5M12.2 22H18.8C19.9201 22 20.4802 22 20.908 21.782C21.2843 21.5903 21.5903 21.2843 21.782 20.908C22 20.4802 22 19.9201 22 18.8V12.2C22 11.0799 22 10.5198 21.782 10.092C21.5903 9.71569 21.2843 9.40973 20.908 9.21799C20.4802 9 19.9201 9 18.8 9H12.2C11.0799 9 10.5198 9 10.092 9.21799C9.71569 9.40973 9.40973 9.71569 9.21799 10.092C9 10.5198 9 11.0799 9 12.2V18.8C9 19.9201 9 20.4802 9.21799 20.908C9.40973 21.2843 9.71569 21.5903 10.092 21.782C10.5198 22 11.0799 22 12.2 22Z"
              stroke={`${theme.colors?.background}`}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </IconButton>
    </CopyToClipboard>
  );
};

export default CopyButton;
