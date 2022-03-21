import preloader from './../../../assets/images/loading.gif'

const Preloader = () => {
  return (
    <div style={{ background: 'white' }} >
      <img src={preloader} />
    </div>
  )
}

export default Preloader;