"use client"
import { useState, useEffect } from 'react';
import styled from "styled-components";
import Link from 'next/link'
import Card from '../components/Card';
import Pagination from '../components/Pagination';

const CardLink = styled.a`
    text-decoration: none;
`;

const QuestionsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin: 5%;
`;

function Questions(){

    const [loading, setLoading] = useState(true);
    const [questions, setQuestions] = useState([]);
    const [hasMore, setHasMore] = useState(false)

    const page = 3;

    useEffect(() => {
        async function fetchData(){
            const data = await fetch('https://api.stackexchange.com/2.2/questions?order=desc&sort=hot&tagged=reactjs&site=stackoverflow');
            // const data = await fetch(`https://api.stackexchange.com/2.2/questions?${page ? `page=${page}&` : ''}order=desc&sort=hot&tagged=reactjs&site`);
            const result = await data.json();

            if(result){
                setQuestions(result.items);
                setHasMore(result.has_more)
                setLoading(false)
            }
        }

        fetchData();
    },[])


    return (
        <QuestionsContainer>
            <h2>Questions</h2>
            {loading ? (
                <span>Loading...</span>
            ) : ( 
                <div>
                    {questions.map((question) => (
                        <Link 
                            key={question.question_id}
                            href={`/questions/${question.question_id}`}
                            passHref
                        >
        
                        <CardLink>
                            <Card 
                                key={question.question_id}
                                title={question.title}
                                views={question.view_count}
                                answers={question.answer_count}
                            />
                        </CardLink>
                        </Link>
                    ))}
                    <Pagination currentPage={parseInt(page) || 1} hasMore={hasMore} />
                </div>
            )}
        </QuestionsContainer>
    )
}

export default Questions;