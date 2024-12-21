import CrownButton from '../../../../public/assets/CrownBtn.svg';
import { useEffect, useState } from 'react';
import WinningListModal from './Modals/WinningListModal';
import { fetchWinners } from '@/services/winning';
import { GetWinnersResponse } from '@/types/api/winning';

const WinningList = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [winner, setWinner] = useState<GetWinnersResponse | null>(null);

  useEffect(() => {
    const getWinningList = async () => {
      try {
        const response = await fetchWinners();
        setWinner(response);
      } catch {
        return null;
      }
    };
    getWinningList();
  }, []);

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <img
        src={CrownButton}
        alt="당첨자 리스트 버튼"
        className="absolute right-7 top-5"
        onClick={() => setModalOpen(true)} // 클릭 시 모달 열기
      />

      {modalOpen && winner && (
        <WinningListModal winner={winner} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default WinningList;
