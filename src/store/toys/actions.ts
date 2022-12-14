import { createAsyncThunk } from "@reduxjs/toolkit";
import { service } from "api";

const getInitialToyList = createAsyncThunk('toys/getInitialToyList', async () => {
    const response = await service.getToys()
    return response;
});

export const toysAsyncActions = {getInitialToyList }