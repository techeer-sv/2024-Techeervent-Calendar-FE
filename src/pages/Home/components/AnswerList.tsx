import Tree from '../../../../public/assets/Tree.svg';
import useModal from '../hooks/useModal';
import { modals } from '@/components/Modals';

const AnswerList = () => {
  const { openModal } = useModal();

  const handleTreeClick = async () => {
    openModal(modals.QuestionListModal, {
      onClose: () => {},
    });
  };

  return (
    <img
      src={Tree}
      alt="크리스마스 트리"
      className="absolute bottom-0"
      onClick={handleTreeClick}
    />
  );
};

export default AnswerList;
