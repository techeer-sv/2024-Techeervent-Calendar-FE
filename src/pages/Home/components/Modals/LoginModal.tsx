import DynamicIcon from '@/components/icon/DynamicIcon';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { searchUsers } from '@/services/user';
import { session } from '@/utils/session';
import debounce from 'lodash/debounce';

interface LoginModalProps {
  onSubmit: () => void;
}

const LoginModal = ({ onSubmit }: LoginModalProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [name, setName] = useState('');
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const debouncedSetName = debounce((value: string) => setName(value), 300);

  const { data: usersData } = useQuery({
    queryKey: ['searchUsers', name],
    queryFn: () => searchUsers(name),
    enabled: !!name,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSetName(e.target.value);
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const data = usersData?.data || [];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 20,
        }}
        className="w-modal h-modal max-h-modal p-4 rounded-[10px] bg-modalWhite flex flex-col items-center justify-center"
      >
        <DynamicIcon className="w-[118px] h-[116px]" type="snow" />
        <div className="my-[60px] flex-1">
          <div className="border-b-[1px] border-rgba(0, 0, 0, 0.5) mb-[10px]">
            <input
              ref={inputRef}
              className="block border-none placeholder:text-[#A1A1A1] focus:outline-none focus:border-none focus:ring-0 -mt-12"
              placeholder="이름을 입력해주세요."
              onChange={handleInputChange}
            />
          </div>
          {data.map(
            (user, index) =>
              user.userName === name && (
                <Button
                  key={user.userYear}
                  onClick={() => {
                    setSelectedIndex(index);
                  }}
                  className={`w-[40px] h-[20px] rounded-[5px] text-[12px] box-border mx-1 ${
                    selectedIndex === index
                      ? 'bg-modalButtonBackground text-white'
                      : 'bg-white text-black'
                  }`}
                >
                  {user.userYear}기
                </Button>
              )
          )}
        </div>

        <Button
          onClick={() => {
            session.set('userId', data[selectedIndex]?.userId);
            session.set('userName', name);
            onSubmit();
          }}
          disabled={!name || name !== data[selectedIndex]?.userName}
          className="w-full text-[16px] cursor-pointer rounded-full bg-modalButtonBackground text-whiteDefault box-border hover:opacity-70"
        >
          시작
        </Button>
      </motion.div>
    </div>
  );
};

export default LoginModal;
