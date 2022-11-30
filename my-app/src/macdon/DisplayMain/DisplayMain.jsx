import logo from './icon_main.jpg'
import './displayMain.css'
import InputMenu from './input_menu';

function DisplayMain(props) {
    return (
            <div className='displayMain'>
                <div className='displayMain-logo'>
                    <img src={logo} alt="" srcset="" className='displayMain-logo_item'/>Вкусно и сочно
                    
                </div>
                <InputMenu/>
            </div>
    );
}

export default DisplayMain;



