export const Aqicards = (props) => {
  return (
    <div>
     <div id='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div>
                <div key={`${d.name}-${i}`} className='offset-1 col-md-3 col-sm-6' style={{position:"relative",top:"100px",marginBottom:"130px"}}>
                  
                  <div>
                    {' '}
                  
                    <img src={d.image} alt='...' className='team-img' />
                    <div className='caption'>
                      <h3>{d.titl}</h3>
                      <p>{d.description}</p>
                      <p><a href={props.data ? props.data.link : '/' }>
                       Read More</a></p>
                     <p> <a href="#">Annual Death By Polluted air</a></p>
                    </div>
                  </div>
                  </div>
          </div>
              ))
            : 'loading'}
        </div>
    {/* <div className="card-deck">
  <div className="card">
    <img className="card-img-top" src="img/portfolio/masked.jpg" alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">{props.data ? props.data.titl: 'Loading'}</h5>
      <p className="card-text">{props.card1 ? props.card1.description: 'descriptions'} </p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src="img/portfolio/masked.jpg" alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">{props.data ? props.data.titl : 'Loading'}</h5>
      <p className="card-text">{props.data ? props.data.description: 'descriptions'} This card has supporting text below as a natural lead-in to additional content.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src="img/portfolio/masked.jpg" alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">{props.data ? props.data.title : 'Loading'}</h5>
      <p className="card-text">{props.data ? props.data.description: 'descriptions'} 
      This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div> */}
    </div>
  );
}