import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Components/Styles/Admin.css'

function Admin() {
  const navigate = useNavigate();
  
  const [stories, setStories] = useState([]); // State to store stories
  const [newStory, setNewStory] = useState({ title: '', content: '' }); // State for new story form
  const [editingStory, setEditingStory] = useState(null); // State for editing story
  
  // Fetch stories from localStorage or API (for now we'll simulate with localStorage)
  useEffect(() => {
    const savedStories = JSON.parse(localStorage.getItem('stories')) || [];
    setStories(savedStories);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLogin'); // Remove login status from localStorage
    navigate('/login'); // Redirect to login page
  };

  const handleAddStory = (e) => {
    e.preventDefault();
    const updatedStories = [...stories, newStory];
    setStories(updatedStories);
    localStorage.setItem('stories', JSON.stringify(updatedStories)); // Save stories to localStorage
    setNewStory({ title: '', content: '' }); // Reset form
  };

  const handleEditStory = (story) => {
    setEditingStory(story); // Set story to edit
  };

  const handleUpdateStory = (e) => {
    e.preventDefault();
    const updatedStories = stories.map((story) =>
      story.title === editingStory.title ? editingStory : story
    );
    setStories(updatedStories);
    localStorage.setItem('stories', JSON.stringify(updatedStories));
    setEditingStory(null); // Stop editing
  };

  return (<>
    <div className='button-edit'>
      <button onClick={handleLogout} className='button'>Logout</button>
      </div>
    <div className="admin-edit">
      <h1>Admin Page</h1>
      {/* Add New Story Form */}
      <div className="add-story-form">
        <h2>Add New Story</h2>
        <form onSubmit={handleAddStory}>
          <div>
            <label htmlFor="title">Story Title</label>
            <input
              type="text"
              id="title"
              value={newStory.title}
              onChange={(e) => setNewStory({ ...newStory, title: e.target.value })}
              required
            />
          </div>
          <div>
            <label htmlFor="content">Story Content</label>
            <textarea
              id="content"
              value={newStory.content}
              onChange={(e) => setNewStory({ ...newStory, content: e.target.value })}
              required
            />
          </div>
        </form>
              <button type="submit">Add Story</button>
      </div>

      {/* Edit Story Form */}
      {editingStory && (
        <div className="edit-story-form">
          <h2>Edit Story</h2>
          <form onSubmit={handleUpdateStory}>
            <div>
              <label htmlFor="edit-title">Story Title</label>
              <input
                type="text"
                id="edit-title"
                value={editingStory.title}
                onChange={(e) =>
                  setEditingStory({ ...editingStory, title: e.target.value })
                }
                required
              />
            </div>
            <div>
              <label htmlFor="edit-content">Story Content</label>
              <textarea
                id="edit-content"
                value={editingStory.content}
                onChange={(e) =>
                  setEditingStory({ ...editingStory, content: e.target.value })
                }
                required
              />
            </div>
            <button type="submit">Update Story</button>
          </form>
        </div>
      )}
    </div>
    {/* Displaying List of Stories */}
    <div className="admin-edit">
        <h2>List of Stories</h2>
        {stories.length === 0 ? (
          <p>No stories available.</p>
        ) : (
          <ul>
            {stories.map((story, index) => (
              <li key={index}>
                <h3>{story.title}</h3>
                <p>{story.content}</p>
                <button onClick={() => handleEditStory(story)}>Edit Story</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default Admin;
