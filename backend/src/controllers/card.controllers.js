const Card = require("../models/card.models");

const cardControllers = {
  GET: async (request, response) => {
    try {
      const cards = await Card.find();
      response.status(200).json({ cards: cards });
    } catch (error) {
      console.error(error);
      response.status(500).json({ "Error Fetching Cards: ": error });
    }
  },

  GET_SINGLE_CARD: async (request, response) => {
    try {
      const { id } = request.params;
      console.log("Card id : ", id);

      const card = await Card.findById(id);

      if (!card)
        return response
          .status(404)
          .json({ Error: "No Card found with the given ID" });

      response.status(200).json({ Card: card });
    } catch (error) {
      console.error(error);
      response.status(500).json({ "Error Fetching This Card: ": error });
    }
  },

  POST: async (request, response) => {
    try {
      const { title, description } = request.body;
      if (!title || !description)
        return response
          .status(400)
          .json({ "Error: ": "Some Fields are missing" });

      const newCard = await Card.create({
        title: title,
        description: description,
      });

      response
        .status(201)
        .json({ message: "New Card Created Successfully.", newCard: newCard });
    } catch (error) {
      console.error(error);
      response.status(500).json({ "Error Creating New Card: ": error });
    }
  },
};

module.exports = cardControllers;
