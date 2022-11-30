import './buttonApp.css'

function ButtonApp(props) {
    const spanCity = {
        color: props.color,
        text: props.text,
        backgroundColor: props.backgroundColor,
        paddingLeft: props.paddingLeft,
        paddingRight: props.paddingRight,
        height: props.height
    }
    return (
        <div className='ButtonApp'>
            <span style={{color: props.color, backgroundColor: props.backgroundColor, paddingRight: props.paddingRight}}>{props.text}</span>
        </div>
        
    )
}

export default ButtonApp;

