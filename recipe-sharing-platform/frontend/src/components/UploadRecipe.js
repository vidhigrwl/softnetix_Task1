// src/components/UploadRecipe.js

import React, { useState } from 'react';
import axios from 'axios';

function UploadRecipe() {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/recipes/create', {
        title,
        ingredients,
        instructions
      });
      setMessage('Recipe uploaded successfully!');
    } catch (error) {
      setMessage('Failed to upload recipe. Please try again.');
    }
  };

  return (
    <div>
      <h2>Upload Recipe</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Recipe Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          required
        />
        <textarea
          placeholder="Instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          required
        />
        <button type="submit">Upload Recipe</button>
      </form>
      {message && <p className="success">{message}</p>}
    </div>
  );
}

export default UploadRecipe;
