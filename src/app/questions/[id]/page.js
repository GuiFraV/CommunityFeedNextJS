"use client"
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from '@/app/components/Card';

const QuestionDetailContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin: 5%;
`;

function QuestionDetail({ params }) {
    const page  = 3

    const [loading, setLoading] = useState(true);
    const [question, setQuestion] = useState([]);

    useEffect(() => {

        async function fetchData(){
            const data = await fetch(`https://api.stackexchange.com/2.2/questions/${params.id}?site=stackoverflow`);
            const result = await data.json();
        
            console.log(result)
            if(result){
                setQuestion(result.items[0]);
                setLoading(false)
            }
        }


        params.id && fetchData();

    },[params.id])


    return (
        <QuestionDetailContainer>
            <h2>Question: {params.id}</h2>
            {loading ? (
                <span>Loading ... </span>
            ) : (
                <Card 
                    title={question.title}
                    views={question.view_count}
                    answers={question.answer_count}
                />
            )}
        </QuestionDetailContainer>
    );
}

export default QuestionDetail;