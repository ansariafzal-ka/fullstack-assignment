import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

const Content = ({ searchQuery }) => {
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/v1/card");
        console.log("Fetched Data: ", response.data.cards);

        setCards(response.data.cards);
        setFilteredCards(response.data.cards);
      } catch (error) {
        console.error("Error Fetching Cards: ", error);
      }
    };
    fetchCards();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      setFilteredCards(
        cards.filter((card) =>
          card.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilteredCards(cards);
    }
  }, [searchQuery, cards]);

  return (
    <section className="w-full p-5 lg:p-24 grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-8">
      {filteredCards.length > 0 ? (
        filteredCards.map((card) => (
          <Card
            key={card._id}
            title={card.title}
            description={card.description}
          />
        ))
      ) : (
        <p className="font-medium">No cards found</p>
      )}
    </section>
  );
};

export default Content;
