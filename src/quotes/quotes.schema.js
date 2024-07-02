import mongoose from "mongoose";

const QuoteSchema = new mongoose.Schema({
    quote:{
        type: String,
        required: true,
    }
});

export const QuoteModel = mongoose.model('Quote', QuoteSchema);

