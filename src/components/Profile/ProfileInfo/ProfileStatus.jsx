import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const ProfileStatus = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  const activateInputValue = () => {
    setEditMode(true)
  }

  const onStatusChange = (e) => {
    setStatus(e.target.value)
  }

  const deactivateInputValue = () => {
    setEditMode(false)
    props.updateUserStatus(status)
  }

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])

  return (
    <div>
      {editMode ?
        <div>
          <input
            onChange={onStatusChange}
            autoFocus={true}
            onBlur={deactivateInputValue}
            value={status} ></input>
        </div>
        :
        <div>
          <span onDoubleClick={activateInputValue} > {props.status || 'status'} </span>
        </div>
      }

    </div>
  )
}

export default ProfileStatus;