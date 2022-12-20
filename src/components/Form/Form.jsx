import PropTypes from 'prop-types'
import { useState,/* useRef, useEffect */ } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
// import { AUTHOR } from '../../constants'
import { addMessage } from '../../store/messages/actions';

import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import styles from './Form.module.css'

export function Form() {
  const [text, setText] = useState('')
  const dispatch = useDispatch()
  const { chatId } = useParams()

  // const Input = (props) => {
  //   const inputRef = useRef(null);

  //   useEffect(() => {
  //     inputRef.current?.focus();
  //   }, []);

  //   return (
  //     <TextField fullWidth id="fullWidth"
  //       type='text'
  //       value={text}
  //       onChange={(event) => setText(event.target.value)}
  //       inputRef={inputRef}
  //       noValidate
  //       autoComplete="off"
  //       placeholder='input message'
  //       size="small"
  //     />
  //   )
  // }

  // const isFirstRender = useRef(true);
  // useEffect(() => {
  //   if (!isFirstRender) {
  //     console.log("i will be called on every render except first!");
  //   }
  // });
  // useEffect(() => {
  //   isFirstRender.current = false;
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault()
    //todo...
    dispatch(addMessage(chatId, text))
    setText('')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={styles.wrapper}>
          {/* <Input /> */}
          <TextField fullWidth id="fullWidth"
            type='text'
            value={text}
            onChange={(event) => setText(event.target.value)}
            inputRef={input => input && input.focus()}
            noValidate
            autoComplete="off"
            placeholder='input message'
            size="small"
          />
          <Button className={styles.button} type='submit' size="medium"
            variant="contained" endIcon={<SendIcon />}>
            Send
          </Button>
        </div>
      </form>
    </>
  )
}

Form.propTypes = {
  addMessage: PropTypes.func
}