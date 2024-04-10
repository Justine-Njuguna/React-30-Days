import { useState } from "react";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];


const SearchParams = () => {
    const [location, setLocation] = useState("");
    const [animal, setAnimal] = useState("");

    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">Location:</label>
                <input onChange={(e => setLocation(e.target.value))} 
                type="text" 
                id="location" 
                value={location} 
                placeholder="Location" 
                />
                <label htmlFor="animal">Animal:
                    <select
                        id="animal"
                        value={animal}
                        onChange={(e) => setAnimal(e.target.value)}
                        onBlur={(e) => setAnimal(e.target.value)}
                    >
                        <option />
                        {ANIMALS.map((animal) => (
                            <option key={animal} value={animal}>
                                {animal}
                            </option>
                        ))}
                    </select>
                </label>
            
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default SearchParams;    

/* Rules for React Hooks */
//write rules for React Hooks
// 1. Only call Hooks at the top level. Don't call Hooks inside loops, conditions, or nested functions.
// Call Hooks outside of the render method
// 2. Only call Hooks from React functions. Don't call Hooks from regular JavaScript functions.
// Call Hooks from within React functional components
// 3. Call Hooks from custom Hooks. Don't call Hooks from regular JavaScript functions.
// Call Hooks from within custom Hooks
// 4. Don't call Hooks from regular JavaScript functions. Call Hooks from within React functional components or custom Hooks.
// Call Hooks from within React functional components or custom Hooks
// 5. Don't call Hooks more than once per component. Call Hooks only once per component.
// Call Hooks only once per component
// 6. Don't call Hooks from regular JavaScript functions. Call Hooks from within React functional components or custom Hooks.
// Call Hooks from within React functional components or custom Hooks
// 7. Don't call Hooks from regular JavaScript functions. Call Hooks from within React functional components or custom Hooks.
// Call Hooks from within React functional components or custom Hooks