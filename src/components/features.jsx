export const Features = (props) => {
  return (
    <div id='features' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>La liste de diffusion ?</h2>
        </div>
        <div className='col-md-10 col-md-offset-1'>
    {/*/}
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
    {/*/}
 <form method='post' action='https://list.lesgrandsvoisins.com/subscription/form' className='listmonk-form' target='_new'>
      <input type='text' name='email' id='mailinglistemailfield'  className='form-control' placeholder='Email'/>
      <input type='text' className='form-control' name='name' placeholder='Nom (facultatif)'/>
      <input id='b7b3c' type='hidden' name='l' value='b7b3c33f-3301-48c0-a3ab-15f8102f8cfa'/><br/>
      <input type='submit' className='btn btn-custom btn-lg page-scroll' value='Je m`y inscris !'/>
    </form></div>
    </div>
    </div>
  )
}
