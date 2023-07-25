import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import RecipeCard from '../RecipeCard'; 
import RestAPI from '../../RestAPI';

// Mock the RestAPI module to simulate API calls
jest.mock('../../RestAPI', () => ({
  putLikedRecipie: jest.fn(),
  putDislikedRecipie: jest.fn(),
}));

describe('RecipeCard Component', () => {
  const recipe = {
    id: 'recipe1',
    label: 'Test Recipe',
    thumbnail: 'test-image.jpg',
    likedBy: ['user1'], // A user with id 'user1' already liked this recipe
  };

  const user = {
    id: 'user1',
  };

  beforeEach(() => {
    render(
      <BrowserRouter>
        <RecipeCard recipe={recipe} numCards={2} user={user} />
      </BrowserRouter>
    );
  });

  it('renders recipe title correctly', () => {
    const titleElement = screen.getByText(recipe.label);
    expect(titleElement).toBeInTheDocument();
  });

  it('renders recipe thumbnail correctly', () => {
    const thumbnailElement = screen.getByRole('img', { name: recipe.label });
    expect(thumbnailElement).toBeInTheDocument();
    expect(thumbnailElement).toHaveAttribute('src', recipe.thumbnail);
  });

  it('calls putLikedRecipie when thumbs up is clicked', async () => {
    const thumbsUpButton = screen.getByLabelText('thumbs up');
    fireEvent.click(thumbsUpButton);
    await expect(RestAPI.putLikedRecipie).toHaveBeenCalledWith(user.id, recipe.id);
  });

  it('calls putDislikedRecipie when thumbs down is clicked', async () => {
    const thumbsDownButton = screen.getByLabelText('thumbs down');
    fireEvent.click(thumbsDownButton);
    await expect(RestAPI.putDislikedRecipie).toHaveBeenCalledWith(user.id, recipe.id);
  });

  it('navigates to the recipe details page when clicked', async () => {
    const cardActionArea = screen.getByRole('button');
    fireEvent.click(cardActionArea);
    // Replace the following line with the expected URL of the recipe details page
    expect(window.location.href).toBe(`http://localhost/recipe/${recipe.id}`);
  });
});