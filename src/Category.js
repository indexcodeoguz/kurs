import React, { Component } from "react";  // react ve komponenti import ettim
import { ListGroup, ListGroupItem } from "reactstrap"; // react strapten list group ve list group itemi import ettim

export default class Category extends Component {  // categoryi tanımladım
  constructor(props) {  //    öncelikle apiden verip alıp içine doldurmak için...... parametre belli bi sistemi tanımlamak icin yardımcı olacak özellik .. yapıcı fonksiyonu çalıştırmak için parametre olarak prosu aldım 
    super(props); // ana sınıf react componentin contrusstur yapısı cağırır this propsa erişmeye ve bileşeni doğru şekilde başlatmaya yarar
    this.state = { // bileşenin durumunu state olarak tanımladık
      categories: [],  // kategorileri listelemek için
      currentCategory: "",  // current categoryi boş olarak ayarladık soldan tıklayınca seçilen kategoriye göre doluyor
    }; 
  }

  componentDidMount() {  // yaşam döngüsü veri çekme api cağrısı
    this.getCategories();  // getcategoriesi cağırır apiden kategori verisi çek veriyi state gönder
  }

getCategories = () => {
    fetch("http://localhost:4000/categories")  // apiyi burada açıyoruz
      .then((response) => response.json()) // açılan apiyi json formatına ceviriyoruz
      .then((data) => this.setState({ categories: data })); // verileri stateye atar
  };
  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName }); // seçilen kategoriyi state ye yazıyor
    this.props.changeCategory(category);
  };

render() {  //js render ediliyor 
    return (
      <div>
        <h3>{this.props.info.title}</h3>

        <ListGroup>
          {this.state.categories.map(category=> ( // her kategotri icin bir satır liste elemanı olusturuyor
            <ListGroupItem   active={category.categoryName === this.state.currentCategory?true:false} // hepsini mavi yapiyo active ..category id eşitmi mevcut kategorinin ismi currentcategorye eşitse active true değilse false
              onClick={() => this.changeCategory(category)} // tıklama yapınca kategori değiştirilir
              key={category.id} 
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>

        <h4>{this.state.currentCategory}</h4>
      </div>
    );
  }
}