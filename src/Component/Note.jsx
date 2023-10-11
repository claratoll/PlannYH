import Draggable from 'react-draggable';
import BorderStar from './BorderStar';
function Note() {
  return (
    <Draggable>
      <section className='note'>
        <input type='text' className='input' placeholder='Header' />
        <textarea
          className='textarea'
          name='note'
          id='note'
          cols='10'
          rows='5'
          placeholder='Write your note'
        ></textarea>
        <BorderStar />
        <BorderStar />
        <BorderStar />
        <BorderStar />
        <BorderStar />
      </section>
    </Draggable>
  );
}

export default Note;
