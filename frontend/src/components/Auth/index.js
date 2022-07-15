export { default as Login } from './Login'
export { default as Register } from './Register'
const style = {
  container: `
      pt-12 px-4 pb-40 border-cyan-400 border 
      bg-transparent relative group
      w-full 
      rounded-xl
      shadow-xl shadow-cyan-400
      m-auto flex flex-col gap-12 
      hover:border-red-500
      hover:border
      hover:shadow-red-500
      hover:scale-105
      transition-all
      duration-500
    `,
  label: `
      text-cyan-200 text-2xl font-bold
      absolute top-0 left-1/2
      -translate-y-full -translate-x-1/2
      group-hover:text-red-500
      group-hover:text-sm
    `,
}
export default style;
