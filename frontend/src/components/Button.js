function Button({ buttonName, rotate }) {
  const style = {
    container: `
      bg-black bg-opacity-40 outline-none w-fit rounded-xl shadow-cyan-600 shadow-lg 
      border border-cyan-600
      hover:border hover:border-red-500
      hover:shadow-xl hover:shadow-red-700
      hover:scale-75
      transition-all
      duration-500
    `,
    button: `
      text-sm text-gray-300 px-8 py-4
      hover:text-red-500
      sm:text-xl

    `,
  }
  return (
    <div className={`${style.container} ${rotate}`}>
      <button className={style.button}>{buttonName}</button>
    </div >
  )
}
export default Button

