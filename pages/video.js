import React, {useState} from 'react'
import ModalVideo from 'react-modal-video'

const Video = () => {
  const [isOpen, setOpen] = useState(false)
  const handleClick = (e) => {
    e.preventDefault();
    setOpen(true);
  }
  return (
    <div style={{textAlign: 'center'}}>
      <h2>YouTube Video</h2>
      <div>
        <p>Use <a href="https://appleple.github.io/react-modal-video/">"react-modal-video"</a></p>
        <button className="btn-primary" onClick={handleClick}>VIEW DEMO</button>
        <br/><br/>
        <ModalVideo
          channel='youtube'
          isOpen={isOpen} 
          videoId="GDa8kZLNhJ4" 
          onClose={() => setOpen(false)}
        /> 
      </div>
    </div>
  );
}
 
export default Video;