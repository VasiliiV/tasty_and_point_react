function SpanCity(props) {
    const spanCity = {
        color: props.color,
        text: props.text
    }
    return (
        <div>
            <span style={{color: props.color}}>{props.text}</span>
        </div>
        
    )
}

export default SpanCity;