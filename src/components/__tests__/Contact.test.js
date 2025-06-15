import { render ,screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

describe('Contact us page test case',()=>{
   test('should load contact us component', () => { 
      render(<Contact/>)
      const heading =  screen.getByRole("heading");
      //Assertion 
      expect(heading).toBeInTheDocument();
   })
  
   test('should load 2 input box',()=>{
      render(<Contact/>)
      // querying
      const inputBoxes = screen.getAllByRole('textbox')
      // assertion
      expect(inputBoxes.length).toBe(2)
   })
})


