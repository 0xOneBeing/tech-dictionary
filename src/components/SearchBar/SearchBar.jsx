import {
  // useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import {
  // AutoComplete,
  ConfigProvider,
  Input,
} from "antd";
import { SearchOutlined } from "@ant-design/icons";
// import { terms } from "../../assets/data/mock_db/term";

export default function SearchBar({
  className,
  autoFocus,
  // required
}) {
  const [searchTerm, setSearchTerm] = useState("");
  //   const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm) {
      navigate(`/dictionary/${searchTerm.toLowerCase()}`);
    }
  };

  //   useEffect(() => {
  //     const filteredSuggestions = terms
  //       .filter((termObj) =>
  //         termObj.term.toLowerCase().includes(searchTerm.toLowerCase())
  //       )
  //       .map((termObj) => termObj.term);
  //     setSuggestions(filteredSuggestions);
  //   }, [searchTerm]);

  return (
    <>
      <div className="mt-8 flex justify-center items-center">
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "var(primary-color)",
            },
          }}
        >
          <form>
            <Input
              className={`${className} p-2 border-2 border-[var(--primary-color)] rounded-full w-full text-lg hover:border-2 focus:border-[var(--primary-color)] px-30`}
              type="text"
              placeholder="Search Dictionary"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onPressEnter={handleSearch}
              autoFocus={autoFocus ? autoFocus : true}
              allowClear
              //   required={required ? required : true}
              size="large"
              suffix={
                <SearchOutlined
                  className="text-[var(--primary-color)] text-2xl font-bold cursor-pointer"
                  onClick={handleSearch}
                />
              }
            />
          </form>
        </ConfigProvider>
      </div>
    </>
  );
}
