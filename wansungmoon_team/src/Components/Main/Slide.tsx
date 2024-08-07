// import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MultipleRows() {
  const settings = {
    dots: true,
    // dotsClass:{},
    infinite: true,
    speed: 500,
    slidesPerRow: 5,
    // slidesToShow: 5,
    // slidesToScroll: 2,
    rows: 3,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
        <div>
          <h3>7</h3>
        </div>
        <div>
          <h3>8</h3>
        </div>
        <div>
          <h3>9</h3>
        </div>
        <div>
          <h3>10</h3>
        </div>
        <div>
          <h3>11</h3>
        </div>
        <div>
          <h3>12</h3>
        </div>
        <div>
          <h3>13</h3>
        </div>
        <div>
          <h3>14</h3>
        </div>
        <div>
          <h3>15</h3>
        </div>
        <div>
          <h3>16</h3>
        </div>
        <div>
          <h3>17</h3>
        </div>
        <div>
          <h3>18</h3>
        </div>
        <div>
          <h3>19</h3>
        </div>
        <div>
          <h3>20</h3>
        </div>
        <div>
          <h3>21</h3>
        </div>
      </Slider>
    </div>
  );
}

export default MultipleRows;
