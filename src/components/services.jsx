export const Services = (props) => {
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Rendre service</h2>
          <p>
            Les Grands Voisins existent fincièrement de par notre proposition de services financés et/ou rémunérés pour et par les différents populations, voire les usagers directement. 
          </p>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4'>
                  {' '}
                   <a href={d.link}><i className={d.icon}></i></a>
                  <div className='service-desc'>
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
    <h3>Voulez-vous vous inscrire à la liste de diffusion ?</h3>
 <form method='post' action='https://list.lesgrandsvoisins.com/subscription/form' className='listmonk-form' target='_new'>
    <div>
      <p><input type='text' name='email' id='mailinglistemailfield'  className='form-control' placeholder='Email'/>
      <input type='text' className='form-control' name='name' placeholder='Nom (facultatif)'/>
      <input id='b7b3c' type='hidden' name='l' value='b7b3c33f-3301-48c0-a3ab-15f8102f8cfa'/><br/>
      <input type='submit' className='btn btn-custom btn-lg page-scroll' value='Je m`inscris à la liste de diffusion !'/></p>
    </div></form>     </div>
    </div>
  )
}
