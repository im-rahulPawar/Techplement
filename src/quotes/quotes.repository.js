import mongoose from "mongoose"
import { QuoteModel } from "./quotes.schema.js"


export default class QuoteRepository{

    async createQuote(quoteData){
        const quote = new QuoteModel(quoteData);
        const savedQuote = await quote.save();
        return savedQuote;
    }

    async deleteQuote(quoteId){
        const deletedQuote = await QuoteModel.findByIdAndDelete(quoteId);
        return deletedQuote;
    }

    async updateQuote(quoteId, text){
        const oldQuote = await QuoteModel.findById(quoteId);
        const updatedQuote = text;
        oldQuote.quote = text;
        await oldQuote.save();
        return oldQuote;
    }

    async getAll(){
        return await QuoteModel.find();
    }

}