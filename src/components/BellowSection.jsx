function Text(props){
    return (<div>
        <p className = "textStyle lead ">
            {props.content}
        </p>
    </div>
    )
}


function BellowSection() {
    return (
        <div className="container my-5">
            <Text content="This is my games list. Hope you enjoy!"/>
            <Text content="Thought this would be a website where you could log your games? Coming soon :)"/> 
        </div>
    )
}

export default BellowSection;