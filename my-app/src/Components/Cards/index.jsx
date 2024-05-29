const Card = (props) => 
{
    return(
        <div class="Centrar">
        <div class="card">
            <div class="card-header">
                <p>{props.titulo}</p>
            </div>
            <div class="card-body">
                <p>{props.cuerpo}</p>
            </div>
        </div>
        </div>
   )
}


export default Card