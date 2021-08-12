import ParticlesBg from "particles-bg";
import Mailing from "./mailing"

export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <ParticlesBg type="circle" bg={{zIndex: 0, position:"absolute", top:0}} />
        <div className='overlay'>
          <div className='container'>
          
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                <a
                  href='#features'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Venez !
                </a>{' '}
      {/*/}
    <Mailing data={props}/>
    <div className='intro' style={{borderRadius:"25px",padding:"25px"}}>
    <h2><a name="mailinglist">La liste de diffusion ?</a></h2>
 <form method='post' action='https://list.lesgrandsvoisins.com/subscription/form' className='listmonk-form' target='_new'>
    <div>
      <p><input type='text' name='email' id='mailinglistemailfield'  className='form-control' placeholder='Email'/>
      <input type='text' className='form-control' name='name' placeholder='Nom (facultatif)'/>
      <input id='b7b3c' type='hidden' name='l' value='b7b3c33f-3301-48c0-a3ab-15f8102f8cfa'/><br/>
      <input type='submit' className='btn btn-custom btn-lg page-scroll' value='Je m`y inscris !'/></p>
    </div></form> 
              </div>
      {/*/}
              </div>

            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
