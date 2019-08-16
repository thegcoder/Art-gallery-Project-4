import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
        <div className="home">
          <h2>Art Gallery Project</h2>
          <Link to={'/artworks'}>
            <img src="https://media.giphy.com/media/7bbxxRnX3G2WI/giphy.gif"
            alt="art"/>
          </Link>
//paypal button
    <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post" >
<input type="hidden" name="cmd" value="_cart">
<input type="hidden" name="business" value="jstaxtees@gmail.com">
<input type="hidden" name="lc" value="US">
<input type="hidden" name="item_name" value="Artwork">
<input type="hidden" name="amount" value="10000.00">
<input type="hidden" name="currency_code" value="USD">
<input type="hidden" name="button_subtype" value="products">
<input type="hidden" name="no_note" value="0">
<input type="hidden" name="add" value="1">
<input type="hidden" name="bn" value="PP-ShopCartBF:btn_cart_LG.gif:NonHostedGuest">
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>

        </div>
    );
  }
}
