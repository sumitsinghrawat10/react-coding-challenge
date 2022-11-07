import React,{useState} from 'react'
const emptyStar="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Five-pointed_star.svg/1088px-Five-pointed_star.svg.png"
const fillStar="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/1200px-Gold_Star.svg.png"
const A = () => {



  return (
    <div>
<StarRating/>

    </div>
  )
}

export default A;

const StarRating=()=>{
const starIds=[1,2,3,4,5];
const [clicked, setClicked]= useState(0);
const [hover,setHover]=useState(0);
const getImg=(id)=>{
    return hover >=id||clicked >=id? fillStar: emptyStar;
}

return (

    <div  style={{display: "flex", justifyContent: "center", padding: 20}}>
        {starIds.map((id)=>(
            <img  src={getImg(id)} 
            onMouseEnter={()=>{
                setHover(id);
                if(id<clicked) setClicked(0);
            }}
            onMouseOut={()=>setHover(0)
            }
            width={60}
            height={60}
            />
        ))}
      </div>
);

};