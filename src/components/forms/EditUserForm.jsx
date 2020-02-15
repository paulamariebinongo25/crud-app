import React from "react";

const EditUserForm = () => {
  return (
    <div className="modal">
      <div className="modal-background">
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Edit User</p>
          </header>
          <section className="modal-card-body"></section>
          <footer className="model-card-foot">
            <div className="container">
              <div className="level">
                <div className="level-item">
                  <div className="buttons">
                    <button className="button is-link is-hoverable">
                      <span className="icon is-medium is-left">
                        <i className="fas fa-pen"></i>
                      </span>
                      <span>Edit</span>
                    </button>
                    <button
                      className="second-btn button is-danger"
                      // onClick={() => handleClickDelete(user.id)}
                    >
                      <span className="icon is-medium is-left">
                        <i className="fas fa-trash"></i>
                      </span>
                      <span>Delete</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default EditUserForm;
