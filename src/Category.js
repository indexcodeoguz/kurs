import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        { categoryId: 1, categoryName: "yemek" },
        { categoryId: 2, categoryName: "meyve" },
      ],
      currentCategory: "",
    };
  }
  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
  };


  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>

        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem
              key={category.categoryId}
              onClick={() => this.changeCategory(category)}
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
