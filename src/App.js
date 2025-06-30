import React, { Component } from "react"; // react  ve componenti import ettim
import Navi from "./Navi"; //  navi category productlist import ettim
import Category from "./Category";
import Productlist from "./Productlist";
import { Container, Row, Col } from "reactstrap"; // reactstrrapden container row ve column import ettim

export default class App extends Component { // ana bileşen ismi tanımladım
  state = { currentCategory:"",products:[]};


  componentDidMount() { // bileşeni yükledikten sonra calısan yaşam döngüsü
    this.getProducts();  // productsları getirmek icin
    
  };

  changeCategory = category => { // kategoriyi değiştirme fonksiyonu
    this.setState({ currentCategory: category.title }); // seçili kategori stateye atar
    this.getProducts(category.seoUrl);
  };

  getProducts = (seoUrl) => {   

    let url = "http://localhost:4000/products";
    if (seoUrl) {
      url+="/" + seoUrl;
    }
    fetch(url)  // apiyi açtığımız link cağırdığımız localhost
      .then((response) => response.json())  // json a dönüştürüp verileri alıyoruz
      .then((data) => this.setState({ products: data })); // gelen veri stateye atanır
  };

 
  

  render() {
    let productInfo = { title: "Product" }; // product başlığı
    let categoryInfo = { title: "Category" };
  
    return (
      <div>
        <Container>
          <Row>
            <Navi />
          </Row>

          <Row>
            <Col xs="3">
              <Category
                info={categoryInfo}
                categories={this.state.categories} // sanırım burda hata yaptım ...
                changeCategory={this.changeCategory}  // kategori değişim fonksiyonu
              />
            </Col>
            <Col xs="9">
              <Productlist

                products={this.state.products}  // ürünler props olarak  verilir
                currentCategory={this.state.currentCategory} // seçili kategori props olarak verilir
                info={productInfo}  // başlık bilgisi
                 
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
