import './display_img.css'
import logo from './display_img.jpg'


function DisplayImg(props) {
    return (
        <div className='MainImg'>
            <img src={logo} alt="" srcset="" className='MainImg_img'/>
        </div>
    );
}

export default DisplayImg;