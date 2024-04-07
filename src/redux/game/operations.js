import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchResults = createAsyncThunk(
	"game/fetchAll",
	async (_, thunkAPI) => {
		try {
			const { data } = await axios.get("/score/get");

			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	},
);

export const updateResult = createAsyncThunk(
	"game/addGame",
	async ({ score }, thunkAPI) => {
		try {
			const { data } = await axios.put("/score/update", {
				score,
			});
			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	},
);
