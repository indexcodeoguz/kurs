import React, { Component } from "react";  // react ve componenti import ettim
import { Table } from "reactstrap";   // reactstrapten  table yi import ettim
export default class Productlist extends Component {  // product list bilesenini tanımladım
  render() {
    return (
      <div>
        <h3>{this.props.info.title}  {/* props içindeki info.title değerini h3de göster */} </h3>    

        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>UnitPrice</th>
              <th>Quantity Per Unit</th>
              <th>Units in Stock</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map(product => (
               <tr key={product.id} >  {/* her ürün icin bi satır*/}
                <th scope="row">{product.id}</th>
                <td>{product.productName}</td>
                <td>{product.unitPrice}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitsInStock}</td>
              </tr>
            ))}    
          </tbody>
        </Table>
      </div>
    );
  }
}
 