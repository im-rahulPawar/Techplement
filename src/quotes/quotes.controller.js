import QuoteRepository from "./quotes.repository.js";

export default class QuoteController{
    constructor(){
        this.quoteRepository = new QuoteRepository();
    }

    createQuote = async(req, res) => {
        const quote = req.body;
        try{
            const quoteData = quote;
            const savedQuote = await this.quoteRepository.createQuote(quoteData);
            res.status(201).json(savedQuote);
        }catch(error){
            console.log(error.message);
            res.status(500).send({error: "Failed to create new Quote"});
        }
    }

    deleteQuote = async(req, res) => {
        const { quoteId } = req.params;
        try{
            const deletedQuote = await this.quoteRepository.deleteQuote(quoteId);
            if(!deletedQuote){
                return res.status(404).json({ message: "Quote not found" });
            }
            return res.status(200).json({ message: "Quote deleted" });

        }catch(error){
            console.log(error.message);
            return res.status(500).json({ error: "Failed to delete a quote" });
        }
    }

    updateQuote = async(req, res) => {
        const { quoteId } = req.params;
        const { text } = req.body;
        try{
            const updatedQuote = await this.quoteRepository.updateQuote(quoteId, text);
            if(!updatedQuote){
                res.status(404).json("Quote not found");
            }else{
                res.status(200).json(updatedQuote);
            } 
        }catch(error){
            console.log(error.message);
            res.status(500).json({ error : "Failed to update a quote"});
        }
    }

    getAll = async(req, res) => {
        try{
            const quotes = await this.quoteRepository.getAll();
            res.status(200).send(quotes);
        }catch(error){
            console.log(error.message);
            res.status(404).json("Quotes not found");
        }
    }
}