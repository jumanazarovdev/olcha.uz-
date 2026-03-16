// import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

import Header from "./Companents/Header";
import ProductsCord from "./Companents/ProductCarrd";

const dataProducts = [
  {
    id:1,
    productImg:
      "https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2026-02-25/ji6Hq3G4tIYbQQnAoKsECBXqHF1q0jPBrk31h0QgnEjdW7MgvqBhERJ3NjqO.jpg",
    groupName: "Telefon ",
    price: "16 999 000",
    priceMonth: "2 290 000",
    title: "iphone 17",
  },
  {
    id:2,
    productImg:
      "https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2026-02-25/ji6Hq3G4tIYbQQnAoKsECBXqHF1q0jPBrk31h0QgnEjdW7MgvqBhERJ3NjqO.jpg",
    groupName: "Telefon ",
    price: "2 290 000",
    priceMonth: "2 290 000",
    title: "iphone",
  },
  {
    id:3,
    productImg:
      "https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2026-02-25/ji6Hq3G4tIYbQQnAoKsECBXqHF1q0jPBrk31h0QgnEjdW7MgvqBhERJ3NjqO.jpg",
    groupName: "Telefon ",
    price: "2 290 000",
    priceMonth: "2 290 000",
    title: "iphone blue",
  },
  {
    id:4,
    productImg:
      "https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2026-02-25/ji6Hq3G4tIYbQQnAoKsECBXqHF1q0jPBrk31h0QgnEjdW7MgvqBhERJ3NjqO.jpg",
    groupName: "Telefon ",
    price: "2 290 000",
    priceMonth: "2 290 000",
    title: "iphone",
  },
  {
    id:5,
    productImg:
      "https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2026-02-25/ji6Hq3G4tIYbQQnAoKsECBXqHF1q0jPBrk31h0QgnEjdW7MgvqBhERJ3NjqO.jpg",
    groupName: "Telefon ",
    price: "2 290 000",
    priceMonth: "2 290 000",
    title: "iphone red",
  },
];

class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <section id="products" className="py-3">
          <div className="container-fluid">
            <div className="row">
              {dataProducts.map((v, i) => (
                <div key={v.id} className="col-sm-6 col-md-4 col-lg-3 productCol">
                  <ProductsCord data={v} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
