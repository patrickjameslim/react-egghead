import React, {Component} from 'react';

import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';

import './SearchBar.css';

class SearchBar extends Component {
  render() {
    return(
      <div>
        <Form>
          <FormGroup>
            <FormControl
              type="text"
              placeholder="Search for a Github profile here"
              onKeyPress={this.update}
              ref='username'>
            </FormControl>
          </FormGroup>
        </Form>
      </div>
    )
  }

  update() {
    this.props.onSearch(this.refs.username.getDOMNode().value);
  }
}

SearchBar.PropTypes = {
  username: React.PropTypes.string
};

export default SearchBar;
