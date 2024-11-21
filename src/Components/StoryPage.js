import React from 'react';
import '../Components/Styles/StoryPage.css';
import Stories from '../Components/Stories/Stories.json';
import { useLocation, useNavigate } from 'react-router-dom';

function StoryPage(){
    const Navigate=useNavigate();
    const location=useLocation();
    const {id}=location?.state;
    const filteredStory = Stories.filter((story) => story.id == id);
    
    const handleBack=()=>{
        Navigate('/books');
    }

    return(<>
        <div className="story-container">
            {
               filteredStory.map((story)=>(
                <>
        <div className="story-title">
        <button onClick={handleBack} className='buy-now-button'>Back</button>
        <h3>{story.title}</h3>
        </div>
<div className="story-content">
<p>{story.content}</p>
</div>
                </>
               ))
            }
    </div>
    </>
    )
}

export default StoryPage;