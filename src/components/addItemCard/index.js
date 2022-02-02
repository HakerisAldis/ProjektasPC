import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import PlusSign from '../../assets/images/plusSign.png';
import PropTypes from 'prop-types';
import AddSnowBoardForm from '../forms/addSnowBoardForm';
import { COLLECTIONS } from '../../constants/collections';
import AddSkisForm from '../forms/addSkisForm';
import AddHelmetForm from '../forms/addHelmetForm';
import AddBootsForm from '../forms/addBootsForm';

const AddItemCard = ({ children, handleSubmit, collection }) => {
  const [open, setOpen] = useState(false);

  const cancelButtonRef = useRef(null);

  const formSelect = () => {
    switch (collection) {
    case COLLECTIONS.SNOWBOARDS:
      return <AddSnowBoardForm />;
    case COLLECTIONS.SKIS:
      return <AddSkisForm />;
    case COLLECTIONS.HELMETS:
      return <AddHelmetForm />;
    case COLLECTIONS.SNOWBOARDBOOTS:
    case COLLECTIONS.SKIBOOTS:
      return <AddBootsForm />;
    }
  };

  return (
    <>
      <div
        className="max-w-xs max-h-72 rounded border border-slate-50 overflow-hidden shadow-lg my-4 items-center hover:shadow-xl mx-auto"
        onClick={() => setOpen(true)}
      >
        <img className="w-1/2 mx-auto py-2" src={PlusSign} alt='Pridėti' />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-center">
            Pridėti naują
          </div>
        </div>
      </div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpen}>
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <form onSubmit={handleSubmit} className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center w-full sm:mt-0 sm:ml-4 sm:mr-4 sm:text-left">
                      <Dialog.Title as="h3" className="text-lg font-medium text-gray-900 border-b">
                          Pridėti naują
                      </Dialog.Title>
                      <div className="mt-2">
                        {formSelect()}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-700 text-base font-medium text-white hover:bg-gray-600 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Pridėti
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Atšaukti
                  </button>
                </div>
              </form>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

AddItemCard.propTypes = {
  children: PropTypes.element,
  handleSubmit: PropTypes.func.isRequired,
  collection: PropTypes.string.isRequired
};

AddItemCard.defaultProps = {
  children: null
};

export default AddItemCard;
