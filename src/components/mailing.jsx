export const Mailing = (props) => {
  return (
    <div className='intro' style={{borderRadius:"25px",padding:"25px"}}>
    <h2><a name="mailinglist">La liste de diffusion ?</a></h2>
 <form method='post' action='https://list.lesgrandsvoisins.com/subscription/form' className='listmonk-form' target='_new'>
    <div>
      <input type='text' name='email' id='mailinglistemailfield'  className='form-control' placeholder='Email'/>
      <input type='text' className='form-control' name='name' placeholder='Nom (facultatif)'/>
      <input id='b7b3c' type='hidden' name='l' value='b7b3c33f-3301-48c0-a3ab-15f8102f8cfa'/><br/>
      <input type='submit' className='btn btn-custom btn-lg page-scroll' value='Je m`y inscris !'/>
    </div></form></div>
  )
}

export default Mailing;
