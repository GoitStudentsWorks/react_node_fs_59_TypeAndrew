import {
  Ul,
  Li,
  Button,
  IconBtnMoveTask,
  IconBtnEditTask,
  IconBtnDeleteTask,
} from './TaskToolbar.styled';
import { useState } from 'react';
import { TaskModal } from 'components/TaskModal/TaskModal';
import { deleteTasksThunk, getTasksThunk } from 'Redux/tasks/tasks.thunk';
import { useDispatch, useSelector } from 'react-redux';
import {TaskMoveModal} from "../../TaskMoveModal/TaskMoveModal"

export const TaskToolbar = ({ status, task }) => {
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [isMoveModalOpen, setIsMoveModalOpen] = useState(false);
  const time = useSelector(state => state.calendar.time);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowMoveModal = () => {
    setIsMoveModalOpen(true);
    console.log(status, task)
  };

  /*const handleCloseMoveModal = () => {
    setIsMoveModalOpen(false);
  };*/

  const handleDelete = async () => {
    await dispatch(deleteTasksThunk(task._id));

    await dispatch(getTasksThunk(time));
  };

  return (
    <>
      <Ul>
        <Li>
          <Button type="button" onClick={handleShowMoveModal}>
            <IconBtnMoveTask />
          </Button>
        </Li>
        <Li>
          <Button type="button" onClick={handleShowModal}>
            <IconBtnEditTask />
          </Button>
        </Li>
        <Li>
          <Button type="button" onClick={handleDelete}>
            <IconBtnDeleteTask />
          </Button>
        </Li>
      </Ul>

      {showModal && (
        <TaskModal
          handleCloseModal={handleCloseModal}
          status={status}
          taskFormData={task}
        />
      )}
      {isMoveModalOpen && (
        <TaskMoveModal/>
      )}
    </>
  );
};
