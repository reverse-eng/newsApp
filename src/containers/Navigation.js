import React from "react";
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput,
  Collapse
} from "shards-react";

/**
 * ## Basic Example
 */
export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);

    this.state = {
      dropdownOpen: false,
      collapseOpen: false
    };
    
  }
  
  toggleDropdown() {
    this.setState({
      ...this.state,
      ...{
        dropdownOpen: !this.state.dropdownOpen
      }
    });
  }

  toggleNavbar() {
    this.setState({
      ...this.state,
      ...{
        collapseOpen: !this.state.collapseOpen
      }
    });
  }
  
  render() {
    
    return (
      <Navbar type="dark" theme="danger" expand="md">
        
          <NavbarBrand href="/">
          NEWS-SMASH
          
          </NavbarBrand>
        
        <NavbarToggler onClick={this.toggleNavbar} />

        <Collapse open={this.state.collapseOpen} navbar>
          <Nav navbar>
            <Dropdown
              open={this.state.dropdownOpen}
              toggle={this.toggleDropdown}
            >
              <DropdownToggle nav caret>
                Country
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem href="/country/gb">Uk</DropdownItem>
                
                <DropdownItem href="/country/ve">Venuzuela</DropdownItem>
                <DropdownItem href="/country/fr">France</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Nav>

          <Nav navbar className="ml-auto">
            <InputGroup size="sm" seamless>
              <InputGroupAddon type="prepend">
                <InputGroupText>
                    &#9740;
                </InputGroupText>
              </InputGroupAddon>
              <FormInput className="border-0" placeholder="Search..." />
            </InputGroup>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}