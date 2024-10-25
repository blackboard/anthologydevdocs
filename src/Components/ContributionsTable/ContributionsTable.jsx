import { DataGrid, useGridApiRef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import React, { useState } from "react";
import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useColorMode } from "@docusaurus/theme-common";
import PropTypes from "prop-types";

const StyledPaper = styled(Paper)(({ theme, colorMode }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "1rem",
  boxShadow:
    colorMode === "light"
      ? "0px 2px 10px 0px #0000001a"
      : "0px 2px 10px 0px #000000",
  backgroundColor: "var(--ifm-background-color)",
  color: "var(--ifm-font-color-base)",
  colorScheme: "var(--ifm-color-scheme)",
}));

const StyledTextField = styled(TextField)(({ theme, colorMode }) => ({
  width: 300,
  background:
    "var(--ifm-navbar-search-input-background-color) no-repeat .75rem center/1rem 1rem",
  border: "none",
  borderRadius: "2rem",
  "& .MuiInputBase-input": {
    color: "var(--ifm-font-color-base)",
  },
  "& .MuiFormLabel-root": {
    color: "var(--ifm-color-emphasis-500)",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor:
        colorMode === "light"
          ? "var(--ifm-color-gray-200)"
          : "var(--ifm-color-gray-800)",
    },
    "&:hover fieldset": {
      borderColor: "var(--ifm-color-primary)",
    },
    "&.Mui-focused fieldset, &.MuiInputBase-root.Mui-focused fieldset": {
      borderColor: "var(--ifm-color-primary)",
    },
  },
  "& .MuiInputBase-input::placeholder": {
    color: "var(--ifm-color-gray-200)",
  },
  "& .MuiInputBase-root": {
    border: "none",
    borderRadius: "2rem",
  },
}));

const StyledDataGrid = styled(DataGrid)(({}) => ({
  backgroundColor: "var(--ifm-background-color)",
  color: "var(--ifm-font-color-base)",
  colorScheme: "var(--ifm-color-scheme)",
  "& .MuiDataGrid-container--top [role=row], & .MuiDataGrid-container--bottom [role=row]":
    {
      backgroundColor: "inherit",
    },
  "& .MuiTablePagination-displayedRows": {
    margin: 0,
    color: "var(--ifm-font-color-base)",
  },
  "& .MuiSvgIcon-root": {
    color: "var(--ifm-font-color-base)",
  },
  "& .Mui-disabled": {
    "& .MuiSvgIcon-root": {
      backgroundColor: "transparent",
      color: "var(--ifm-color-gray-600)",
    },
  },
  // Media queries for responsive design
  "@media (max-width: 420px)": {
    maxWidth: "18rem",
  },
  "@media (min-width: 421px) and (max-width: 520px)": {
    maxWidth: "24rem",
  },
  "@media (min-width: 521px) and (max-width: 720px)": {
    maxWidth: "30rem",
  },
  "@media (min-width: 721px) and (max-width: 1024px)": {
    maxWidth: "42rem",
  },
  "@media (min-width: 1025px) and (max-width: 1400px)": {
    maxWidth: "60rem",
  },
}));

const columns = [
  {
    field: "name",
    headerName: "Name",
    minWidth: 100,
    width: 400,
    maxWidth: 600,
    renderCell: RenderLink,
    valueGetter: (value, row) =>
      row.name == null || row.html_url == null
        ? null
        : { name: row.name, html_url: row.html_url },
    type: "custom",
  },
  {
    field: "description",
    headerName: "Description",
    minWidth: 100,
    width: 400,
    maxWidth: 600,
    type: "string",
  },
  {
    field: "language",
    headerName: "Language",
    minWidth: 40,
    width: 180,
    maxWidth: 250,
    type: "string",
  },
  {
    field: "product_type",
    headerName: "Product",
    minWidth: 40,
    width: 180,
    maxWidth: 250,
    type: "string",
  },
];

const autosizeOptions = {
  includeOutliers: true,
};

const paginationModel = { page: 0, pageSize: 20 };

function RenderLink(params) {
  return <a href={params.value.html_url}>{params.value.name}</a>;
}

function ContributionsTable({ contributionDataRows = {} }) {
  const [searchQuery, setSearchQuery] = useState("");
  const apiRef = useGridApiRef();
  const colorMode = useColorMode();

  const filteredRows = contributionDataRows.filter((row) =>
    row.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  console.log(filteredRows);

  return (
    <StyledPaper
      elevation={1}
      sx={{ height: "100%", width: "100%" }}
      colorMode={colorMode.colorMode}
    >
      <StyledTextField
        label="Search"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        colorMode={colorMode.colorMode}
      />
      <StyledDataGrid
        apiRef={apiRef}
        rows={filteredRows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        getEstimatedRowHeight={() => 100}
        getRowHeight={() => "auto"}
        autosizeOptions={autosizeOptions}
        sx={{ border: 0 }}
      />
    </StyledPaper>
  );
}

ContributionsTable.propTypes = {
  contributionDataRows: PropTypes.array,
};

export default ContributionsTable;
