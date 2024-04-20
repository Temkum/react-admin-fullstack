import React, { useState } from 'react';
import { Box, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import Header from '../../components/Header';
import { useGetTransactionsQuery } from '../../state/api';
import DataGridCustomToolbar from '../../components/DataGridCustomToolbar';

const Transactions = () => {
  const theme = useTheme();
  //   set values for backend
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(20);
  const [sort, setSort] = useState({});
  const [search, setSearch] = useState('');
  const [searchInput, setSearchInput] = useState('');

  const columns = [
    { field: '_id', headerName: 'ID', flex: 1 },
    { field: 'userId', headerName: 'User ID', flex: 1 },
    { field: 'createdAt', headerName: 'Created At', flex: 1 },
    {
      field: 'products',
      headerName: 'Number of products',
      flex: 0.4,
      sortable: false,
      renderCell: (params) => params.value.length,
    },
    {
      field: 'cost',
      headerName: 'Cost',
      flex: 1,
      renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
  ];

  const { data, isLoading } = useGetTransactionsQuery({
    page,
    pageSize,
    sort: JSON.stringify(sort),
    search,
  });

  return (
    <Box padding="1rem">
      <Header title={'Transactions'} subtitle={'Entire list of Transactions'} />
      <Box
        sx={{
          '& .MuiDataGrid-root': { border: 'none' },
          '$.MuiDataGrid-cell': { borderBottom: 'none' },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderBottom: 'none',
          },
          '& .MuiDataGrid-virtualScroller': {
            backgroundColor: theme.palette.primary.light,
          },
          '& .MuiDataGrid-footerContainer': {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderTop: 'none',
          },
          '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
            color: `${theme.palette.secondary[200]} !important`,
          },
        }}
      >
        <DataGrid
          loading={isLoading || !data}
          getRowId={(row) => row._id}
          rows={(data && data.transactions) || []}
          columns={columns}
          rowCount={(data && data.total) || 0}
          rowsPerPageOptions={[20, 50, 100]}
          pagination
          page={page}
          pageSize={pageSize}
          paginationMode="server"
          sortingMode="server"
          onPaginationModelChange={(newPage) => setPage(newPage)}
          // onPageSizeChange={(newPageSize) => setPageSize(pageSize)}
          onSortModelChange={(newSortModel) => setSort(...newSortModel)}
          components={{ Toolbar: DataGridCustomToolbar }}
          componentProps={{
            toolbar: { searchInput, setSearchInput, setSearch },
          }}
        />
      </Box>
    </Box>
  );
};

export default Transactions;
