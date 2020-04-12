import React from 'react';

import FunctionalComponent from './FunctionalComponent';
import ArrowFunctionalComponent from './ArrowFunctionalComponent';
import UserComponent from './UserComponent';
import UserPropTypes from './UserPropTypes';

function LearningApp() {
  return (
    <div className="container">
      <h2 className="text-center mt-4 mb-4">ÜMİT KARABACAK</h2>
      <hr />
      <UserPropTypes title="İŞ" statikBaslik="" />

      <hr />
      <UserComponent
        fullname="Ümit Karabacak"
        department="Yazılım Geliştirme Uzmanı"
        salary="75 000 ₺"
      >
        user childs
</UserComponent>
      <hr />

      <ArrowFunctionalComponent title="hello World!" >
        arrow childs
</ArrowFunctionalComponent>
      <hr />

      <FunctionalComponent title="hello World!" >
        functional child
</FunctionalComponent>
    </div>
  );
}

export default LearningApp;