import { useHistory, useParams, useLocation } from 'react-router-dom';
import {
    Pane,
  } from "evergreen-ui";
export default function Productsfn() {
    const data = useLocation();
    const cat = data.categorydata;
    console.log(data);
    const { category, subcategory, subsubcategory} = useParams();

    return (
        <div>
            <div>
                <Pane>
                        This is the product page - {category} - {subcategory} - {subsubcategory}
                </Pane>
                {cat}
                
                {data.products.map((product)=>(
                <p>{product.name}</p>
                ))}
                
            </div>
        </div>
    );
}