
import { Link, Navigate, useNavigate } from 'react-router-dom';



const CategoryCard = ({product}) => {
    
    const {category, category_id} = product;
    console.log(category, category_id);
 
   
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
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