import React from 'react';
import styled from 'styled-components';
import Pagination from '../common/Pagination';
import PlaceData from './PlaceData';

const Wrapper = styled.div`
  > .error-message {
    text-align: center;
  }

  > .place-list {
    margin-top: ${(props) => props.theme.margin2};
    display: grid;
    justify-content: center;
    grid-template-columns: 300px 300px 300px;
    gap: 10px;
  }
`;

const PlaceList = (props) => {
  const places = props.ss === '' ? props.places : props.filteredPlaces;
  const SIZE = 12;

  return (
    <Wrapper>
      <div className='place-list'>
        {places.map((data) => (
          <PlaceData
            key={data.id}
            id={data.id}
            name={data.name}
            address={data.address}
            imgUrl={data.imgUrl}
            category={
              data.category === 'res'
                ? '식당'
                : data.category === 'cafe'
                ? '카페'
                : '소품샵'
            }
          />
        ))}
      </div>
      <Pagination items={places} size={SIZE} />
    </Wrapper>
  );
};

PlaceList.defaultProps = {
  ss: '',
  filteredPlaces: [],
  places: [],
};
export default PlaceList;
