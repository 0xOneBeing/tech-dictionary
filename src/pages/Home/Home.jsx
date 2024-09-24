import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { AutoComplete, ConfigProvider, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { terms } from "../../data/mock_db/term";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm) {
      navigate(`/dictionary/${searchTerm.toLowerCase()}`);
    }
  };

  useEffect(() => {
    const filteredSuggestions = terms
      .filter((termObj) =>
        termObj.term.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .map((termObj) => termObj.term);
    setSuggestions(filteredSuggestions);
  }, [searchTerm]);

  return (
    <>
      <Helmet>
        <title>Tech Dictionary</title>
      </Helmet>
      <div className="p-6 h-full">
        <h1 className="text-3xl font-bold text-center">Tech Dictionary</h1>
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
                className="p-2 border-2 border-[var(--primary-color)] rounded-full w-full text-lg hover:border-2 focus:border-[var(--primary-color)] px-30"
                type="text"
                placeholder="Search Dictionary"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onPressEnter={handleSearch}
                autoFocus
                allowClear
                required
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
      </div>
    </>
  );
}

export default Home;
