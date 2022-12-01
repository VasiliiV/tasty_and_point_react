import './display_navig.css'
import logo from './logo_navig.png'
import SpanCity from './spanCity';
import ButtonApp from './buttonApp';
import logoApp from "./20944110.jpg"
import MenuMore from './menu_down/meni_more';
import MenuWrap from './menu_down/menu_wrap';
import MenuBase from './menu_base/menu_base';

function DisplayNavig() {
    return (
        <div className='DisplayNavig'>
        <div className='Welcom'>
            <img src={logo} alt="" srcset="" className='logo_nav'/>
            <h1>Приходи к нам!</h1>
        </div>
        <div className='DownloadMain'>
            <div className='DownloadMain-main-city'>
                <div id='DownloadMain-main-city_Content' className='DownloadMain-main-city_Content'>
                    <SpanCity text="Меню твоего города"  color='#adadad'/>
                    <SpanCity text="Тверь"/>
                </div>
                    <ButtonApp text="Выбрать предприятие"/>
            </div>
            <div className='DownloadMain-main-app'>
                <img src={logoApp} alt="" srcset="" className='logo_app'/>
                <p>
                    <SpanCity text="В приложении пользоваться"/>
                    <br/><SpanCity text="меню ещё удобнее"/>
                </p>
                    <ButtonApp text="Скачать" paddingRight="26px"/>
            </div>
        </div>
        <div className='menu-categories-outer'>
            <div className='menu-categories'>
                <MenuWrap/>
                <MenuMore/>
            </div>

        </div>
            <MenuBase/> 
    </div>
    )
}

export default DisplayNavig;