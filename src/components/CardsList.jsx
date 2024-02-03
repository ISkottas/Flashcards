import { useState } from "react";
import Card from "./Card";
import './CardsList.css';

const tableQuestions = [
    {
        id: 1,
        question: 'What language is react based on?',
        answer: 'Javascript'
    },
    {
        id: 2,
        question: 'What are the building blocks of React apps?',
        answer: 'Components'
    },
    {
        id: 3,
        question: "What's the name of the syntax we use to describe a UI in React?",
        answer: 'JSX'
    },
    {
        id: 4,
        question: 'How to pass data from child to parent component?',
        answer: 'Props'
    },
    {
        id: 5,
        question: 'How to give components memory?',
        answer: 'useState hook'
    },
    {
        id: 6,
        question: 'What do we call an input element that is completely synchronised with state?',
        answer: 'Controlled element'
    }
];

function CardsList() {
    const [selectedId,setSelectedId] = useState(null);

    function clicked(id){
        setSelectedId(id !== selectedId ? id : null)
    }

    return (
        <div className="cardsList">
            {tableQuestions.map( (value) => (
                <div className='box'>
                    <Card 
                      value={value.id === selectedId? value.answer : value.question} 
                      selectedId={selectedId} 
                      onClick={() =>clicked(value.id)}
                      id={value.id} 
                      key={value.id}
                    />
                </div>
            ))}
        </div>
    )
}

export default CardsList