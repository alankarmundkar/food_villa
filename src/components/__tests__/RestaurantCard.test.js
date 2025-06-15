import { render, screen } from "@testing-library/react"
import RestrauntCard from "../RestrauntCard"
import MOCK_DATA from '../__mocks__/resCardMock.json'
import '@testing-library/jest-dom'

it('should render restaurant card component with props data',()=>{
    render(<RestrauntCard {...MOCK_DATA}/>)

    const name =screen.getByText("Pizza Hut")

    expect(name).toBeInTheDocument()
})