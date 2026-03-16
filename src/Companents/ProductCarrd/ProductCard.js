import { Component } from "react";
import "./ProductCard.css";

class ProductsCord extends Component {
  constructor() {
    super() ;
  }
  render()
   { console.log(" Mahsulot ma'lumotlari");
    console.log(this.props);
    
    const {productImg, groupName, price, priceMonth, title} = this.props.data;
  
    return (
      <div className="productsCord p-3">
        <img
          className="d-block productImg"
         src={productImg}
          alt=""
        />
        <a href="#" className="groupName d-block mb-2 mt-3">
          {groupName}
        </a>
        <p className="price">{price} sum</p>
        <p className="priceMonth"> {priceMonth} sum / mec</p>

        <p className="title">{title.toUpperCase()}</p>
        <a href="#" className="btn ">
          Savatcha
        </a>
      </div>
    );
  }
}
export default ProductsCord;