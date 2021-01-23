import React from 'react'


function Search() {

    state = {
        search: ""
      };
    
      renderCountry = country => {
        const { search } = this.state;
        var code = country.code.toLowerCase();
  
      
   onchange = e => {
      this.setState({ search: e.target.value });
    };
    
    render() {
      const { search } = this.state;
      const filteredCountries = countriesList.filter(country => {
        return country.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
      });
  
    return (
        <div>
            
        </div>
    )
}
      }
    }

export default Search
