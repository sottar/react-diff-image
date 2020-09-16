import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import ReactExtImageDiff from '../../src';

const Div = styled.div``;

ReactDOM.render(
  <React.StrictMode>
    <ReactExtImageDiff></ReactExtImageDiff>
  </React.StrictMode>,
  document.getElementById('root'),
);
