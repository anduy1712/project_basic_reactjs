import { AiOutlineDoubleRight } from "react-icons/ai";

import './App.css';
import { useEffect, useState } from 'react';

const App = () => {
  const url = 'https://course-api.com/react-tabs-project';

  const [index,setIndex] = useState(0);
  const[data,setData] = useState([]);
  const[loading,setLoading] = useState(true);
  
  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json()
    setData(data);
    setLoading(false)
  }
  useEffect(() =>{
    getData();

  },[])
  
  if(loading){
    return <h3 className="title">Loaidng</h3>
  }
  const onTab = (order) => {
    setIndex(order)
  }
const { company,dates, duties, title} = data[index];
  return (
    <div className="App">
      <h1 className="title">Experience</h1>
      <div className="line"></div>
      <div className="card">
        <div className="card__tabs">
          <ul className="tabs__list">
            <li onClick={() => onTab('0')} className={index == 0 ? 'tabs__item active' : 'tabs__item'}>
              <p>Tommy</p>
            </li>
            <li onClick={() => onTab('1')} className={index == 1 ? 'tabs__item active' : 'tabs__item'}>
              <p>BigDrop</p>
            </li>
            <li onClick={() => onTab('2')} className={index == 2 ? 'tabs__item active' : 'tabs__item'}>
              <p>Cuker</p>
            </li>
          </ul>
        </div>
        <div className="card__info">
            <h3 className="info__title">{title}</h3>
            <span className="label label-info">{company}</span>
            <p className="info__date">{dates}</p>
            {duties.map((dutie,index) => {
              return <div key={index} className="content">
                    <div className="content__icons">
                        <AiOutlineDoubleRight/>
                    </div>
                    <span className="content__inner">
                        {dutie}
                    </span>
                  </div>
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
