export const Features = (props) => {
  return (
    <div id='features' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>Déclaration de valeurs*</h2>
        </div>
        <div className='col-md-10 col-md-offset-1'>
        <p>* (Ceci est au stade de la proposition)</p>
    <p>{props.data ? props.data.introtext : 'Chargement'}</p>
        </div>
        <div className='row'>
          {props.data
            ? props.data.iconboxes.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-xs-6 col-md-6'>
                  {' '}
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : 'Loading...'}
        </div>
    <p>{props.data ? props.data.concludetext : 'Chargement'}</p>
      </div>
    </div>
  )
}
