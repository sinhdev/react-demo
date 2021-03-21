import React from 'react';

const PageHeading = (props) => {
  return (
    <div>
      <h1 class="mt-4 mb-3">Blog Home One&nbsp;
      <small>Subheading</small>
      </h1>
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="/">Home</a>
        </li>
        <li class="breadcrumb-item active">Blog Home 1</li>
      </ol>
    </div>
  );
};

export default PageHeading;