import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    minWidth:'50%'
  },
};


const CustomizeModal:React.FC<{closeFxn:any; children:React.ReactNode; isOpen:boolean;}> = ({closeFxn, children, isOpen}) => {
    return(
        <Modal isOpen={isOpen} onRequestClose={closeFxn} 
        style={customStyles}
        >
        {children}
        </Modal>
    );
}

export {CustomizeModal}