import Select, { StylesConfig } from "react-select";
import { theme } from "../theme";
import { Box, Text } from "theme-ui";

export type Option = {
  label: string;
  value: number;
};

interface SearchProps {
  options: Option[];
  onChange: (newValue: number) => void;
  loading: boolean;
  error: boolean;
}

const selectStyle: StylesConfig = {
  control: (base) => ({
    ...base,
    border: `1px solid ${theme.colors?.primary}`,
    backgroundColor: `${theme.colors?.background}`,
    width: "256px",
    padding: 8,
  }),
  indicatorSeparator: (base) => ({
    ...base,
    backgroundColor: `${theme.colors?.primary}`,
    marginLeft: 8,
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: `${theme.colors?.primary}`,
    marginLeft: 8,
  }),
  indicatorsContainer: (base) => ({
    ...base,
    cursor: "pointer",
  }),
  option: (base, state) => ({
    ...base,
    color: "black",
    backgroundColor: `${
      state.isFocused ? theme.colors?.accent : theme.colors?.background
    }`,
    padding: 8,
    cursor: "pointer",
    borderBottom: `.25px solid ${theme.colors?.accent}`,
  }),
  menu: (base) => ({
    ...base,
    border: `1px solid ${theme.colors?.primary}`,
    borderTop: 0,
    backgroundColor: `${theme.colors?.background}`,
  }),
  placeholder: (base) => ({
    ...base,
    opacity: "50%",
    cursor: "text",
  }),
  noOptionsMessage: (base) => ({
    ...base,
    padding: 8,
    fontWeight: 800,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  }),
  loadingIndicator: (base) => ({
    ...base,
    color: `${theme.colors?.primary}`,
    paddingRight: 4,
  }),
  loadingMessage: (base) => ({
    ...base,
    padding: 8,
    fontWeight: 800,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  }),
};

const Search: React.FC<SearchProps> = ({
  options,
  onChange,
  loading,
  error,
}) => {
  if (error) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          px: [24, 3],
          textAlign: "center",
        }}
      >
        <Text variant="heading2">something went wrong.</Text>
        <Text>
          check your internet connection and try again. if this issue persists,
          contact the tech team.
        </Text>
      </Box>
    );
  }

  return (
    <Select
      placeholder="search for a show"
      noOptionsMessage={(s) => `no results for ${s.inputValue}`}
      options={options}
      styles={selectStyle}
      onChange={(val: Option | unknown) => {
        const { value } = val as Option;
        onChange(value);
      }}
      unstyled
      isLoading={loading}
      loadingMessage={(s) => `loading results for ${s.inputValue}`}
      autoFocus={true}
    />
  );
};

export default Search;
