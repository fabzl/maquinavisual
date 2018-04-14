import React, { Component } from 'react';
import styled from 'styled-components';
import Box from './Box';




class Grid extends Component {
  state = {
    column: '1fr'
  }




  setfullWidth = () => {
    
    
    console.log("set full width");
    console.log(this.props);
    
    if(this.props.large) {
      return true;
    }else{
      return false;
    }

  }


  renderBoxes = () => {
    return this.props.data.map((item, key) => {
      // Si no existe acf implementado
      if (!item.acf.avatar_picture) return null;
      const {
        avatar_picture: { url },
        nombre_del_proyecto,
        cliente
      } = item.acf;
      return (
        <Box
          key={item.id}
          image={url}
          title={nombre_del_proyecto}
          client={cliente}
          videoUrl={item.acf.vimeourl}
          link={this.props.link ? item.slug : null}
        />
      );
    });
  };

  render() {
    const Wrap = styled.div`
      display: grid;  
      grid-template-columns: ${this.setfullWidth() ? '1fr' : '1fr 2fr'};
      grid-auto-rows: 430px;
      & div:last-child:nth-child(odd) {
        grid-column: 1 / 3;
      }
      &.full {
        grid-column: 3 / 3;
      }
    `;
   
    return <Wrap>{this.renderBoxes()}</Wrap>;
  }
}

export default Grid;
