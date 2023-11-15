import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/phoneBookReduser';
import { selectFilter } from 'redux/selectors';
import { Input } from '@chakra-ui/react'
export default function Filter() {
    const dispatch = useDispatch()
    const filter = useSelector(selectFilter)
    const handleFilterTerm = filter => {
        dispatch(setFilter(filter));
    };

    const handleChange = e => {
        handleFilterTerm(e.target.value);
    };

    return (
        <Input
            m={2}
            size="md"
            width="240px"
            variant="filled"
            type="text"
            value={filter}
            onChange={handleChange}
            placeholder="Search contacts by name"
        />
    );
}