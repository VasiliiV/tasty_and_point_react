import "./input_menu.css"

function InputMenu(props) {
    return (
           <div className="Input_menu_content">
                <div className="Input_menu_content_left">
                    <nav className="Input_menu_content_left-navigation">
                        <a href="." className="Input_menu_content_left-navigation_item">Меню</a>
                        <a href="." className="Input_menu_content_left-navigation_item">Акции</a>
                        <a href="." className="Input_menu_content_left-navigation_item">Мы на карте</a>
                        <a href="." className="Input_menu_content_left-navigation_item">Новинки</a>
                        <a href="." className="Input_menu_content_left-navigation_item">Новости</a>
                        <a href="." className="Input_menu_content_left-navigation_item">О нас</a>
                    </nav>
                </div>
                <div className="Input_menu_content_right">
                    <div className="Input_menu_content_right_city">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" class="page-header__city-icon">
                            <path fill-rule="evenodd" d="M16 4.75c3.774 0 7.458 3.06 7.458 6.834 0 3.172-1.348 5.94-2.745 8.981C19.2 23.862 17.347 27.75 16 27.75s-3.199-3.888-4.714-7.185c-1.397-3.04-2.744-5.809-2.744-8.98 0-3.776 3.683-6.835 7.458-6.835zm0 1.75c-2.988 0-5.708 2.423-5.708 5.084 0 2.638 1.105 5.04 2.385 7.818l.2.433c.562 1.224 2.13 4.635 3.123 5.867.993-1.232 2.56-4.643 3.123-5.867l.2-.433c1.28-2.779 2.385-5.18 2.385-7.818 0-2.66-2.72-5.084-5.708-5.084zM16 9a3 3 0 110 6 3 3 0 010-6zm0 1.75c-.689 0-1.25.561-1.25 1.25s.561 1.25 1.25 1.25 1.25-.561 1.25-1.25-.561-1.25-1.25-1.25z"></path>
                        </svg>Тверь
                    </div>
                    <div className="Input_menu_content_right-input">
                        <button className="Input_menu_content_right-input_item">Войти</button>
                    </div>
                </div>
           </div> 
    );
}

export default InputMenu;