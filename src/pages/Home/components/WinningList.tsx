import CrownButton from '../../../../public/assets/CrownBtn.svg';
import { useState } from 'react';
import WinningListModal from './Modals/WinningListModal';
import { fetchWinners } from '@/services/winning';
import { GetWinnersResponse } from '@/types/api/winning';
import { useQuery } from '@tanstack/react-query';

const WinningList = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const { data: winner } = useQuery<GetWinnersResponse>({
    queryKey: ['winners'],
    queryFn: fetchWinners,
  });

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <button
        className="absolute right-7 top-5 cursor-pointer"
        onClick={() => setModalOpen(true)}
      >
        <img src={CrownButton} alt="당첨자 리스트 버튼" />
      </button>
      {modalOpen && winner && (
        <WinningListModal winner={winner} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default WinningList;
