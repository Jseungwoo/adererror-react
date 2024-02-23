import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ productList }) => {
    const navigate = useNavigate();
    const goProductDetailPage = (productId) => {
        navigate(`/product/${productId}`)
    };

    return (
      <div>
        <ul className="product-list">
          {productList.map((product) => (
            <li key={product.id} 
            className="product-item">
              <div
                className="img"
                onClick={() => goProductDetailPage(product.id)}
                style={{ backgroundImage: `url(${product.img})`,
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    }}
              ><div style={{ display: "flex", justifyContent: "flex-end" }}>
              { product.choice == true ? <FontAwesomeIcon icon={faHeartSolid}/> : <FontAwesomeIcon icon={faHeartRegular}/>}
              </div></div>
            <span className='product-name'>{product.title}</span><br/>
            <span className='price'>{product.price.toLocaleString('ko-KR', { currency: 'KRW' })}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default ProductCard
