import { IconButton } from "theme-ui";
import { theme } from "../theme";
import useAuthenticatedAction from "../hooks/useAuthenticatedAction";

interface PlayButtonProps {
  url: string;
}

const PlayButton: React.FC<PlayButtonProps> = ({ url }) => {
  const handlePlay = () => window.open(url, "_blank");
  const onClick = useAuthenticatedAction(handlePlay);

  return (
    <IconButton
      aria-label="play show recording"
      sx={{
        backgroundColor: theme.colors?.primary,
        borderRadius: "50%",
        height: [36, 24],
        width: [36, 24],
        padding: ["8px", "6px"],
        paddingLeft: ["10px", "7px"],
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        ":hover": {
          backgroundColor: theme.colors?.primary,
          opacity: "90%",
        },
        ":active": {
          backgroundColor: theme.colors?.muted,
        },
      }}
      onClick={onClick}
    >
      <svg
        fill={`${theme.colors?.background}`}
        height="24px"
        width="24px"
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 155.908 155.908"
      >
        <g>
          <path
            d="M143.878,58.015L46.02,6.45c-9.816-5.172-21.348-4.838-30.848,0.894C5.672,13.076,0,23.122,0,34.218v87.473
		c0,11.096,5.672,21.142,15.172,26.874c5.018,3.028,10.601,4.549,16.2,4.549c5.001,0,10.016-1.215,14.647-3.655l97.858-51.566
		c7.42-3.91,12.03-11.55,12.03-19.938S151.298,61.926,143.878,58.015z M135.486,81.968l-97.858,51.566
		c-4.249,2.239-9.045,2.101-13.157-0.381C20.358,130.671,18,126.493,18,121.69V34.218c0-4.803,2.358-8.981,6.471-11.462
		c2.169-1.309,4.529-1.966,6.898-1.966c2.122,0,4.251,0.527,6.259,1.585l97.858,51.565c2.186,1.152,2.422,3.191,2.422,4.014
		S137.672,80.816,135.486,81.968z"
          />
        </g>
      </svg>
    </IconButton>
  );
};

export default PlayButton;
