import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'
import { ticketService } from 'Services';



const initialState = {
    loading:false,
    data:null,
    err:null
};


export const  listTicketApi = createAsyncThunk(
    "listUser/listTicketApi",
    async (maLichChieu,{rejectWithValue}) =>{
        try{
           return await ticketService.getListTicketByShowId(maLichChieu);
        } 
        catch(err){
            rejectWithValue(err.response.data);
        }
    }
)

const listTicket = createSlice({
    name:"listTicket",
    initialState,
    reducers:{},
    extraReducers:{
        [listTicketApi.pending]: (state) =>{
            state.loading=true;
        },
        [listTicketApi.fulfilled]:(state,action) =>{
            state.loading=false;
            state.data =action.payload.data;
            state.err=null
        },
        [listTicketApi.rejected]:(state,action)=>{
            state.loading=false;
            state.data=null;
            state.err=action.payload;
        }, 
    },
});

export const {}= listTicket.actions;
export default listTicket.reducer;