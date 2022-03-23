import React, { ChangeEvent } from "react";
import { useEffect } from "react";
import { useState } from "react";

type PropsType = {
  status: string
  updateUserStatus: (status: string) => void
}
const ProfileStatus = ({ status, updateUserStatus }: PropsType): JSX.Element => {
  const [editMode, setEditMode] = useState(false);
  const [statusUS, setStatus] = useState(status);

  const activateInputValue = () => {
    setEditMode(true)
  }

  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.target.value)
  }

  const deactivateInputValue = () => {
    setEditMode(false)
    updateUserStatus(statusUS)
  }

  useEffect(() => {
    setStatus(status)
  }, [status])

  return (
    <div>
      {editMode ?
        <div>
          <input
            onChange={onStatusChange}
            autoFocus={true}
            onBlur={deactivateInputValue}
            value={statusUS} ></input>
        </div>
        :
        <div>
          <span onDoubleClick={activateInputValue} > {status || 'status'} </span>
        </div>
      }

    </div>
  )
}

export default ProfileStatus;