import Slider from 'react-slick';
import styled from 'styled-components'

export const StyledSlider = styled(Slider)`
  .slick-next,
  .slick-prev {
    width: 50px;
    height: 50px;
    background-color: orange !important;
    border-radius: 50%;
    z-index: 99999;
    top: 50%;
    transform: translateY(-50%);
    color: white;
  }
`;