import React,{useState} from 'react';
import data from './data';

const Home = () => {

    const [noOfElement,setnoOfElement] = useState(4);
    const loadMore = () =>{
        setnoOfElement(noOfElement + noOfElement);
    }
    const slice = data.cardData.slice(0,noOfElement);
    return (
        <section className="py-4 container">
            <div className="row justify-content-center">
                {slice.map((item,index)=>{
                    return(
                        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
                        <div className="card p-0 overflow-hidden h-100 shadow">
                            <img src={item.img} alt="" className="card-img-top"/>
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">{item.desc}</p>
                            </div> 
                        </div>       
                    </div>    
                    )
                })}
                <button className="btn btn-dark d-block w-100" onClick={()=>loadMore()}>Lead More</button>
            </div>
        </section>
    )
}

export default Home
