import React from 'react';

class SearchTable extends React.Component {
      constructor() {
        super()

       this.state = { 
         searchString: '' 
      }
      this.handleChange = this.handleChange.bind(this);
    }

       handleChange = (e) => {
         this.setState({ searchString:e.target.value });
       }

       render() {

        var libraries = this.props.items;
        var searchString = this.state.searchString.trim().toLowerCase();

         if (searchString.length > 0) {

           libraries = libraries.filter(function(i) {
             return i.url.toLowerCase().match( searchString ) || i.name.toLowerCase().match( searchString );
           });

         }

         return (
           <>
             
             <input type="text" value={this.state.searchString} onChange={this.handleChange} placeholder="Rechercher"/>
              <table>
                
                {libraries.map(function(i, index) {
                    return (
                      <tr key={index}>
                          <td>
                            {i.name}
                          </td>
                          <td>
                            <a href={i.url}>{i.url}</a>
                          </td>
                      </tr>
                  )
                }) } 

              </table>

           </>
         );
       }
    }
    
    export default SearchTable;