import { useRef } from 'react';

const Search = (props) => {
  const enteredUserRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredUser = enteredUserRef.current.value;
    props.onInput(enteredUser);
  };

  return (
    <section>
      <form
        className='h-[60px] bg-lm-color6 rounded-lg flex justify-around items-center px-2 text-xs w-full shadow-lg space-x-1 dark:bg-dm-color4 md:space-x-4'
        onSubmit={submitHandler}
      >
        {/* Icon */}
        <svg
          className='fill-lm-color1'
          height='25'
          width='25'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M10.609 0c5.85 0 10.608 4.746 10.608 10.58 0 2.609-.952 5-2.527 6.847l5.112 5.087a.87.87 0 01-1.227 1.233l-5.118-5.093a10.58 10.58 0 01-6.848 2.505C4.759 21.16 0 16.413 0 10.58 0 4.747 4.76 0 10.609 0zm0 1.74c-4.891 0-8.87 3.965-8.87 8.84 0 4.874 3.979 8.84 8.87 8.84a8.855 8.855 0 006.213-2.537l.04-.047a.881.881 0 01.058-.053 8.786 8.786 0 002.558-6.203c0-4.875-3.979-8.84-8.87-8.84z' />
        </svg>
        {/* Input */}
        <input
          className='w-8/12 text-lm-color3 placeholder:text-lm-color3 dark:bg-dm-color4 dark:placeholder:text-dm-color2 dark:text-dm-color2 md:w-8/12 md:text-base lg:w-10/12 focus:outline-none'
          type='text'
          placeholder='Search GitHub username...'
          ref={enteredUserRef}
        />
        {/* Error */}
        <span className={`${props.hasError} text-xxs text-err-color font-bold w-[2/12] whitespace-nowrap md:text-xs`}>
          No results
        </span>
        {/* Search */}
        <button
          className='bg-lm-color1 p-2.5 rounded-lg font-bold text-dm-color2 hover:bg-lm-color9 md:px-5 md:text-base'
          type='submit'
        >
          Search
        </button>
      </form>
    </section>
  );
};

export default Search;
