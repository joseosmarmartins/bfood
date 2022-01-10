import React from "react";

import { Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";

import { Status, TableHeaderCell, TableRowCell, TableSortLabelResult } from "../../style/styles";

import money from "../../utils/money";

const SearchResult = ({ restaurants = [], handleClick, total, page, handleChangePage, sort, order, handleSort }) => {

  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell size="small">
                <TableSortLabelResult
                  active={sort === "rating"}
                  direction={order}
                  onClick={() => handleSort("rating")}
                >
                  Nota
                </TableSortLabelResult>
              </TableHeaderCell>
              <TableHeaderCell size="small">Nome</TableHeaderCell>
              <TableHeaderCell size="small">
                <TableSortLabelResult
                  active={sort === "cost"}
                  direction={order}
                  onClick={() => handleSort("cost")}
                >
                  Custo médio para 2
                </TableSortLabelResult>
              </TableHeaderCell>
              <TableHeaderCell size="small">Tipo de cozinha</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {restaurants.map((row, index) => (
              <TableRow key={`item-${index}`}>
                <TableCell size="small">
                  <Status background={`#${row.restaurant.user_rating.rating_color}`} >
                    {row.restaurant.user_rating.aggregate_rating}
                  </Status>
                </TableCell>
                <TableRowCell size="small" onClick={() => handleClick(row)}>
                  {row.restaurant.name}
                </TableRowCell>
                <TableRowCell size="small" onClick={() => handleClick(row)}>
                  {money(row.restaurant.average_cost_for_two, row.restaurant.currency)}
                </TableRowCell>
                <TableRowCell size="small" onClick={() => handleClick(row)}>
                  {row.restaurant.cuisines}
                </TableRowCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        labelDisplayedRows={({ from, to, count }) => `${from}-${to} de ${count}`}
        component="div"
        count={total}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={10}
        rowsPerPageOptions={[]}
      />
    </>
  );
};

export default SearchResult;