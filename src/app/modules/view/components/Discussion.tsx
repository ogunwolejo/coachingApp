import React, {useState} from 'react'
import {
  FeedsWidget3,
  CreateDiscussion
} from '../../../../_metronic/partials/widgets'
import {CustomizeModal} from '../../../util/cmodal';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#modal');

export function Discussion() {

  const [openModal, setOpenModal] = useState<boolean>(false);

  const openModalFunction = () => setOpenModal(true);
  const closeModalFunction = () => setOpenModal(false);


  return (
    <>
    <div className='row g-5 g-xxl-8'>
      <div className='d-flex flex-row justify-content-end align-items-center'>
        <button className="btn btn-sm btn-lg bg-primary text-white mb-5" onClick={openModalFunction}>Create Discussion</button>
      </div>
        <div className='col-xl-6'>
            <FeedsWidget3 className='mb-5 mb-xxl-8' />
         </div>

         <div className='col-xl-6'>
            <FeedsWidget3 className='mb-5 mb-xxl-8' />
         </div>

        
    </div>
    <CustomizeModal 
      closeFxn={() => closeModalFunction()}
      isOpen={openModal}
    >
      <CreateDiscussion className='mb-5 mb-xxl-8' closeModal={() => closeModalFunction()}/>
    </CustomizeModal>
    </>
  )
}
