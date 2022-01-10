import styled from "styled-components";

import { Fab, Grid, TableCell, TableSortLabel } from "@mui/material";

const BackgroundHome = styled.div`
  && {
    background: rgb(168, 40, 39);
    width: calc(100vw - (100vw - 100%));
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

const BackgroundSearch = styled(Grid)`
  && {
    width: calc(100vw - (100vw - 100%));
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

const BoxHome = styled.div`
  && {
    color: #fff;
    height: 300px;
  }
`;

const BoxSearch = styled.div`
  && {
    width: 800px;
  }
`;

const Status = styled.div`
  && {
    width: 30px;
    border-radius: 50%;
    height: 30px;
    background: ${props => props.background || "#ddd"};
    color: #fff;
    font-weight: 500;
    text-align: center;
    line-height: 30px;
  }
`;

const TableHeaderCell = styled(TableCell)`
  && {
    color: rgb(208, 57, 57);
  }
`;

const CityName = styled.span`
  && {
    color: rgb(208, 57, 57);
  }
`;

const TableRowCell = styled(TableCell)`
  && {
    cursor: pointer;
  }
`;

const ButtonUp = styled(Fab)`
  && {
    color: #fff;
    background: #a82827;
    &:hover { 
      background: #952323
    }
  }
`;

const TableSortLabelResult = styled(TableSortLabel)`
  && {
    color: rgb(208, 57, 57);
  }
`;

export { BackgroundHome, BackgroundSearch, BoxHome, BoxSearch, Status, TableHeaderCell, CityName, TableRowCell, ButtonUp, TableSortLabelResult };
