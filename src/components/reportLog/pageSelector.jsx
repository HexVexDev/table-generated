import * as React from "react";
import { useEffect, useState } from "react";

import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#041A39",
    },
  },
});

export default function PageSelector({
  currentPage,
  data,
  itemsPerPage,
  onChange,
}) {
  const [pages, setPages] = useState(Math.ceil(data.length / itemsPerPage));
  const [selectedPage, setSelectedPage] = useState(currentPage);

  useEffect(() => {
    setPages(Math.ceil(data.length / itemsPerPage));
    setSelectedPage(1);
  }, [data, itemsPerPage]);

  function handleChange(e, value) {
    onChange(value);
    setSelectedPage(value);
  }

  if (data.length === 0) {
    return null;
  }

  return (
    <ThemeProvider theme={customTheme}>
      <div style={{ display: "flex", alignSelf: "end" }}>
        <Stack spacing={2}>
          <Pagination
            page={selectedPage}
            count={pages}
            defaultPage={1}
            size={"small"}
            shape="rounded"
            onChange={handleChange}
            color="primary"
            sx={{
              "& li:first-of-type > button::after": {
                content: '"prev"',
                visibility: currentPage === 1 ? "hidden" : "visible",
                paddingLeft: "15px",
              },
              "& li:last-of-type > button::before": {
                content: '"next"',
                visibility: currentPage === pages ? "hidden" : "visible",
                paddingRight: "15px",
              },
            }}
            renderItem={(item) => (
              <PaginationItem
                {...item}
                sx={{
                  "&.Mui-selected": {
                    color: "white",
                    WebkitTextFillColor: "white",
                  },
                  opacity: item.selected ? 1 : 0.5,
                  visibility:
                    (currentPage === 1 && item.type === "previous") ||
                    (currentPage === pages &&
                      item.type === "next" &&
                      currentPage === pages)
                      ? "hidden"
                      : "visible",
                  "& li:first-of-type::after": {
                    content: '"prev"',
                  },
                }}
              ></PaginationItem>
            )}
          />
        </Stack>
      </div>
    </ThemeProvider>
  );
}
