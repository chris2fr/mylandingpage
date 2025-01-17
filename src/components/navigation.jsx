export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
            Les Grands Voisins
          </a>.com{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
                v.β
            </li>
            <li>
              <a href='#features' className='page-scroll'>
                Liste de diffusion
              </a>
            </li>
            <li>
              <a href='#about' className='page-scroll'>
                Interdépendance</a>
            </li>
            <li>
              <a href='#services' className='page-scroll'>
                Services
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                Contact
              </a>
            </li>
    {/*/}
            <li>
              <a href='#portfolio' className='page-scroll'>
                Gallerie
              </a>
            </li>
            <li>
              <a href='#testimonials' className='page-scroll'>
                Témoignages
              </a>
            </li>
    {/*/}
          </ul>
        </div>
      </div>
    </nav>
  )
}
