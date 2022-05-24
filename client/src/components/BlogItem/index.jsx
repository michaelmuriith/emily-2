import React from 'react';
import { Link } from 'react-router-dom';
import Chip from '../Chip/index';
import './styles.css';

const BlogItem = () => {
  return (
    <div className="container md8">
      <div class="card">
            <div class="card-horizontal">
              <div class="img-square-wrapper">
                  <img class="" src="http://via.placeholder.com/300x180" alt="Card image cap" />
              </div>
              <div class="card-body">
                  <h4 class="card-title">Card title</h4>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
          </div>
          <div class="card-footer">
              <small class="text-muted">Last updated 3 mins ago</small>
          </div>
      </div>
    </div>
  );
};

export default BlogItem;