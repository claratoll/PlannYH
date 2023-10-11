function Sidebar() {
  return (
    <>
      <div className='sidebar'>
        <h2>Scrum View</h2>
        <section>
          <h3 className='h3-margin'>Scrum</h3>
          <p>Scrum master: Name 1</p>
        </section>
        <section>
          <h3 className='h3-margin'>Github</h3>
          <p>Merging master: Name 2</p>
        </section>
        <section>
          <h3 className='h3-margin'>Rules</h3>
          <section className='sidebar-rule-names'>
            <div className='small-box-one'></div>
            <p>Name 1</p>{' '}
          </section>
          <section className='sidebar-rule-names'>
            <div className='small-box-two'></div>
            <p>Name 2</p>{' '}
          </section>
          <section className='sidebar-rule-names'>
            <div className='small-box-three'></div>
            <p>Name 3</p>
          </section>
        </section>
      </div>
    </>
  );
}

export default Sidebar;
