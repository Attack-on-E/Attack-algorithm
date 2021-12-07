import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";


interface blockState {
    idCount: number; // ブロックの個数をかんり
    blocks:{id:number; title:string;} // storeに保存するtaskの一覧
    selectedBlock: {id:number; title:string;} // どのブロックが選択されているか
}

export type blockState = {
    
}