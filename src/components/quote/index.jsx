import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './quote.module.css';
import {fetchRandomQuote} from "../../redux/quote/slice";

const Quote = () => {
    const dispatch = useDispatch();
    const { quote, author, status, error } = useSelector((state) => state.quote);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchRandomQuote());
        }
    }, [status, dispatch]);

    const handleNewQuote = () => {
        dispatch(fetchRandomQuote());
    };

    return (
        <div className={styles.container}>
            { 
                status === 'loading'
                    ? <p>Loading...</p>
                    : (
                        <>
                            <p className={styles.quote}>"{quote}"</p>
                            <p className={styles.author}>— {author}</p>
                        </>
                    )
            }
            <button className={styles.button} onClick={handleNewQuote}>
                New Quote
            </button>
        </div>
    );
};

export default Quote;