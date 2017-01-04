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
              placeholder="Search for a Github profile here">
            </FormControl>
          </FormGroup>
        </Form>
      </div>
    )
  }
}

SearchBar.PropTypes = {
  searchTerm: React.PropTypes.string
};

export default SearchBar;
