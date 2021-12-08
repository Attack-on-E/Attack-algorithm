import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface BlockState {
  idCount: number; // ブロックの個数をかんり
  blocks: { id: number; title: string }[]; // storeに保存するtaskの一覧
  selectedBlock: { id: number; title: string }; // どのブロックが選択されているか
}

const initialState: BlockState = {
  idCount: 0,
  blocks: [{ id: 0, title: "右に移動" }],
  selectedBlock: { id: 0, title: "" },
};

export const blockState = createSlice({
  name: "block",
  initialState,
  reducers: {
    // blockの追加
    addBlock: (state, action) => {
      state.idCount++;
      const newBlock = {
        id: state.idCount,
        title: action.payload,
      };
      state.blocks = [...state.blocks, newBlock];
    },
  },
});

export const { addBlock };

export default userSlice;
