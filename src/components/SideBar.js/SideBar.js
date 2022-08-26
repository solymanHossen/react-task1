import React from 'react';

const SideBar = () => {
  return (
    <div>
     

<div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasLeft" aria-labelledby="offcanvasLeftLabel">  
  <div className="offcanvas-header">
    <h5 id="offcanvasLeftLabel">Sidebar</h5>
    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">

Sidebar
  </div>
</div>
    </div>
  );
};

export default SideBar;