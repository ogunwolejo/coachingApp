import {useCallback} from 'react'
import Dropzone, {useDropzone} from 'react-dropzone'

function MyDropzone() {
  const {getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject, open} = useDropzone({
    noClick: true,
    noKeyboard: true,
    maxFiles:5,
    accept: {
      'image/*': ['.jpeg', '.png'],
      'text/csv': ['.csv'],
      'text/plain': ['.txt'],
      'audio/mpeg': ['.mp3'],
      'audio/webm': ['.weba'],
      'application/pdf': ['.pdf'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
      'application/vnd.openxmlformats-officedocument.presentationml.presentation': ['.pptx'],
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
      'application/msword': ['.doc'],
      'application/vnd.ms-excel': ['.xls'],
    },
  })

  return (
    <section className='container'>
      <div {...getRootProps({className: 'dropzone disabled'})}>
        <input {...getInputProps()} type='file' className='form-control' />
        <p className='fw-semibold text-grey-700'>
          Drag 'n' drop some files here, or click to select files
        </p>
        <p className="fw-light text-grey-400"><em>(Only *.jpeg, *.png, *.mp3, *.csv, *.txt, *.pdf, *.doc, *.docx, *.pptx, *.xls and *.xlsx files will be accepted)</em></p>
        <button onClick={open} className='btn btn-sm bg-primary text-white'>Select Files</button>
      </div>
    </section>
  )
}

export {MyDropzone}
