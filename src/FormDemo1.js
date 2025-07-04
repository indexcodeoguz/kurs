import React, { Component } from 'react'
import { Form } from 'reactstrap'   


export default class FormDemo1 extends Component {
    state={userName:''}  // bir componentin durumunu tanımlar userName adında bir durum değişkeni tanımladım
    onChangeHandler =(event)=>{          // onChange ye ait event hangi eventten tetiklendi onun bilgisi geliyor
   this.setState({userName:event.target.value})  // gelen eventin değeri..... statedeki değeri userNameye atıyor
    }                             
  render() {
    return (
      <div>
        
          <form>
            <h3>   UserName  </h3>
               <input  onChange= {this.onChangeHandler}type="text">              </input>                                                        {/*   // onChange her karakter değişiminde */}
                 <h3>   UserName is{this.state.userName}  </h3>
          </form>


      </div>
    )
  }
}
