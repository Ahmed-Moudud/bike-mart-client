
import { Link, Navigate, useNavigate } from 'react-router-dom';



const CategoryCard = ({product}) => {
    
    const {category, category_id, image} = product;
    console.log(category, category_id);
 
   
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="">
                <img style={{width:"100%", height: "350px"}} src={image} alt="" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{category}</h2>                
                <div className="card-actions">
              <Link to='/allproducts'><button  className="btn btn-primary">view all {category}s</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;