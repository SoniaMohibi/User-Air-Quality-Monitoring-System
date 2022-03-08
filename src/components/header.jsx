import { EachSecAqi } from "./EachSecAqi"

export const Header = (props) => {
  return (
    <div>
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-0 intro-text'>
                <div className='heading'>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </div>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
            
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <EachSecAqi/>
    </div>
  )

}
