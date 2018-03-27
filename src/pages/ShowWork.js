import React from 'react';
import { Redirect } from 'react-router';

import { connect } from 'react-redux';
import MainImage from '../components/MainImage';
import Desc from '../components/Desc';

const ShowWork = props => {
  // Filtrar a solamente los que tienen avatar_picture
  // const items = props.data.filter(item => item.acf.avatar_picture);
  const items = props.posts;

  // Chequear item
  const { link } = props.match.params;
  const key = items.map(element => element.slug).indexOf(link);
  if (key < 0) return <Redirect to="/" />;

  const {
    avatar_picture: { url },
    nombre_del_proyecto,
    descripcion_del_proyecto,
    vimeourl,
    cliente
  } = items[key].acf;

  // Sacar los Prev o nextLink
  const prevLink =
    key === 0 ? items[items.length - 1].slug : items[key - 1].slug;
  const nextLink =
    key === items.length - 1 ? items[0].slug : items[key + 1].slug;

  return (
    <div>
      <MainImage
        nombre_del_proyecto={nombre_del_proyecto}
        url={url}
        videoUrl={vimeourl}
        prevLink={prevLink}
        nextLink={nextLink}
      />

      <Desc
        title={nombre_del_proyecto}
        desc={descripcion_del_proyecto}
        client={cliente}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    posts: state.data.posts
  };
};

export default connect(mapStateToProps)(ShowWork);
