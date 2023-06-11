import React from 'react';
import '../../sass/components/Utilitybox.scss';
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';



const Utilitybox = () => {

  let navigation = useNavigate();
  let location = useLocation();
const curpath = location.pathname;
  return (
    <div className='Ucontainer'>
    <ul className="list">
      <li className="list__item" onClick={()=>{navigation(`${curpath}/cancer`)}}> <svg className="search__icon list__icon">
            <use href="/assets/images/symbol-defs5.svg#icon-skeletor"></use>
          </svg><>Cancer</></li>
      <li className="list__item" onClick={()=>{navigation(`${curpath}/cardio`)}}><svg className="search__icon list__icon">
            <use href="/assets/images/symbol-defs5.svg#icon-heart1"></use>
          </svg>Cardio</li>
      <li className="list__item" onClick={()=>{navigation(`${curpath}/neuro`)}}><svg className="search__icon list__icon">
            <use href="/assets/images/symbol-defs5.svg#icon-radioactive"></use>
          </svg>Neuro</li>
      <li className="list__item" onClick={()=>{navigation(`${curpath}/ortho`)}} ><svg className="search__icon  list__icon">
            <use href="/assets/images/symbol-defs6.svg#icon-sweden"></use>
          </svg>Ortho</li>
      <li className="list__item" onClick={()=>{navigation(`${curpath}/ayurved`)}} ><svg className="search__icon list__icon">
            <use href="/assets/images/symbol-defs5.svg#icon-leaf"></use>
          </svg>Ayurved</li>
      <li className="list__item" onClick={()=>{navigation(`${curpath}/skin`)}}><svg className="search__icon list__icon">
            <use href="/assets/images/symbol-defs6.svg#icon-happy"></use>
          </svg>Skin</li>
    </ul>
      
    </div>
  )
}

export default Utilitybox

