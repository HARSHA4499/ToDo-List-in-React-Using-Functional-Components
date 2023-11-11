 export const Planet =(props)=>{
    return(
      <div>
       {props.isGasPlanet && <h1>{props.name}</h1>}
      </div>
    );
  };