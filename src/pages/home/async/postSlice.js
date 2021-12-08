import { createSlice , createAsyncThunk} from '@reduxjs/toolkit'

const loadPost = createAsyncThunk(
    'posts/loadPost',
    
)

const postSlice = createSlice({
    name: 'posts',
    initialState: {
        list: [],
        status:null
    },
    extraReducers : {

    }
})