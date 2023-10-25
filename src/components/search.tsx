import Select, { StylesConfig } from "react-select";
import { theme } from "../theme";

export type Option = {
  label: string;
  value: number;
};

interface SearchProps {
  options: Option[];
  onChange: (newValue: number) => void;
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
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: `${theme.colors?.primary}`,
    marginLeft: 8,
  }),
  option: (base, state) => ({
    ...base,
    color: "black",
    backgroundColor: `${
      state.isFocused ? theme.colors?.accent : theme.colors?.background
    }`,
    padding: 8,
    // TODO: Figure out why the option turns blue on click
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
  }),
};

const Search: React.FC<SearchProps> = ({ options, onChange }) => {
  return (
    <Select
      placeholder="search for a show"
      noOptionsMessage={() => "no shows found"}
      options={options}
      styles={selectStyle}
      onChange={(val: Option | unknown) => {
        const { value } = val as Option;
        onChange(value);
      }}
      unstyled
    />
  );
};

export default Search;
