import React from 'react';
import './carousel.scss';

function LowerQuote({ currentIndex }) {

    const slides = [
        {
            upperText: "creative",
            color: "red",
            title: "Creative Processes",
            image: "THIS IS AN IMAGE",
            quote: "This is a special quote and is very meaningful indeed that it will influence people.",
            quoteName: "Becky from Technical Services"
        },
        {
            upperText: "roadmap",
            color: "blue",
            title: "Roadmap Management",
            image: "THIS IS AN IMAGE",
            quote: "This is a special quote and is very meaningful indeed that it will influence people.",
            quoteName: "Becky from Technical Services"
        },
        {
            upperText: "content",
            color: "yellow",
            title: "Content Calendar",
            image: "THIS IS AN IMAGE",
            quote: "This is a special quote and is very meaningful indeed that it will influence people.",
            quoteName: "Becky from Technical Services"
        },
        {
            upperText: "HR",
            color: "purple",
            title: "HR Management",
            image: "THIS IS AN IMAGE",
            quote: "This is a special quote and is very meaningful indeed that it will influence people.",
            quoteName: "Becky from Technical Services"
        },
        {
            upperText: "work",
            color: "green",
            title: "Project Management",
            image: "THIS IS AN IMAGE",
            quote: "This is a special quote and is very meaningful indeed that it will influence people.",
            quoteName: "Becky from Technical Services"
        },
        {
            upperText: "team",
            color: "red",
            title: "Team Tasks",
            image: "THIS IS AN IMAGE",
            quote: "This is a special quote and is very meaningful indeed that it will influence people.",
            quoteName: "Becky from Technical Services"
        },
        {
            upperText: "orders",
            color: "cyan",
            title: "Orders",
            image: "THIS IS AN IMAGE",
            quote: "This is a special quote and is very meaningful indeed that it will influence people.",
            quoteName: "Becky from Technical Services"
        },
        {
            upperText: "sales",
            color: "orange",
            title: "Sales Pipeline",
            image: "THIS IS AN IMAGE",
            quote: "This is a special quote and is very meaningful indeed that it will influence people.",
            quoteName: "Becky from Technical Services"
        },
        {
            upperText: "sprints",
            color: "blue",
            title: "Agile Sprints",
            image: "THIS IS AN IMAGE",
            quote: "This is a special quote and is very meaningful indeed that it will influence people.",
            quoteName: "Becky from Technical Services"
        },
    ];
    return (
        <div>
            {slides.map(({ quote, quoteName }, i) => i === currentIndex ? (
                <div className="lower-quote-container">
                    <div>{quote}</div>
                    <div>{quoteName}</div>
                </div>
            ) : null)}
        </div>
    )
}

export default LowerQuote;