import { useState } from "react";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
    const [location, setLocation] = useState("");
    const [animal, setAnimal] = useState("");
    const [breed, setBreed] = useState("");

    // Adjusting the Breed variable to hold multiple breeds
    const breeds = []; // Example breeds
    
    return (
        <div className="w-1/2 mt-10">
            <form>
                <label htmlFor="location">Location:</label>
                <input
                    onChange={(e) => setLocation(e.target.value)}
                    type="text"
                    id="location"
                    value={location}
                    placeholder="Location"
                />
                <label htmlFor="animal">Animal:</label>
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
                <label htmlFor="breed">Breed:</label>
                <select
                    id="breed"
                    disabled={breeds.length === 0}
                    value={breed}
                    onChange={(e) => setBreed(e.target.value)}
                    >
                    <option />
                    {breeds.map((breed) => (
                        <option key={breed} value={breed}>
                            {breed}
                        </option>
                    ))}
                </select>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default SearchParams;
