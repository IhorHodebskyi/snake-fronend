import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchGame = createAsyncThunk(
	"game/fetchAll",
	async (_, thunkAPI) => {
		try {
			const { data } = await axios.get("/score/get");
			console.log(data);
			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	},
);

export const addGame = createAsyncThunk(
	"game/addGame",
	async ({ score }, thunkAPI) => {
		try {
			const { data } = await axios.post("/score/get", {
				score,
			});
			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	},
);
