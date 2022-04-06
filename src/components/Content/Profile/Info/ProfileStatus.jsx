import React, { useEffect, useState } from "react";

const ProfileStatus = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  let onStatusChange = (e) => {
    setStatus(e.target.value);
  };

  let saveNewStatus = () => {
    if (status !== props.status) {
      props.updateStatus(status);
    }
    setEditMode(!editMode);
  };

  useEffect(() => {
    setStatus(props.status);
  }, [props.status])

  return (
    <div>
      {!editMode ? (
        <span onDoubleClick={() => setEditMode(!editMode)}>{props.status}</span>
      ) : (
        <div>
          <input
            // onBlur={() => setEditMode(!editMode)}
            onChange={onStatusChange}
            autoFocus
            value={status}
          />
          <button onClick={saveNewStatus}>save</button>
        </div>
      )}
    </div>
  );
};

export default ProfileStatus;
