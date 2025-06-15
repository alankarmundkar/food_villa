import {act} from 'react';
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import Body from '../Body'
import MOCK_DATA from '../__mocks__/mockResListData.json'
import { BrowserRouter } from 'react-router-dom'

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(MOCK_DATA);  
        }
    })
})

it('should render the body component', async()=>{
    await act(async()=>{
        render(<BrowserRouter><Body/></BrowserRouter>)
    })

    const restaurantCardBeforeSearch = screen.getAllByTestId('resCard')
    expect(restaurantCardBeforeSearch.length).toBe(9)
    const searchButton = screen.getByRole('button',{name:'Search'})

    const searchInput = screen.getByTestId('searchInput')

    fireEvent.change(searchInput,{ target : {value :'barbeque'}})

    fireEvent.click(searchButton)
    
    const restaurantCard = screen.getAllByTestId('resCard')

    expect(restaurantCard.length).toBe(2)
})
