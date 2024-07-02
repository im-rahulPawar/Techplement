import express from "express";
const router = express.Router();
import QuoteController from "./quotes.controller.js";

const quoteController = new QuoteController();

// Create new quote.
router.post("/", (req, res)=>{
    quoteController.createQuote(req, res)
});

// Delete a quote by id
router.delete("/:quoteId", (req, res)=>{ 
    quoteController.deleteQuote(req, res)
});

// Update the quote 
router.put("/:quoteId", (req, res)=>{
    quoteController.updateQuote(req, res)
});

// Get all quotes
router.get("/", (req, res)=>{
    quoteController.getAll(req, res)
})


export default router;