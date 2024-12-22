import useCalendar from '@/pages/Home/hooks/useCalendar';
import Tree from '../../../../public/assets/Tree.svg';
import useModal from '../hooks/useModal';
import { modals } from '@/components/Modals';
import { session } from '@/utils/session';

const AnswerList = () => {
  const { openModal } = useModal();
  const { today } = useCalendar(session.get('userId') || '');

  const handleTreeClick = async () => {
    if (today < 31) {
      openModal(modals.UnableConfirmModal, {
        onSubmit: () => {},
        Day: () => 31,
      });
    } else {
      openModal(modals.QuestionListModal, {
        onClose: () => {},
      });
    }
  };

  return (
    <button onClick={handleTreeClick}>
      <img src={Tree} alt="크리스마스 트리" />
    </button>
  );
};

export default AnswerList;
