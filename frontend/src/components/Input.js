function Input({ inputName, valueInput, setValueInput, typeInput }) {
  const style = {
    input: `
      w-full p-4 text-gray-300 
      text-sm
      outline-none 
      border border-cyan-500 rounded-xl
      bg-black peer  bg-opacity-50
      focus:border-red-600 focus:shadow-red-600 focus:shadow-l odd
      sm:text-xl 
    `,
    label: `
      text-gray-400 text-sm absolute top-4 left-6 
      px-4 rounded-lg 
      bg-black bg-opacity-70 
      pointer-events-none
      peer-focus:-top-4 peer-focus:left-6 peer-focus:text-red-600 peer-focus:text-[1rem]
      transition-all duration-500
      sm:text-xl 
    `,
  }
  return (
    <div className="w-full bg-transparent relative shadow-cyan-700 shadow-lg ">
      <input type={typeInput} className={style.input} placeholder=" " value={valueInput} onChange={e => setValueInput(e.target.value)} />
      <label className={style.label}>
        {inputName}</label>
    </div>
  )

}

export default Input;
