import './HeadImage.css'
import Image from "/HeadImage.jpg"

export default function HeadImage() {
  return (
    <>
      <div className='image-div'>
        <img
          className="head-image"
          src={Image}
        />
      </div>
    </>
  );
}
