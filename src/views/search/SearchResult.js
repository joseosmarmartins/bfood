import React from "react";

import { Table, TableBody, TableContainer, TableHead, TablePagination, TableRow, Tooltip } from "@mui/material";

import { Status, TableHeaderCell, TableRowCell } from "../../style/styles";

const SearchResult = ({ restaurants = [], handleClick, total, page, handleChangePage }) => {

  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell size="small">Nota</TableHeaderCell>
              <TableHeaderCell size="small">Nome</TableHeaderCell>
              <TableHeaderCell size="small">Custo médio para 2</TableHeaderCell>
              <TableHeaderCell size="small">Tipo de cozinha</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {restaurants.map((row, index) => (
              <TableRow key={`item-${index}`}>
                <Tooltip title={row.restaurant.user_rating.aggregate_rating}>
                  <TableRowCell size="small" onClick={() => handleClick(row)}>
                    <Status background={`#${row.restaurant.user_rating.rating_color}`} />
                  </TableRowCell>
                </Tooltip>
                <TableRowCell size="small" onClick={() => handleClick(row)}>
                  {row.restaurant.name}
                </TableRowCell>
                <TableRowCell size="small" onClick={() => handleClick(row)}>
                  {`${row.restaurant.currency} ${row.restaurant.average_cost_for_two},00`}
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